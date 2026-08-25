import re

with open('src/components/BakeScheduleModal.tsx', 'r') as f:
    content = f.read()
    print("BakeScheduleModal:")
    print("div count:", content.count("<div"), content.count("</div>"))
    print("motion.div count:", content.count("<motion.div"), content.count("</motion.div>"))

with open('src/components/OrderConfirmationModal.tsx', 'r') as f:
    content = f.read()
    print("OrderConfirmationModal:")
    print("div count:", content.count("<div"), content.count("</div>"))
    print("motion.div count:", content.count("<motion.div"), content.count("</motion.div>"))

with open('src/components/OrderLookupModal.tsx', 'r') as f:
    content = f.read()
    print("OrderLookupModal:")
    print("div count:", content.count("<div"), content.count("</div>"))
    print("motion.div count:", content.count("<motion.div"), content.count("</motion.div>"))

with open('src/components/CheckoutModal.tsx', 'r') as f:
    content = f.read()
    print("CheckoutModal:")
    print("div count:", content.count("<div"), content.count("</div>"))
    print("motion.div count:", content.count("<motion.div"), content.count("</motion.div>"))
