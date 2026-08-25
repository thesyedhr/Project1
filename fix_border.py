import sys

with open('src/components/ProductDetailModal.tsx', 'r') as f:
    content = f.read()

# Remove the inline border class
content = content.replace(
    'className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#341C02] overflow-hidden my-auto"',
    'className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl shadow-2xl overflow-hidden my-auto"'
)

# Add the overlay right after the motion.div opens
target = 'onClick={(e) => e.stopPropagation()}\n          >'
replacement = 'onClick={(e) => e.stopPropagation()}\n          >\n            {/* Elegant Border Overlay to prevent scrollbar clipping */}\n            <div className="absolute inset-0 rounded-3xl border border-[#341C02] pointer-events-none z-50" />'

content = content.replace(target, replacement)

with open('src/components/ProductDetailModal.tsx', 'w') as f:
    f.write(content)

