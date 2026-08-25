import sys

with open('src/components/ProductDetailModal.tsx', 'r') as f:
    content = f.read()

# We'll use a `useEffect` and `useState` to keep the last item.
# Or simpler:
# const displayItem = item || previousItemRef.current;
# Then replace all `item` references inside the component (except in useEffect) with `displayItem`.

