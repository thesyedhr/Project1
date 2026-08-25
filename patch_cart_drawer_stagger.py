import sys

with open('src/components/CartDrawer.tsx', 'r') as f:
    content = f.read()

# I want to animate the items in the cart drawer.
# I'll change the container of the cart items to be a motion.div and add variants for staggering.
# And I'll change each item to be a motion.div.

# Let's define variants
variants_code = """
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };
"""

# Insert variants code right after "const handleApplyPromo = ..."
insert_idx = content.find("const handleApplyPromo =")
if insert_idx != -1:
    end_func = content.find("};", insert_idx) + 2
    content = content[:end_func] + variants_code + content[end_func:]

# Replace `<div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">` with `<motion.div variants={containerVariants} initial="hidden" animate="show" ...>`
content = content.replace(
    '<div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">',
    '<motion.div variants={containerVariants} initial="hidden" animate="show" className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">'
)
content = content.replace(
    '</form>\n\n              </div>\n            )}',
    '</form>\n\n              </motion.div>\n            )}'
)
content = content.replace(
    '</button>\n              </div>\n            ) : (',
    '</button>\n              </motion.div>\n            ) : ('
)
# Note: I need to make sure I am replacing the correct closing div for `<div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">`
# Let's do it safer.

with open('src/components/CartDrawer.tsx', 'w') as f:
    f.write(content)

