import sys

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

target = """            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D0C5B8]"></div>
          </div>
        </motion.div>
      </motion.div>"""

replacement = """            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D0C5B8]"></div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Spacer to maintain vertical center balance */}
        <div className="flex-1 w-full"></div>
      </motion.div>"""

content = content.replace(target, replacement)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)

