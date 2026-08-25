import sys

with open('src/components/CartDrawer.tsx', 'r') as f:
    content = f.read()

# 1. Update Backdrop Alignment
content = content.replace(
    'bg-black/60 backdrop-blur-md flex justify-end p-4 sm:p-6"',
    'bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"'
)

# 2. Update Modal Animation and Container Classes
old_panel_start = """          <motion.div 
            id="cart-drawer-panel"
            initial={{ opacity: 0, x: 100, scale: 0.95, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, x: 100, scale: 0.95, rotateY: 10, transition: { ease: "easeInOut", duration: 0.3 } }}
            transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
            className="w-full max-w-[420px] h-full bg-[#FAF7F2] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden flex flex-col justify-between ring-1 ring-inset ring-[#341C02]/20"
            style={{ perspective: "1000px" }}
            onClick={(e) => e.stopPropagation()}
          >"""

new_panel_start = """          <motion.div 
            id="cart-drawer-panel"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30, transition: { ease: "easeInOut", duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.8 }}
            className="w-full max-w-[460px] max-h-[90vh] flex flex-col bg-[#FAF7F2] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden ring-1 ring-inset ring-[#341C02]/20"
            onClick={(e) => e.stopPropagation()}
          >"""

if old_panel_start in content:
    content = content.replace(old_panel_start, new_panel_start)
else:
    print("Warning: Modal container not found.")

# 3. Update Item Animations to pop upwards instead of sliding from the side
old_item_variants = """const itemVariants = {
  hidden: { opacity: 0, x: 20, scale: 0.95 },
  show: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 400, damping: 25 } }
};"""

new_item_variants = """const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 400, damping: 25 } }
};"""

if old_item_variants in content:
    content = content.replace(old_item_variants, new_item_variants)

with open('src/components/CartDrawer.tsx', 'w') as f:
    f.write(content)
