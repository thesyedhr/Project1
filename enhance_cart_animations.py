import sys

with open('src/components/CartDrawer.tsx', 'r') as f:
    content = f.read()

# 1. Update Container Variants
content = content.replace(
    '''const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};''',
    '''const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  }
};'''
)

# 2. Update Item Variants (Adding blur)
content = content.replace(
    '''const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 400, damping: 25 } }
};''',
    '''const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { type: "spring", stiffness: 350, damping: 25 } }
};'''
)

# 3. Update Modal Appearance (Adding blur and rotateX)
content = content.replace(
    '''          <motion.div 
            id="cart-drawer-panel"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30, transition: { ease: "easeInOut", duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.8 }}
            className="w-full max-w-[460px] max-h-[90vh] flex flex-col bg-[#FAF7F2] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden ring-1 ring-inset ring-[#341C02]/20"
            onClick={(e) => e.stopPropagation()}
          >''',
    '''          <motion.div 
            id="cart-drawer-panel"
            initial={{ opacity: 0, scale: 0.92, y: 40, filter: "blur(8px)", rotateX: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)", rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 40, filter: "blur(8px)", rotateX: -8, transition: { ease: "easeInOut", duration: 0.25 } }}
            transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.6 }}
            className="w-full max-w-[460px] max-h-[90vh] flex flex-col bg-[#FAF7F2] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden ring-1 ring-inset ring-[#341C02]/20"
            style={{ perspective: "1000px" }}
            onClick={(e) => e.stopPropagation()}
          >'''
)

# 4. Header Bag pulsing
content = content.replace(
    '''                <div className="w-10 h-10 rounded-2xl bg-[#EFE8DC] flex items-center justify-center border border-[#D9CEBF] shadow-sm">
                  <ShoppingBag className="w-5 h-5 text-[#8D4B26]" />
                </div>''',
    '''                <motion.div 
                  animate={{ boxShadow: ["0px 0px 0px 0px rgba(141,75,38,0.2)", "0px 0px 0px 6px rgba(141,75,38,0)", "0px 0px 0px 0px rgba(141,75,38,0)"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-10 h-10 rounded-2xl bg-[#EFE8DC] flex items-center justify-center border border-[#D9CEBF] shadow-sm"
                >
                  <ShoppingBag className="w-5 h-5 text-[#8D4B26]" />
                </motion.div>'''
)

# 5. Empty State Bag Floating
content = content.replace(
    '''                  <div className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center border border-[#D9CEBF] rotate-3 shadow-sm relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#EFE8DC] to-transparent rounded-3xl opacity-50" />
                    <ShoppingBag className="w-10 h-10 text-[#C17D44] relative z-10" />
                  </div>''',
    '''                  <motion.div 
                    animate={{ y: [0, -10, 0], rotate: [3, 6, 3] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center border border-[#D9CEBF] shadow-sm relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#EFE8DC] to-transparent rounded-3xl opacity-50" />
                    <ShoppingBag className="w-10 h-10 text-[#C17D44] relative z-10" />
                  </motion.div>'''
)

# 6. Checkout Arrow sliding
content = content.replace(
    '''<ArrowRight className="w-4 h-4" />''',
    '''<motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>'''
)

with open('src/components/CartDrawer.tsx', 'w') as f:
    f.write(content)

