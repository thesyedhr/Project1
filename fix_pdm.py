import sys

with open('src/components/ProductDetailModal.tsx', 'r') as f:
    content = f.read()

content = content.replace("  )}", "")

with open('src/components/ProductDetailModal.tsx', 'w') as f:
    f.write(content)
