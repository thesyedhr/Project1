import re

with open('src/components/CustomBoxBuilderModal.tsx', 'r') as f:
    content = f.read()

# Add imports
if "motion/react" not in content:
    content = content.replace("import React, { useState } from 'react';", "import React, { useState } from 'react';\nimport { motion, AnimatePresence } from 'motion/react';")

# Remove early return
content = content.replace("  if (!isOpen) return null;\n", "")

# Fix the render
# Find the start of the return
# Currently it is: `  return (\n    <div className="fixed inset-0 z-50 ... animate-fade-in">\n      <div\n        id="box-builder-modal"`
# We want to change the outer divs to motion.divs.

return_pattern = r'  return \(\n    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md animate-fade-in">\n      <div\n        id="box-builder-modal"\n        className="relative w-full max-w-4xl bg-\[#FAF7F2\] rounded-3xl shadow-2xl overflow-hidden my-auto"'

new_return = """  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            id="box-builder-modal"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
            className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-3xl shadow-2xl overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}"""

content = re.sub(return_pattern, new_return, content)

# Fix the end of the return statement
content = content.replace("      </div>\n    </div>\n  );\n};", "          </motion.div>\n        </motion.div>\n      )}\n    </AnimatePresence>\n  );\n};")

with open('src/components/CustomBoxBuilderModal.tsx', 'w') as f:
    f.write(content)

