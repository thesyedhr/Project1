import React, { useState } from 'react';
import { CartItem, CustomBoxItem } from '../types';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Gift, Tag, Check, Clock, Sparkles } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  customBoxes: CustomBoxItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onRemoveBox: (boxId: string) => void;
  onProceedToCheckout: () => void;
  fulfillmentType: 'pickup' | 'delivery';
  onFulfillmentTypeChange: (type: 'pickup' | 'delivery') => void;
  discountCode: string;
  onApplyDiscountCode: (code: string) => boolean;
  discountAmount: number;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  customBoxes,
  onUpdateQuantity,
  onRemoveItem,
  onRemoveBox,
  onProceedToCheckout,
  fulfillmentType,
  onFulfillmentTypeChange,
  discountCode,
  onApplyDiscountCode,
  discountAmount,
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState(false);

  if (!isOpen) return null;

  const itemsSubtotal = cartItems.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );
  const boxesSubtotal = customBoxes.reduce((acc, box) => acc + box.price, 0);
  const subtotal = itemsSubtotal + boxesSubtotal;

  const deliveryFee = fulfillmentType === 'delivery' ? 4.50 : 0;
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const tax = taxableAmount * 0.0825; // 8.25% local bakery tax
  const total = taxableAmount + tax + deliveryFee;

  const isEmpty = cartItems.length === 0 && customBoxes.length === 0;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    if (!promoInput.trim()) return;

    const applied = onApplyDiscountCode(promoInput.trim().toUpperCase());
    if (applied) {
      setPromoSuccess(true);
      setPromoError('');
    } else {
      setPromoError('Invalid coupon. Try "BONJOUR10" for 10% off.');
      setPromoSuccess(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div 
          id="cart-drawer-panel"
          className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl border-l border-[#E5DACD] flex flex-col justify-between"
        >
          
          {/* Cart Header */}
          <div className="p-5 sm:p-6 bg-[#341C02] text-[#FAF7F2] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#E8C5A0]" />
              <div>
                <h2 className="font-serif text-xl font-bold text-white">Your Bakery Basket</h2>
                <p className="text-[11px] text-[#D8C7B5]">
                  {cartItems.length + customBoxes.length} unique selections
                </p>
              </div>
            </div>

            <button
              id="close-cart-drawer"
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content / Scroll Area */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
            
            {isEmpty ? (
              <div className="py-16 text-center space-y-5">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl relative">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Pain_au_chocolat_Luc_Viatour.jpg/1280px-Pain_au_chocolat_Luc_Viatour.jpg" alt="Empty Basket" className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#341C02]">
                  Your basket is currently empty
                </h3>
                <p className="text-xs text-[#786C5E] max-w-xs mx-auto font-medium">
                  Explore our daily sourdough loaves, freshly laminated croissants, or build a custom pastry box.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-[#341C02] text-[#FAF7F2] rounded-xl text-xs font-semibold hover:bg-[#45372B] transition-all shadow-md active:scale-95 mt-2"
                >
                  Browse Artisanal Menu
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                
                {/* Fulfillment Selector */}
                <div className="p-1 rounded-xl bg-[#EFE8DC] flex gap-1">
                  <button
                    type="button"
                    onClick={() => onFulfillmentTypeChange('pickup')}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                      fulfillmentType === 'pickup'
                        ? 'bg-white text-[#341C02] shadow-sm'
                        : 'text-[#6B5E4F] hover:text-[#341C02]'
                    }`}
                  >
                    Bakery Pickup (Free)
                  </button>
                  <button
                    type="button"
                    onClick={() => onFulfillmentTypeChange('delivery')}
                    className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                      fulfillmentType === 'delivery'
                        ? 'bg-white text-[#341C02] shadow-sm'
                        : 'text-[#6B5E4F] hover:text-[#341C02]'
                    }`}
                  >
                    Courier Delivery ($4.50)
                  </button>
                </div>

                {/* Custom Box Items */}
                {customBoxes.map((box) => (
                  <div
                    key={box.boxId}
                    className="p-4 rounded-2xl bg-white border border-[#E5DACD] shadow-sm space-y-2.5 relative"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#8D4B26]">
                          <Sparkles className="w-3 h-3" />
                          <span>Curated Box</span>
                        </div>
                        <h4 className="font-serif text-base font-bold text-[#341C02]">
                          {box.name}
                        </h4>
                        <p className="text-xs text-[#786C5E]">
                          {box.packagingType}
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="font-serif font-bold text-base text-[#341C02]">
                          ${box.price.toFixed(2)}
                        </span>
                        <button
                          onClick={() => onRemoveBox(box.boxId)}
                          className="block text-xs text-[#8D4B26] hover:underline mt-1 ml-auto"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Box Pastries List */}
                    <div className="p-2.5 rounded-xl bg-[#FAF7F2] text-xs text-[#5E5244] space-y-1">
                      <p className="font-semibold text-[11px] text-[#786C5E]">Included Pastries:</p>
                      <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                        {box.items.map((i, idx) => (
                          <li key={idx}>
                            {i.quantity}x {i.item.name}
                          </li>
                        ))}
                      </ul>
                      {box.giftMessage && (
                        <p className="text-[11px] italic text-[#8D4B26] pt-1 border-t border-[#EAE0D3]">
                          Note: "{box.giftMessage}"
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Standard Cart Items */}
                {cartItems.map((cartItem) => (
                  <div
                    key={cartItem.id}
                    className="p-3.5 rounded-2xl bg-white border border-[#E5DACD] shadow-sm flex items-start gap-3"
                  >
                    <img
                      src={cartItem.item.imageUrl}
                      alt={cartItem.item.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-serif text-sm font-bold text-[#341C02] truncate">
                          {cartItem.item.name}
                        </h4>
                        <span className="font-serif font-bold text-sm text-[#341C02] shrink-0">
                          ${(cartItem.unitPrice * cartItem.quantity).toFixed(2)}
                        </span>
                      </div>

                      {/* Modifiers (Slicing / Warming / Gift) */}
                      <div className="text-[11px] text-[#786C5E] space-y-0.5">
                        {cartItem.selectedSlicing && (
                          <p>Slice: <span className="font-medium text-[#4A3C2F]">{cartItem.selectedSlicing}</span></p>
                        )}
                        {cartItem.warmed && (
                          <p className="text-[#96381C] font-semibold">Oven-Warmed for Pickup</p>
                        )}
                        {cartItem.giftBox && (
                          <p className="text-[#8D4B26]">Linen Gift Box (+$2.50)</p>
                        )}
                      </div>

                      {/* Quantity & Remove */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center bg-[#FAF7F2] border border-[#D9CEBF] rounded-lg p-0.5">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(cartItem.id, cartItem.quantity - 1)}
                            className="p-1 hover:bg-[#EFE8DC] rounded text-[#5E5244] transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 font-serif font-bold text-xs text-[#341C02]">
                            {cartItem.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(cartItem.id, cartItem.quantity + 1)}
                            className="p-1 hover:bg-[#EFE8DC] rounded text-[#5E5244] transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(cartItem.id)}
                          className="text-[#8D4B26] hover:text-[#341C02] p-1 transition-colors"
                          title="Remove Item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>
                  </div>
                ))}

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="pt-2">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 text-[#786C5E] absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="Promo code (BONJOUR10)"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        className="w-full text-xs pl-8 pr-3 py-2 rounded-xl border border-[#D9CEBF] bg-white text-[#341C02] focus:outline-none focus:ring-1 focus:ring-[#341C02] uppercase"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-[#FAF7F2] border border-[#D9CEBF] hover:bg-[#EFE8DC] rounded-xl text-xs font-semibold text-[#341C02] transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoError && (
                    <p className="text-[11px] text-[#C15C3D] mt-1 pl-1">{promoError}</p>
                  )}
                  {discountAmount > 0 && (
                    <p className="text-[11px] text-[#388E3C] mt-1 pl-1 font-semibold flex items-center gap-1">
                      <Check className="w-3 h-3" /> Promo applied: -${discountAmount.toFixed(2)}
                    </p>
                  )}
                </form>

              </div>
            )}

          </div>

          {/* Cart Footer Checkout Bar */}
          {!isEmpty && (
            <div className="p-5 sm:p-6 bg-white border-t border-[#E5DACD] space-y-4">
              
              {/* Financial Calculation */}
              <div className="space-y-1.5 text-xs text-[#5E5244]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#341C02]">${subtotal.toFixed(2)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#388E3C]">
                    <span>Discount ({discountCode})</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>
                    {fulfillmentType === 'delivery' ? 'Courier Delivery' : 'Bakery Pickup'}
                  </span>
                  <span>{deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}</span>
                </div>

                <div className="flex justify-between">
                  <span>Estimated Tax (8.25%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-base font-bold text-[#341C02] pt-2 border-t border-[#EFE8DC]">
                  <span className="font-serif">Total</span>
                  <span className="font-serif text-lg">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                id="cart-checkout-btn"
                onClick={onProceedToCheckout}
                className="w-full bg-[#341C02] hover:bg-[#45372B] text-[#FAF7F2] py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-[#786C5E] flex items-center justify-center gap-1">
                <Clock className="w-3 h-3 text-[#A8794E]" />
                <span>Ready for pickup within 25–40 minutes</span>
              </p>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
