import re

with open('src/components/CheckoutModal.tsx', 'r') as f:
    content = f.read()
    print("div count:", content.count("<div"), content.count("</div>"))
    print("motion.div count:", content.count("<motion.div"), content.count("</motion.div>"))
