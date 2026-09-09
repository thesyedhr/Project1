
import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, Search, Sparkles, Clock, MapPin, ReceiptText, ChevronDown, BookOpen, User, Crown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem, CustomBoxItem, UserProfile } from '../types';

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
  currentUser: UserProfile | null;
  onOpenAuth: () => void;
  onOpenAccount: () => void;
  onOpenClubModal?: () => void;
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
  currentUser,
  onOpenAuth,
  onOpenAccount,
  onOpenClubModal,
}) => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0) + 
                         customBoxes.length;

  const totalCartPrice = cartItems.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0) +
                         customBoxes.reduce((acc, box) => acc + box.price, 0);

  // Keyboard shortcut Cmd+K / Ctrl+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
        setIsMobileSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearchChangeInternal = (value: string) => {
    onSearchChange(value);
    if (value.trim().length > 0 && activeSection !== 'catalog') {
      onNavigate('catalog');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full px-2 sm:px-4 lg:px-6 xl:px-8 pt-2.5 pb-2 transition-all">
      <motion.div 
        layout 
        className="w-full max-w-[1560px] mx-auto bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/75 border border-[#E6DACB]/85 rounded-2xl shadow-xs px-3 sm:px-4 lg:px-5 py-2 flex items-center justify-between gap-3 lg:gap-4" 
        style={{ WebkitBackdropFilter: "blur(12px)", backdropFilter: "blur(12px)" }}
      >
        
        {/* Navigation Links (Spacious Left Section with Logo Removed) */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 overflow-x-auto no-scrollbar">
          <nav className="flex items-center gap-1 sm:gap-1.5 text-xs font-semibold text-[#5E5244]">
            {[
              { id: 'catalog', label: 'Daily Bakes' },
              { id: 'grains', label: 'Heritage Grains' },
              { id: 'pairings', label: 'Pairing Room' },
              { id: 'craft', label: 'Craft & Hydration' },
              { id: 'workshops', label: 'Atelier Classes' },
              { id: 'club', label: 'Club Maison' },
            ].map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => {
                  if (link.id === 'club') {
                    if (onOpenClubModal) {
                      onOpenClubModal();
                    }
                    onNavigate('club');
                  } else {
                    onNavigate(link.id);
                  }
                }}
                className={`relative px-3 py-2 rounded-xl transition-all duration-200 text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 h-[36px] ${
                  activeSection === link.id
                    ? 'text-[#341C02]'
                    : link.id === 'club'
                    ? 'text-[#8D4B26] hover:text-[#341C02] hover:bg-[#F5EFE6]'
                    : 'text-[#5E5244] hover:text-[#341C02] hover:bg-[#F5EFE6]'
                }`}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavBubble"
                    className="absolute inset-0 bg-[#EFE8DC]/90 backdrop-blur-md rounded-xl shadow-[0_1px_3px_rgba(52,28,2,0.03)] border border-[#E5DACD]"
                    initial={false}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.id === 'club' && <Crown className="w-3.5 h-3.5 text-[#C17D44] relative z-10 shrink-0" />}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}

            <button
              id="nav-link-box-builder"
              onClick={onOpenBoxBuilder}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-[#8D4B26] hover:bg-[#F8EFE6] transition-colors text-xs font-bold border border-transparent relative whitespace-nowrap h-[36px]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C17D44] relative z-10 shrink-0" />
              <span className="relative z-10">Curate Box</span>
            </button>

            <button
              onClick={() => onNavigate('location')}
              className={`relative px-3 py-2 rounded-xl transition-colors duration-200 text-xs font-semibold whitespace-nowrap hidden sm:inline-flex items-center h-[36px] ${
                activeSection === 'location'
                  ? 'text-[#341C02]'
                  : 'text-[#5E5244] hover:text-[#341C02] hover:bg-[#F5EFE6]'
              }`}
            >
              {activeSection === 'location' && (
                <motion.div
                  layoutId="activeNavBubble"
                  className="absolute inset-0 bg-[#EFE8DC]/90 backdrop-blur-md rounded-xl shadow-[0_1px_3px_rgba(52,28,2,0.03)] border border-[#E5DACD]"
                  initial={false}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">About</span>
            </button>

            {/* Explore Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                className={`relative flex items-center gap-1 px-3 py-2 rounded-xl transition-colors duration-200 text-xs font-semibold whitespace-nowrap h-[36px] ${
                  ['journal', 'reviews'].includes(activeSection) || isMoreMenuOpen
                    ? 'text-[#341C02]'
                    : 'text-[#786C5E] hover:text-[#341C02] hover:bg-[#F5EFE6]'
                }`}
              >
                {(['journal', 'reviews'].includes(activeSection) || isMoreMenuOpen) && (
                  <motion.div
                    layoutId="activeNavBubble"
                    className="absolute inset-0 bg-[#EFE8DC]/90 backdrop-blur-md rounded-xl shadow-[0_1px_3px_rgba(52,28,2,0.03)] border border-[#E5DACD]"
                    initial={false}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1">
                  <span>Explore</span>
                  <ChevronDown className="w-3 h-3 transition-transform" style={{ transform: isMoreMenuOpen ? 'rotate(180deg)' : 'none' }} />
                </span>
              </button>

              {isMoreMenuOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-52 bg-[#FAF7F2] rounded-2xl p-2 shadow-xl border border-[#E5DACD] space-y-1 animate-fade-in z-50"
                  onMouseLeave={() => setIsMoreMenuOpen(false)}
                >
                  <button
                    onClick={() => {
                      if (onOpenClubModal) onOpenClubModal();
                      onNavigate('club');
                      setIsMoreMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors ${
                      activeSection === 'club' ? 'bg-[#EFE8DC] text-[#341C02]' : 'text-[#8D4B26] hover:bg-[#F5EFE6] hover:text-[#341C02]'
                    }`}
                  >
                    <Crown className="w-3.5 h-3.5 text-[#C17D44]" />
                    <span>Club Maison Tiers</span>
                  </button>

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

        {/* Center / Middle-Right: Compact & Sleek Search Bar with Constant Width */}
        <div className="hidden lg:flex shrink-0 w-[190px] xl:w-[220px]">
          <div className="flex items-center w-full h-[36px] bg-[#F9F6F0] border border-[#EFE9DF] focus-within:border-[#D0C2B0] focus-within:ring-1 focus-within:ring-[#D0C2B0]/30 focus-within:bg-white rounded-xl px-2.5 transition-all">
            <Search className="w-3.5 h-3.5 text-[#A89A8A] shrink-0" />
            <input
              ref={searchInputRef}
              id="nav-search-input"
              type="text"
              placeholder="Search daily bakes..."
              value={searchQuery}
              onChange={(e) => handleSearchChangeInternal(e.target.value)}
              className="w-full bg-transparent text-xs text-[#341C02] placeholder:text-[#A89A8A] focus:outline-none ml-2 min-w-0"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="text-[#A89A8A] hover:text-[#341C02] p-0.5 rounded-full hover:bg-[#EFE8DC] shrink-0 transition-colors"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Right side actions: Mobile Search Toggle, Order Lookup, Patron Auth, Cart */}
        <div className="flex items-center justify-end gap-1.5 sm:gap-2 shrink-0">
          
          {/* Mobile Search Toggle (< lg screens) */}
          <div className="lg:hidden relative">
            <button
              id="nav-mobile-search-btn"
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className={`h-[36px] w-[36px] flex items-center justify-center rounded-xl border transition-colors ${
                isMobileSearchOpen || searchQuery ? 'bg-[#FAF7F2] border-[#8D4B26] text-[#8D4B26]' : 'text-[#5E5244] border-transparent hover:bg-[#F2ECE1]'
              }`}
              title="Search Bakes"
            >
              <Search className="w-4 h-4" />
            </button>

            {isMobileSearchOpen && (
              <div className="absolute top-full right-0 mt-2 w-72 bg-[#F9F6F0] rounded-2xl p-2.5 shadow-2xl border border-[#EFE9DF] z-50 animate-fade-in flex items-center gap-2">
                <Search className="w-4 h-4 text-[#A89A8A] shrink-0 ml-1" />
                <input
                  type="text"
                  placeholder="Search sourdough, croissants..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChangeInternal(e.target.value)}
                  className="w-full bg-transparent text-xs text-[#341C02] placeholder:text-[#A89A8A] focus:outline-none"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="text-[#A89A8A] hover:text-[#341C02] text-xs p-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  onClick={() => setIsMobileSearchOpen(false)}
                  className="text-xs font-semibold text-[#8D4B26] px-2 py-1 rounded-lg hover:bg-[#EFE8DC]"
                >
                  Done
                </button>
              </div>
            )}
          </div>

          {/* Track Order Button */}
          <motion.button
            layout
            id="nav-order-lookup-btn"
            onClick={onOpenOrderLookup}
            className="h-[36px] px-2.5 sm:px-3 text-xs font-medium text-[#5E5244] hover:text-[#341C02] hover:bg-[#F2ECE1] rounded-xl transition-colors flex items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap shrink-0"
            title="Track Your Bakery Order"
          >
            <ReceiptText className="w-4 h-4 text-[#786C5E] shrink-0" />
            <span className="hidden sm:inline-block">Track</span>
          </motion.button>

          {/* Patron Login / Account Button */}
          {currentUser ? (
            <motion.button
              layout
              id="nav-account-btn"
              onClick={onOpenAccount}
              className="h-[36px] pl-2 pr-2.5 sm:pr-3 text-xs font-semibold text-[#341C02] bg-[#FAF7F2] hover:bg-[#F2ECE1] border border-[#E5DACD] hover:border-[#D0C0AC] rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs overflow-hidden whitespace-nowrap group shrink-0 active:scale-95"
              title={`Club Maison Levain: ${currentUser.name} (${currentUser.tier})`}
            >
              <div className="w-5 h-5 rounded-full bg-[#341C02] text-[#E8C5A0] text-[10px] font-serif font-bold flex items-center justify-center shrink-0 shadow-xs">
                {currentUser.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <span className="hidden sm:inline-block max-w-[80px] md:max-w-[100px] truncate text-xs font-bold text-[#341C02] group-hover:text-[#8D4B26] transition-colors">
                {currentUser.name.split(' ')[0]}
              </span>
              <Crown className="w-3 h-3 text-[#C17D44] shrink-0 hidden md:inline-block" />
            </motion.button>
          ) : (
            <motion.button
              layout
              id="nav-login-btn"
              onClick={onOpenAuth}
              className="h-[36px] px-2.5 sm:px-3 text-xs font-semibold text-[#5E5244] hover:text-[#341C02] hover:bg-[#F2ECE1] rounded-xl transition-all flex items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap border border-transparent hover:border-[#E5DACD]/60 shrink-0 active:scale-95"
              title="Club Maison Levain - Member Sign In"
            >
              <User className="w-4 h-4 text-[#8D4B26] shrink-0" />
              <span className="hidden sm:inline-block">Sign In</span>
            </motion.button>
          )}

          {/* Cart Button */}
          <motion.button
            layout
            id="nav-cart-btn"
            onClick={onOpenCart}
            className="relative h-[36px] px-3 sm:px-4 flex items-center justify-center bg-[#341C02] hover:bg-[#43362A] text-[#FAF7F2] rounded-xl transition-colors shadow-sm overflow-hidden whitespace-nowrap shrink-0 active:scale-95"
          >
            <ShoppingBag className="w-4 h-4 shrink-0 text-[#E8C5A0]" />
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden ml-1.5 sm:ml-2">
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
