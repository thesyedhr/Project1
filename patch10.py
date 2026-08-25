import sys

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

# 1. Remove w-[340px] shrink-0
t1 = 'className="flex items-center justify-end gap-1.5 sm:gap-2 w-[340px] shrink-0"'
r1 = 'className="flex items-center justify-end gap-1.5 sm:gap-2"'
content = content.replace(t1, r1)

# 2. Fix Track button
t2 = """          {/* Track Order Button */}
          <motion.button
            layout
            id="nav-order-lookup-btn"
            onClick={onOpenOrderLookup}
            className="h-[36px] px-2.5 text-xs font-medium text-[#5E5244] hover:text-[#341C02] hover:bg-[#F2ECE1] rounded-xl transition-colors flex items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap"
            title="Track Your Bakery Order"
          >
            <ReceiptText className="w-4 h-4 text-[#786C5E] shrink-0" />
            <AnimatePresence initial={false}>
              {!isSearchOpen && (
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="hidden sm:inline-block"
                >
                  Track
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>"""

r2 = """          {/* Track Order Button */}
          <motion.button
            layout
            id="nav-order-lookup-btn"
            onClick={onOpenOrderLookup}
            className="h-[36px] px-2.5 text-xs font-medium text-[#5E5244] hover:text-[#341C02] hover:bg-[#F2ECE1] rounded-xl transition-colors flex items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap"
            title="Track Your Bakery Order"
          >
            <ReceiptText className="w-4 h-4 text-[#786C5E] shrink-0" />
            <span className="hidden sm:inline-block">Track</span>
          </motion.button>"""
content = content.replace(t2, r2)

# 3. Fix Cart button
t3 = """          {/* Cart Button */}
          <motion.button
            layout
            id="nav-cart-btn"
            onClick={onOpenCart}
            className="relative h-[36px] flex items-center justify-center bg-[#341C02] hover:bg-[#43362A] text-[#FAF7F2] rounded-xl transition-colors shadow-sm overflow-hidden whitespace-nowrap"
            animate={{ paddingLeft: isSearchOpen ? '10px' : '16px', paddingRight: isSearchOpen ? '10px' : '16px' }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <AnimatePresence initial={false}>
              {!isSearchOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                  animate={{ width: "auto", opacity: 1, marginLeft: '8px' }}
                  exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex items-center gap-2 overflow-hidden"
                >
                  <span className="text-xs sm:text-sm font-semibold">
                    Cart {totalCartCount > 0 && `(${totalCartCount})`}
                  </span>
                  {totalCartPrice > 0 && (
                    <span className="hidden sm:inline-block text-xs font-medium text-[#D8C7B5] border-l border-white/20 pl-2">
                      ${totalCartPrice.toFixed(2)}
                    </span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>"""

r3 = """          {/* Cart Button */}
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
          </motion.button>"""
content = content.replace(t3, r3)

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(content)
print("Patched right side layout")
