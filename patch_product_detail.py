import sys
import re

with open('src/components/ProductDetailModal.tsx', 'r') as f:
    content = f.read()

# Add framer-motion import
content = content.replace("import React, { useState } from 'react';", "import React, { useState } from 'react';\nimport { motion, AnimatePresence } from 'motion/react';")

# Remove early return
content = content.replace("  if (!isOpen || !item) return null;\n", "")

old_return = """  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-4xl bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative max-h-[90vh]"
      >"""

new_return = """  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
            className="w-full max-w-4xl bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >"""

content = content.replace(old_return, new_return)

# Fix the end tags
end_tags = """        </div>
      </div>
    </div>
  );"""

new_end_tags = """        </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );"""

content = content.replace(end_tags, new_end_tags)

# Also let's animate the children inside to pop in sequentially
# Add variants
variants_str = """
  const contentVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };
"""

insert_idx = content.find("const slicingOptions")
if insert_idx != -1:
    content = content[:insert_idx] + variants_str + content[insert_idx:]

content = content.replace(
    '<div className="flex-1 p-6 md:p-8 overflow-y-auto space-y-6 md:space-y-8 flex flex-col">',
    '<motion.div variants={contentVariants} initial="hidden" animate="show" className="flex-1 p-6 md:p-8 overflow-y-auto space-y-6 md:space-y-8 flex flex-col">'
)

content = content.replace(
    '</button>\n        </div>\n      </div>',
    '</button>\n        </motion.div>\n      </motion.div>'
)

content = content.replace(
    '          <div className="space-y-2">\n            <div className="flex items-start justify-between gap-4">',
    '          <motion.div variants={childVariants} className="space-y-2">\n            <div className="flex items-start justify-between gap-4">'
)
content = content.replace(
    '            <p className="text-sm text-[#786C5E] leading-relaxed">\n              {item.description}\n            </p>\n          </div>',
    '            <p className="text-sm text-[#786C5E] leading-relaxed">\n              {item.description}\n            </p>\n          </motion.div>'
)

content = content.replace(
    '          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">',
    '          <motion.div variants={childVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-3">'
)
content = content.replace(
    '            </div>\n          </div>\n\n          {/* Customization Options */}',
    '            </div>\n          </motion.div>\n\n          {/* Customization Options */}'
)

content = content.replace(
    '          <div className="space-y-5 pt-6 border-t border-[#EAE0D3]">',
    '          <motion.div variants={childVariants} className="space-y-5 pt-6 border-t border-[#EAE0D3]">'
)
content = content.replace(
    '              </div>\n            </div>\n          </div>',
    '              </div>\n            </div>\n          </motion.div>'
)

content = content.replace(
    '          <div className="pt-6 border-t border-[#EAE0D3] mt-auto">',
    '          <motion.div variants={childVariants} className="pt-6 border-t border-[#EAE0D3] mt-auto">'
)
content = content.replace(
    '              </button>\n            </div>\n          </div>',
    '              </button>\n            </div>\n          </motion.div>'
)

with open('src/components/ProductDetailModal.tsx', 'w') as f:
    f.write(content)
