import sys

with open('src/components/ProductDetailModal.tsx', 'r') as f:
    content = f.read()

# Remove the absolute div overlay
target_overlay = '            {/* Elegant Border Overlay to prevent scrollbar clipping */}\n            <div className="absolute inset-0 rounded-3xl border border-[#341C02] pointer-events-none z-50" />\n'
content = content.replace(target_overlay, '')

# Change the modal classes to use ring
target_classes = 'className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl shadow-2xl overflow-hidden my-auto"'
replacement_classes = 'className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl shadow-2xl overflow-hidden my-auto ring-1 ring-inset ring-[#341C02]"'
content = content.replace(target_classes, replacement_classes)

with open('src/components/ProductDetailModal.tsx', 'w') as f:
    f.write(content)

