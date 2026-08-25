import sys

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

bad_block = """        </div>

        {/* Bottom Spacer to maintain vertical center balance */}
        <div className="flex-1 w-full"></div>
      </motion.div>"""

good_block = """        </motion.div>"""

content = content.replace(bad_block, good_block)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)

