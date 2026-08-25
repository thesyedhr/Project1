import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem, CustomBoxItem, OrderDetails } from '../types';
import { X, Clock, MapPin, CreditCard, CheckCircle2, ShieldCheck, ArrowRight, User, Phone, Mail, ShoppingBag } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  customBoxes: CustomBoxItem[];
  fulfillmentType: 'pickup' | 'delivery';
  discountAmount: number;
  onCompleteOrder: (order: OrderDetails) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  customBoxes,
  fulfillmentType,
  discountAmount,
  onCompleteOrder,
}) => {

  // Form State
  const [customerName, setCustomerName] = useState('Elena Rostova');
  const [email, setEmail] = useState('elena.rostova@example.com');
  const [phone, setPhone] = useState('+1 (555) 382-9104');
  const [scheduledTime, setScheduledTime] = useState('Today • 11:30 AM (Oven Batch #03)');
  const [deliveryAddress, setDeliveryAddress] = useState('742 Evergreen Terrace, Historic District');
  const [orderNotes, setOrderNotes] = useState('Please pack sourdough in paper bread bags if possible.');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple_pay' | 'pickup_counter'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const itemsSubtotal = cartItems.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );
  const boxesSubtotal = customBoxes.reduce((acc, box) => acc + box.price, 0);
  const subtotal = itemsSubtotal + boxesSubtotal;

  const deliveryFee = fulfillmentType === 'delivery' ? 4.50 : 0;
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const tax = taxableAmount * 0.0825;
  const total = taxableAmount + tax + deliveryFee;

  const timeSlots = [
    'Today • 10:45 AM (Cooling Batard Batch)',
    'Today • 11:30 AM (Oven Batch #03)',
    'Today • 1:00 PM (Afternoon Hearth)',
    'Tomorrow • 8:00 AM (Warm Morning Viennoiserie)',
    'Tomorrow • 10:15 AM (Morning Sourdough)',
  ];

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !email || !phone) return;

    setIsProcessing(true);

    const newOrder: OrderDetails = {
      id: `ML-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      items: [...cartItems],
      customBoxes: [...customBoxes],
      customerName,
      email,
      phone,
      fulfillmentType,
      scheduledTime,
      deliveryAddress: fulfillmentType === 'delivery' ? deliveryAddress : undefined,
      orderNotes: orderNotes.trim() || undefined,
      subtotal,
      tax,
      deliveryFee,
      total,
      paymentMethod,
      status: 'confirmed',
    };

    setTimeout(() => {
      setIsProcessing(false);
      onCompleteOrder(newOrder);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            id="checkout-modal"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
            className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E5DACD] overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Header */}
        <div className="p-6 sm:p-7 bg-[#341C02] text-[#FAF7F2] relative flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#E8C5A0] mb-1">
              <ShieldCheck className="w-4 h-4 text-[#E27D60]" />
              <span>Artisanal Bakery Order</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-white">
              Complete Your Bakery Order
            </h2>
          </div>

          <button
            id="close-checkout-modal"
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmitOrder} className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Section 1: Customer Contact */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#5E5244] flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#8D4B26]" />
              <span>1. Guest Contact Details</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs text-[#6B5E4F] block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-[#D9CEBF] bg-white text-[#341C02] focus:outline-none focus:ring-1 focus:ring-[#341C02]"
                />
              </div>

              <div>
                <label className="text-xs text-[#6B5E4F] block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-[#D9CEBF] bg-white text-[#341C02] focus:outline-none focus:ring-1 focus:ring-[#341C02]"
                />
              </div>

              <div>
                <label className="text-xs text-[#6B5E4F] block mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-[#D9CEBF] bg-white text-[#341C02] focus:outline-none focus:ring-1 focus:ring-[#341C02]"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Fulfillment & Time */}
          <div className="space-y-3 pt-2 border-t border-[#EAE0D3]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#5E5244] flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#8D4B26]" />
              <span>
                2. {fulfillmentType === 'delivery' ? 'Courier Delivery Schedule' : 'Bakery Pickup Window'}
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-[#6B5E4F] block mb-1">Select Batch / Pickup Time</label>
                <select
                  value={scheduledTime}
                  onChange={(e) => setScheduledTime(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-[#D9CEBF] bg-white text-[#341C02] focus:outline-none focus:ring-1 focus:ring-[#341C02]"
                >
                  {timeSlots.map((ts) => (
                    <option key={ts} value={ts}>
                      {ts}
                    </option>
                  ))}
                </select>
              </div>

              {fulfillmentType === 'delivery' ? (
                <div>
                  <label className="text-xs text-[#6B5E4F] block mb-1">Local Delivery Address</label>
                  <input
                    type="text"
                    required
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-[#D9CEBF] bg-white text-[#341C02] focus:outline-none focus:ring-1 focus:ring-[#341C02]"
                  />
                </div>
              ) : (
                <div className="p-2.5 rounded-xl bg-[#F4EDE2] border border-[#E5DACD] text-xs text-[#5E5244] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8D4B26] shrink-0" />
                  <span>
                    Pick up at: <strong>Maison Levain, 42 Boulevard Saint-Honoré</strong>
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Section 3: Payment Choice */}
          <div className="space-y-3 pt-2 border-t border-[#EAE0D3]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#5E5244] flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-[#8D4B26]" />
              <span>3. Payment Selection</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <label className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer transition-all ${
                paymentMethod === 'card'
                  ? 'bg-white border-[#341C02] shadow-sm font-semibold text-[#341C02]'
                  : 'bg-white/60 border-[#D9CEBF] text-[#5E5244]'
              }`}>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="text-[#341C02]"
                />
                <span>Credit / Debit Card</span>
              </label>

              <label className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer transition-all ${
                paymentMethod === 'apple_pay'
                  ? 'bg-white border-[#341C02] shadow-sm font-semibold text-[#341C02]'
                  : 'bg-white/60 border-[#D9CEBF] text-[#5E5244]'
              }`}>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'apple_pay'}
                  onChange={() => setPaymentMethod('apple_pay')}
                  className="text-[#341C02]"
                />
                <span>Apple Pay / GPay</span>
              </label>

              <label className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer transition-all ${
                paymentMethod === 'pickup_counter'
                  ? 'bg-white border-[#341C02] shadow-sm font-semibold text-[#341C02]'
                  : 'bg-white/60 border-[#D9CEBF] text-[#5E5244]'
              }`}>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'pickup_counter'}
                  onChange={() => setPaymentMethod('pickup_counter')}
                  className="text-[#341C02]"
                />
                <span>Pay at Counter</span>
              </label>
            </div>
          </div>

          {/* Section 4: Baker's Instructions */}
          <div className="space-y-1.5 pt-2 border-t border-[#EAE0D3]">
            <label className="text-xs font-bold uppercase tracking-wider text-[#5E5244] block">
              Order Notes / Allergies / Packaging Notes
            </label>
            <input
              type="text"
              value={orderNotes}
              onChange={(e) => setOrderNotes(e.target.value)}
              placeholder="e.g. Leave on porch, keep croissant extra warm, etc."
              className="w-full text-xs p-2.5 rounded-xl border border-[#D9CEBF] bg-white text-[#341C02] focus:outline-none focus:ring-1 focus:ring-[#341C02]"
            />
          </div>

          {/* Order Summary & Submit Button */}
          <div className="p-4 rounded-2xl bg-[#F4EDE2] border border-[#E2D7CA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#5E5244]">
              <p>Total to Pay: <strong className="font-serif text-lg text-[#341C02] ml-1">${total.toFixed(2)}</strong></p>
              <p className="text-[11px] text-[#786C5E]">Includes taxes & packaging</p>
            </div>

            <button
              id="confirm-place-order-btn"
              type="submit"
              disabled={isProcessing}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#341C02] hover:bg-[#45372B] text-[#FAF7F2] rounded-xl font-semibold text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  <span>Preparing Order...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#A8D5BA]" />
                  <span>Confirm Bakery Order</span>
                </>
              )}
            </button>
          </div>

        </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
