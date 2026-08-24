import React, { useState, useEffect } from 'react';
import { BakeryItem, CartItem, CustomBoxItem, OrderDetails, Category, SlicingOption } from './types';
import { BAKERY_PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { TerroirGrainSection } from './components/TerroirGrainSection';
import { PairingGuideSection } from './components/PairingGuideSection';
import { ArtisanalCraftSection } from './components/ArtisanalCraftSection';
import { FournilJournalSection } from './components/FournilJournalSection';
import { AtelierSection } from './components/AtelierSection';
import { ReviewsAndPressSection } from './components/ReviewsAndPressSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CustomBoxBuilderModal } from './components/CustomBoxBuilderModal';
import { BakeScheduleModal } from './components/BakeScheduleModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { OrderLookupModal } from './components/OrderLookupModal';
import { BakeryFooter } from './components/BakeryFooter';
import { ShoppingBag, Sparkles, Clock, Check } from 'lucide-react';

export default function App() {
  // Products & Filtering State
  const [products] = useState<BakeryItem[]>(BAKERY_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('catalog');

  // Modals & Drawers State
  const [selectedDetailItem, setSelectedDetailItem] = useState<BakeryItem | null>(null);
  const [isBoxBuilderOpen, setIsBoxBuilderOpen] = useState<boolean>(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isOrderLookupOpen, setIsOrderLookupOpen] = useState<boolean>(false);
  const [confirmedOrder, setConfirmedOrder] = useState<OrderDetails | null>(null);

  // Cart & Fulfillment State
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('maison_levain_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [customBoxes, setCustomBoxes] = useState<CustomBoxItem[]>(() => {
    try {
      const saved = localStorage.getItem('maison_levain_boxes');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState<OrderDetails[]>(() => {
    try {
      const saved = localStorage.getItem('maison_levain_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [fulfillmentType, setFulfillmentType] = useState<'pickup' | 'delivery'>('pickup');
  const [discountCode, setDiscountCode] = useState<string>('');
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // LocalStorage synchronizers
  useEffect(() => {
    localStorage.setItem('maison_levain_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('maison_levain_boxes', JSON.stringify(customBoxes));
  }, [customBoxes]);

  useEffect(() => {
    localStorage.setItem('maison_levain_orders', JSON.stringify(orders));
  }, [orders]);

  // ScrollSpy effect to highlight navbar sections on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id.replace('-section', '');
            setActiveSection(sectionId);
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0
      }
    );

    const sections = [
      'hero',
      'catalog',
      'grains',
      'pairings',
      'craft',
      'workshops',
      'journal',
      'reviews',
      'location',
    ];
    
    const timeoutId = setTimeout(() => {
      sections.forEach((section) => {
        const element = document.getElementById(`${section}-section`);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // Toast Notification helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Cart Action Handlers
  const handleQuickAdd = (item: BakeryItem) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (ci) =>
          ci.itemId === item.id &&
          !ci.selectedSlicing &&
          !ci.warmed &&
          !ci.giftBox &&
          !ci.notes
      );
      if (existing) {
        return prev.map((ci) =>
          ci.id === existing.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [
        ...prev,
        {
          id: `cart-${Date.now()}-${Math.random()}`,
          itemId: item.id,
          item,
          quantity: 1,
          unitPrice: item.price,
        },
      ];
    });
    showToast(`Added 1x ${item.name} to basket`);
  };

  const handleDetailedAdd = (
    item: BakeryItem,
    quantity: number,
    slicing?: SlicingOption,
    warmed?: boolean,
    giftBox?: boolean,
    notes?: string
  ) => {
    const giftPrice = giftBox ? 2.50 : 0;
    const unitPrice = item.price + giftPrice;

    setCartItems((prev) => [
      ...prev,
      {
        id: `cart-${Date.now()}-${Math.random()}`,
        itemId: item.id,
        item,
        quantity,
        selectedSlicing: slicing,
        warmed,
        giftBox,
        notes,
        unitPrice,
      },
    ]);
    showToast(`Added ${quantity}x ${item.name} to basket`);
  };

  const handleAddCustomBox = (box: CustomBoxItem) => {
    setCustomBoxes((prev) => [...prev, box]);
    showToast(`Added ${box.name} to basket`);
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((ci) => (ci.id === cartItemId ? { ...ci, quantity: newQty } : ci))
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.id !== cartItemId));
  };

  const handleRemoveBox = (boxId: string) => {
    setCustomBoxes((prev) => prev.filter((b) => b.boxId !== boxId));
  };

  const handleApplyDiscount = (code: string): boolean => {
    if (code === 'BONJOUR10' || code === 'LEVAIN10') {
      const itemsTotal = cartItems.reduce(
        (acc, item) => acc + item.unitPrice * item.quantity,
        0
      );
      const boxesTotal = customBoxes.reduce((acc, box) => acc + box.price, 0);
      const discount = (itemsTotal + boxesTotal) * 0.10;
      setDiscountCode(code);
      setDiscountAmount(discount);
      return true;
    }
    return false;
  };

  const handleOrderCompleted = (newOrder: OrderDetails) => {
    setOrders((prev) => [newOrder, ...prev]);
    setCartItems([]);
    setCustomBoxes([]);
    setDiscountAmount(0);
    setDiscountCode('');
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
    setConfirmedOrder(newOrder);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'catalog') {
      document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'grains') {
      document.getElementById('grains-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'pairings') {
      document.getElementById('pairings-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'craft') {
      document.getElementById('craft-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'journal') {
      document.getElementById('journal-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'workshops') {
      document.getElementById('workshops-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'reviews') {
      document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'location') {
      document.getElementById('location-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectGrainCategory = (cat: Category) => {
    setSelectedCategory(cat);
    scrollToSection('catalog');
  };

  const totalItemCount =
    cartItems.reduce((acc, it) => acc + it.quantity, 0) + customBoxes.length;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#341C02] font-sans antialiased relative">
      
      {/* Organic Paper Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-multiply opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass-panel-dark text-[#FAF7F2] px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs font-semibold animate-fade-in border border-white/10">
          <Check className="w-4 h-4 text-[#A8D5BA]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Bottom Quick Cart on Mobile/Tablet */}
      {totalItemCount > 0 && !isCartOpen && (
        <div className="fixed bottom-6 right-6 z-30 lg:hidden">
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 bg-[#341C02] text-[#FAF7F2] px-4 py-3 rounded-2xl shadow-2xl font-semibold text-xs border border-white/20 active:scale-95 transition-all"
          >
            <ShoppingBag className="w-4 h-4 text-[#E8C5A0]" />
            <span>Basket ({totalItemCount})</span>
          </button>
        </div>
      )}

      {/* Top Floating Glassmorphism Navbar */}
      <Navbar
        cartItems={cartItems}
        customBoxes={customBoxes}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBoxBuilder={() => setIsBoxBuilderOpen(true)}
        onOpenSchedule={() => setIsScheduleOpen(true)}
        onOpenOrderLookup={() => setIsOrderLookupOpen(true)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Hero Section */}
      <Hero
        onOrderNow={() => scrollToSection('catalog')}
        onOpenBoxBuilder={() => setIsBoxBuilderOpen(true)}
        onOpenSchedule={() => setIsScheduleOpen(true)}
      />

      {/* Main Connected Bakery Experience */}
      <main className="flex-1 space-y-0">
        
        {/* 1. Daily Product Catalog & Online Ordering */}
        <ProductCatalog
          products={products}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onQuickAdd={handleQuickAdd}
          onSelectDetail={(item) => setSelectedDetailItem(item)}
          onOpenBoxBuilder={() => setIsBoxBuilderOpen(true)}
        />

        {/* 2. Heritage Grains & Terroir Explorer */}
        <TerroirGrainSection
          onSelectGrainCategory={handleSelectGrainCategory}
        />

        {/* 3. Sommelier Pairing Room & Tasting Table */}
        <PairingGuideSection
          products={products}
          onQuickAdd={handleQuickAdd}
          onOpenItemDetail={(item) => setSelectedDetailItem(item)}
        />

        {/* 4. Fermentation Craft & Interactive Hydration Analysis */}
        <ArtisanalCraftSection />

        {/* 5. A Photographic Day at the Fournil Journal */}
        <FournilJournalSection
          onOpenSchedule={() => setIsScheduleOpen(true)}
        />

        {/* 6. Paris Atelier & VIP Masterclasses */}
        <AtelierSection />

        {/* 7. Michelin & Patron Critical Acclaim */}
        <ReviewsAndPressSection />

      </main>

      {/* Footer & Location Section */}
      <BakeryFooter />

      {/* Modals & Slide-Overs */}
      
      {/* 1. Product Detail & Slicing Modal */}
      <ProductDetailModal
        item={selectedDetailItem}
        isOpen={Boolean(selectedDetailItem)}
        onClose={() => setSelectedDetailItem(null)}
        onAddToCart={handleDetailedAdd}
      />

      {/* 2. Custom Pastry Box Builder Modal */}
      <CustomBoxBuilderModal
        isOpen={isBoxBuilderOpen}
        onClose={() => setIsBoxBuilderOpen(false)}
        onAddBoxToCart={handleAddCustomBox}
      />

      {/* 3. Oven Bake Schedule Modal */}
      <BakeScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat as Category);
          scrollToSection('catalog');
        }}
      />

      {/* 4. Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        customBoxes={customBoxes}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onRemoveBox={handleRemoveBox}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        fulfillmentType={fulfillmentType}
        onFulfillmentTypeChange={setFulfillmentType}
        discountCode={discountCode}
        onApplyDiscountCode={handleApplyDiscount}
        discountAmount={discountAmount}
      />

      {/* 5. Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        customBoxes={customBoxes}
        fulfillmentType={fulfillmentType}
        discountAmount={discountAmount}
        onCompleteOrder={handleOrderCompleted}
      />

      {/* 6. Order Confirmation Receipt Modal */}
      <OrderConfirmationModal
        order={confirmedOrder}
        isOpen={Boolean(confirmedOrder)}
        onClose={() => setConfirmedOrder(null)}
      />

      {/* 7. Order Lookup / Tracking Modal */}
      <OrderLookupModal
        isOpen={isOrderLookupOpen}
        onClose={() => setIsOrderLookupOpen(false)}
        orders={orders}
        onSelectOrder={(ord) => setConfirmedOrder(ord)}
      />

    </div>
  );
}
