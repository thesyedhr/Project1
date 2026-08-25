import re

with open('src/components/ProductDetailModal.tsx', 'r') as f:
    content = f.read()

# Replace `if (!item) return <AnimatePresence />;`
replacement = """  const previousItemRef = React.useRef<BakeryItem | null>(null);
  if (item) {
    previousItemRef.current = item;
  }
  const displayItem = item || previousItemRef.current;

  if (!displayItem) return <AnimatePresence />;
"""
content = content.replace("  if (!item) return <AnimatePresence />;\n", replacement)

# Now, we need to replace `item` with `displayItem` below line 54, but not the prop `item`.
# Since `item` is mostly used as `item.price`, `item.canBeSliced`, `{item.name}`, `item.imageUrl`, etc.
# We can regex replace `\bitem\b` with `displayItem` AFTER the displayItem declaration.

parts = content.split("  if (!displayItem) return <AnimatePresence />;\n")
if len(parts) == 2:
    new_bottom = re.sub(r'\bitem\b', 'displayItem', parts[1])
    content = parts[0] + "  if (!displayItem) return <AnimatePresence />;\n" + new_bottom

with open('src/components/ProductDetailModal.tsx', 'w') as f:
    f.write(content)

