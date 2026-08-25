import sys

with open('src/components/ProductDetailModal.tsx', 'r') as f:
    content = f.read()

target_classes = 'className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl shadow-2xl overflow-hidden my-auto ring-1 ring-inset ring-[#341C02]"'
replacement_classes = 'className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl shadow-2xl overflow-hidden my-auto"'

content = content.replace(target_classes, replacement_classes)

with open('src/components/ProductDetailModal.tsx', 'w') as f:
    f.write(content)

