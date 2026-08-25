import re

with open('src/components/OrderLookupModal.tsx', 'r') as f:
    content = f.read()

if "motion/react" not in content:
    content = content.replace("import React, { useState } from 'react';", "import React, { useState } from 'react';\nimport { motion, AnimatePresence } from 'motion/react';")

content = content.replace("  if (!isOpen) return null;\n", "")

target = """  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-md animate-fade-in">
      <div 
        id="order-lookup-modal"
        className="relative w-full max-w-xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#341C02] overflow-hidden my-auto"
      >"""

replacement = """  return (
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
          >"""
content = content.replace(target, replacement)

target_end = """      </div>
    </div>
  );
};"""

replacement_end = """          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};"""
content = content.replace(target_end, replacement_end)

with open('src/components/OrderLookupModal.tsx', 'w') as f:
    f.write(content)
