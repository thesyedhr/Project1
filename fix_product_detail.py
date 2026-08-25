import sys
import re

with open('src/components/ProductDetailModal.tsx', 'r') as f:
    content = f.read()

# I will replace everything from "return (" to the end of the file with a clean version.

# Wait, this might be too much, but I'll write a script to just replace the broken end tags.
# In the current file, the end tags look like this:
#             </div>
#           </div>
#         </motion.div>
#       </motion.div>
#     </motion.div>
#   )}
# </AnimatePresence>
#   );
# };

# Actually, I should just find the end of the modal body and fix it.
content = re.sub(
    r'(\s*)</div>\n\s*</div>\n\s*</div>\n\s*</motion\.div>\n\s*</motion\.div>\n\s*</motion\.div>\n\s*)}\n\s*</AnimatePresence>\n\s*\);\n};',
    r'\1</motion.div>\n\1</motion.div>\n\1</motion.div>\n\1)}\n</AnimatePresence>\n  );\n};',
    content, flags=re.DOTALL
)

with open('src/components/ProductDetailModal.tsx', 'w') as f:
    f.write(content)
