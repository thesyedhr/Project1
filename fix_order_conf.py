import re

with open('src/components/OrderConfirmationModal.tsx', 'r') as f:
    content = f.read()

if "motion/react" not in content:
    content = content.replace("import React from 'react';", "import React, { useRef } from 'react';\nimport { motion, AnimatePresence } from 'motion/react';")

replacement = """  const previousOrderRef = useRef<OrderDetails | null>(null);
  if (order) {
    previousOrderRef.current = order;
  }
  const displayOrder = order || previousOrderRef.current;

  if (!displayOrder) return <AnimatePresence />;
"""
content = content.replace("  if (!isOpen || !order) return null;\n", replacement)

target = """  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md animate-fade-in">
      <div 
        id="order-confirmation-modal"
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E5DACD] overflow-hidden my-auto"
      >"""

replacement_render = """  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            id="order-confirmation-modal"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
            className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E5DACD] overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >"""
content = content.replace(target, replacement_render)

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

# Also need to replace `order.` with `displayOrder.` below line 28
parts = content.split("  if (!displayOrder) return <AnimatePresence />;\n")
if len(parts) == 2:
    new_bottom = re.sub(r'\border\b', 'displayOrder', parts[1])
    content = parts[0] + "  if (!displayOrder) return <AnimatePresence />;\n" + new_bottom

with open('src/components/OrderConfirmationModal.tsx', 'w') as f:
    f.write(content)
