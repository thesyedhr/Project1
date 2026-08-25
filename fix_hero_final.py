import sys

with open('src/components/Hero.tsx', 'r') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if line.strip() == "</motion.div>" and "Top Important Info Cards Row" in lines[i+2] if i+2 < len(lines) else False:
        lines[i] = '        </div>\n\n        {/* Bottom Spacer to maintain vertical center balance */}\n        <div className="flex-1 w-full"></div>\n      </motion.div>\n'
        break

with open('src/components/Hero.tsx', 'w') as f:
    f.writelines(lines)

