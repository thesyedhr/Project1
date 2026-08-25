import sys

with open('src/components/CartDrawer.tsx', 'r') as f:
    content = f.read()

# Make it use framer-motion AnimatePresence
content = content.replace("import React, { useState } from 'react';", "import React, { useState } from 'react';\nimport { motion, AnimatePresence } from 'motion/react';")

# Instead of "if (!isOpen) return null;" I will wrap the JSX in AnimatePresence
# and use motion.div

# Remove "if (!isOpen) return null;"
content = content.replace("if (!isOpen) return null;", "")

old_return = """return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div 
          id="cart-drawer-panel"
          className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl border-l border-[#E5DACD] flex flex-col justify-between"
        >"""

new_return = """return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-sm"
        >
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div 
              id="cart-drawer-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%', transition: { ease: "easeInOut", duration: 0.3 } }}
              transition={{ type: "spring", stiffness: 300, damping: 30, mass: 1 }}
              className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl border-l border-[#E5DACD] flex flex-col justify-between"
            >"""

content = content.replace(old_return, new_return)

# Close AnimatePresence at the bottom
content = content.replace("""        </div>
      </div>
    </div>
  );
};""", """            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};""")

with open('src/components/CartDrawer.tsx', 'w') as f:
    f.write(content)

print("Cart drawer patched with framer-motion.")
