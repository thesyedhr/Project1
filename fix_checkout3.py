import sys
import re

with open('src/components/CheckoutModal.tsx', 'r') as f:
    content = f.read()

content = re.sub(
    r'<div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-md animate-fade-in">\s*<div\s*id="checkout-modal"\s*className="relative w-full max-w-3xl bg-\[#FAF7F2\] rounded-3xl shadow-2xl border border-\[#E5DACD\] overflow-hidden my-auto"\s*>',
    r"""<AnimatePresence>
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
          >""",
    content
)

with open('src/components/CheckoutModal.tsx', 'w') as f:
    f.write(content)
