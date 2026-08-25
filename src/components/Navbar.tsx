
import React, { useState } from 'react';
import { ShoppingBag, Search, Sparkles, Clock, MapPin, ReceiptText, ChevronDown, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem, CustomBoxItem } from '../types';
import { BakeryLogo } from './BakeryLogo';

interface NavbarProps {
  cartItems: CartItem[];
  customBoxes: CustomBoxItem[];
  onOpenCart: () => void;
  onOpenBoxBuilder: () => void;
  onOpenSchedule: () => void;
  onOpenOrderLookup: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItems,
  customBoxes,
  onOpenCart,
  onOpenBoxBuilder,
  onOpenSchedule,
  onOpenOrderLookup,
  activeSection,
  onNavigate,
  searchQuery,
  onSearchChange,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0) + 
                         customBoxes.length;

  const totalCartPrice = cartItems.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0) +
                         customBoxes.reduce((acc, box) => acc + box.price, 0);

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all">
      <motion.div layout className="w-fit mx-auto bg-white/75 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 border border-[#E6DACB]/80 rounded-2xl shadow-sm px-4 sm:px-6 py-2.5 flex items-center justify-between gap-8" style={{ WebkitBackdropFilter: "blur(12px)", backdropFilter: "blur(12px)" }}>
        
                {/* Left Side: Logo & Navigation */}
        <div className="flex items-center gap-6 xl:gap-10">
          {/* Minimal Monogram Emblem Link */}
          <button 
            id="nav-brand-logo"
            onClick={() => onNavigate('hero')}
            className="flex items-center gap-2.5 group focus:outline-none transition-transform active:scale-95"
            title="Return to Maison Levain Home"
          >
            <BakeryLogo size="sm" />
          </button>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-[#5E5244]">
          {[
            { id: 'catalog', label: 'Daily Bakes' },
            { id: 'grains', label: 'Heritage Grains' },
            { id: 'pairings', label: 'Pairing Room' },
            { id: 'craft', label: 'Craft & Hydration' },
            { id: 'workshops', label: 'Atelier Classes' },
          ].map((link) => (
            <button
              key={link.id}
              id={`nav-link-${link.id}`}
              onClick={() => onNavigate(link.id)}
              className={`relative px-3 py-1.5 rounded-xl transition-colors duration-300 ease-out text-xs font-semibold ${
                activeSection === link.id
                  ? 'text-[#341C02]'
                  : 'text-[#5E5244] hover:text-[#341C02] hover:bg-[#F5EFE6]'
              }`}
            >
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNavBubble"
                  className="absolute inset-0 bg-[#EFE8DC]/80 backdrop-blur-md rounded-xl shadow-[0_1px_3px_rgba(52,28,2,0.03)] border border-[#E5DACD]"
                  initial={false}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}

          <button
            id="nav-link-box-builder"
            onClick={onOpenBoxBuilder}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[#8D4B26] hover:bg-[#F8EFE6] transition-colors text-xs font-bold border border-transparent relative"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C17D44] relative z-10" />
            <span className="relative z-10">Curate Box</span>
          </button>

          <button
            onClick={() => onNavigate('location')}
            className={`relative px-3 py-1.5 rounded-xl transition-colors duration-300 ease-out text-xs font-semibold ${
              activeSection === 'location'
                ? 'text-[#341C02]'
                : 'text-[#5E5244] hover:text-[#341C02] hover:bg-[#F5EFE6]'
            }`}
          >
            {activeSection === 'location' && (
              <motion.div
                layoutId="activeNavBubble"
                className="absolute inset-0 bg-[#EFE8DC]/80 backdrop-blur-md rounded-xl shadow-[0_1px_3px_rgba(52,28,2,0.03)] border border-[#E5DACD]"
                initial={false}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">About</span>
          </button>

          {/* More menu dropdown for Schedule, Journal & Reviews */}
          <div className="relative">
            <button
              onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
              className={`relative flex items-center gap-1 px-3 py-1.5 rounded-xl transition-colors duration-300 ease-out text-xs font-semibold ${
                ['journal', 'reviews'].includes(activeSection) || isMoreMenuOpen
                  ? 'text-[#341C02]'
                  : 'text-[#786C5E] hover:text-[#341C02] hover:bg-[#F5EFE6]'
              }`}
            >
              {(['journal', 'reviews'].includes(activeSection) || isMoreMenuOpen) && (
                <motion.div
                  layoutId="activeNavBubble"
                  className="absolute inset-0 bg-[#EFE8DC]/80 backdrop-blur-md rounded-xl shadow-[0_1px_3px_rgba(52,28,2,0.03)] border border-[#E5DACD]"
                  initial={false}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1">
                <span>Explore</span>
                <ChevronDown className="w-3 h-3" />
              </span>
            </button>

            {isMoreMenuOpen && (
              <div 
                className="absolute top-full right-0 mt-2 w-48 bg-[#FAF7F2] rounded-2xl p-2 shadow-xl border border-[#E5DACD] space-y-1 animate-fade-in z-50"
                onMouseLeave={() => setIsMoreMenuOpen(false)}
              >
                <button
                  onClick={() => {
                    onOpenSchedule();
                    setIsMoreMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-[#341C02] hover:bg-[#EFE8DC] flex items-center gap-2"
                >
                  <Clock className="w-3.5 h-3.5 text-[#C17D44]" />
                  <span>Oven Schedule</span>
                </button>

                <button
                  onClick={() => {
                    onNavigate('journal');
                    setIsMoreMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors ${
                    activeSection === 'journal' ? 'bg-[#EFE8DC] text-[#341C02]' : 'text-[#5E5244] hover:bg-[#F5EFE6] hover:text-[#341C02]'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#A8794E]" />
                  <span>Fournil Journal</span>
                </button>

                <button
                  onClick={() => {
                    onNavigate('reviews');
                    setIsMoreMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors ${
                    activeSection === 'reviews' ? 'bg-[#EFE8DC] text-[#341C02]' : 'text-[#5E5244] hover:bg-[#F5EFE6] hover:text-[#341C02]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#8D4B26]" />
                  <span>Reviews & Michelin</span>
                </button>

                <button
                  onClick={() => {
                    onNavigate('location');
                    setIsMoreMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors ${
                    activeSection === 'location' ? 'bg-[#EFE8DC] text-[#341C02]' : 'text-[#5E5244] hover:bg-[#F5EFE6] hover:text-[#341C02]'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5 text-[#786C5E]" />
                  <span>Hours & Location</span>
                </button>
              </div>
            )}
          </div>
        </nav>

                </div>

        {/* Right side actions: Search, Order Lookup, Cart Button */}
        <div className="flex items-center justify-end gap-1.5 sm:gap-2">
          
          {/* Quick Search */}
          <motion.div 
            layout
            className={`flex items-center rounded-xl overflow-hidden transition-colors ${
              isSearchOpen ? 'bg-[#FAF7F2] border border-[#D9CEBF] shadow-inner' : 'hover:bg-[#F2ECE1] border border-transparent'
            }`}
            style={{ height: '36px' }}
          >
            <div className="flex items-center h-full px-2.5">
              <button 
                id="nav-search-toggle"
                onClick={() => !isSearchOpen && setIsSearchOpen(true)}
                className={`flex items-center justify-center gap-1.5 focus:outline-none h-full ${isSearchOpen ? 'cursor-default' : 'cursor-pointer'}`}
                title={isSearchOpen ? "" : "Search Bakery Items"}
                disabled={isSearchOpen}
              >
                <Search className={`w-4 h-4 shrink-0 transition-colors ${isSearchOpen ? 'text-[#786C5E]' : 'text-[#5E5244] hover:text-[#341C02]'}`} />
                <AnimatePresence initial={false}>
                  {!isSearchOpen && (
                    <motion.span
                      layout
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="hidden md:inline text-xs font-medium text-[#5E5244] hover:text-[#341C02] whitespace-nowrap overflow-hidden"
                    >
                      Search
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              
              <AnimatePresence initial={false}>
                {isSearchOpen && (
                  <motion.div
                    layout
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex items-center h-full overflow-hidden"
                  >
                    <input
                      id="nav-search-input"
                      type="text"
                      placeholder="Search sourdough..."
                      value={searchQuery}
                      onChange={(e) => onSearchChange(e.target.value)}
                      className="bg-transparent text-xs sm:text-sm text-[#341C02] focus:outline-none placeholder:text-[#9E9080] w-[140px] sm:w-[160px] ml-1.5"
                      autoFocus
                    />
                    <button
                      onClick={() => {
                        setIsSearchOpen(false);
                        onSearchChange('');
                      }}
                      className="text-xs text-[#786C5E] hover:text-[#341C02] px-1 h-full shrink-0"
                    >
                      ✕
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Track Order Button */}
          <motion.button
            layout
            id="nav-order-lookup-btn"
            onClick={onOpenOrderLookup}
            className="h-[36px] px-2.5 text-xs font-medium text-[#5E5244] hover:text-[#341C02] hover:bg-[#F2ECE1] rounded-xl transition-colors flex items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap"
            title="Track Your Bakery Order"
          >
            <ReceiptText className="w-4 h-4 text-[#786C5E] shrink-0" />
            <span className="hidden sm:inline-block">Track</span>
          </motion.button>

          {/* Cart Button */}
          <motion.button
            layout
            id="nav-cart-btn"
            onClick={onOpenCart}
            className="relative h-[36px] px-4 flex items-center justify-center bg-[#341C02] hover:bg-[#43362A] text-[#FAF7F2] rounded-xl transition-colors shadow-sm overflow-hidden whitespace-nowrap"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <div className="flex items-center gap-2 overflow-hidden ml-2">
              <span className="text-xs sm:text-sm font-semibold">
                Cart {totalCartCount > 0 && `(${totalCartCount})`}
              </span>
              {totalCartPrice > 0 && (
                <span className="hidden sm:inline-block text-xs font-medium text-[#D8C7B5] border-l border-white/20 pl-2">
                  ${totalCartPrice.toFixed(2)}
                </span>
              )}
            </div>
          </motion.button>
        </div>

      </motion.div>
    </header>
  );
};
