import sys

with open('src/components/CartDrawer.tsx', 'r') as f:
    content = f.read()

old_header_bag = '''                <motion.div 
                  animate={{ boxShadow: ["0px 0px 0px 0px rgba(141,75,38,0.2)", "0px 0px 0px 6px rgba(141,75,38,0)", "0px 0px 0px 0px rgba(141,75,38,0)"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-10 h-10 rounded-2xl bg-[#EFE8DC] flex items-center justify-center border border-[#D9CEBF] shadow-sm"
                >
                  <ShoppingBag className="w-5 h-5 text-[#8D4B26]" />
                </motion.div>'''

new_header_bag = '''                <div className="w-10 h-10 rounded-2xl bg-[#EFE8DC] flex items-center justify-center border border-[#D9CEBF] shadow-sm">
                  <ShoppingBag className="w-5 h-5 text-[#8D4B26]" />
                </div>'''

old_empty_bag = '''                  <motion.div 
                    animate={{ y: [0, -10, 0], rotate: [3, 6, 3] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center border border-[#D9CEBF] shadow-sm relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#EFE8DC] to-transparent rounded-3xl opacity-50" />
                    <ShoppingBag className="w-10 h-10 text-[#C17D44] relative z-10" />
                  </motion.div>'''

new_empty_bag = '''                  <div className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center border border-[#D9CEBF] rotate-3 shadow-sm relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#EFE8DC] to-transparent rounded-3xl opacity-50" />
                    <ShoppingBag className="w-10 h-10 text-[#C17D44] relative z-10" />
                  </div>'''

content = content.replace(old_header_bag, new_header_bag)
content = content.replace(old_empty_bag, new_empty_bag)

with open('src/components/CartDrawer.tsx', 'w') as f:
    f.write(content)

