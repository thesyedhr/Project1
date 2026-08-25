import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OrderDetails } from '../types';
import { X, Search, ReceiptText, Clock, MapPin, CheckCircle } from 'lucide-react';

interface OrderLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: OrderDetails[];
  onSelectOrder: (order: OrderDetails) => void;
}

export const OrderLookupModal: React.FC<OrderLookupModalProps> = ({
  isOpen,
  onClose,
  orders,
  onSelectOrder,
}) => {
  const [searchTerm, setSearchTerm] = useState('');


  const filteredOrders = orders.filter((o) =>
    o.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    o.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    o.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            id="order-lookup-modal"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
            className="relative w-full max-w-xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#341C02] overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Header */}
        <div className="p-6 sm:p-7 bg-[#341C02] text-[#FAF7F2] relative flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#E8C5A0] mb-1">
              <ReceiptText className="w-4 h-4 text-[#E27D60]" />
              <span>Track Bakery Order</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-white">
              Order Lookup & Live Status
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-5">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#786C5E] absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by Order ID (e.g. ML-123456) or Email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-[#D9CEBF] bg-white text-[#341C02] focus:outline-none focus:ring-1 focus:ring-[#341C02]"
            />
          </div>

          {/* List of Orders */}
          <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
            {filteredOrders.length === 0 ? (
              <div className="py-12 text-center text-[#786C5E] space-y-2">
                <ReceiptText className="w-8 h-8 text-[#A89C8E] mx-auto" />
                <p className="text-xs font-semibold">No recent orders found matching search.</p>
                <p className="text-[11px]">Orders placed in this session will appear here.</p>
              </div>
            ) : (
              filteredOrders.map((ord) => (
                <div
                  key={ord.id}
                  onClick={() => {
                    onSelectOrder(ord);
                    onClose();
                  }}
                  className="p-4 rounded-2xl bg-white border border-[#E5DACD] hover:border-[#341C02] transition-all cursor-pointer shadow-sm hover:shadow-md flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-xs text-[#8D4B26]">
                        {ord.id}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#EFE8DC] text-[#4A3C2F] font-semibold">
                        {ord.fulfillmentType === 'pickup' ? 'Counter Pickup' : 'Courier Delivery'}
                      </span>
                    </div>

                    <p className="font-serif font-bold text-sm text-[#341C02]">
                      {ord.customerName} • ${ord.total.toFixed(2)}
                    </p>

                    <p className="text-[11px] text-[#786C5E] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#A8794E]" />
                      <span>{ord.scheduledTime}</span>
                    </p>
                  </div>

                  <button className="px-3 py-1.5 rounded-xl bg-[#FAF7F2] text-xs font-semibold text-[#341C02] hover:bg-[#EFE8DC] transition-colors shrink-0">
                    View Receipt
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
