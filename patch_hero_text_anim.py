import sys
import re

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

def replacer(match):
    card_name = match.group(1)
    full_match = match.group(0)
    
    div_start = full_match.find('<div className="w-[140px]')
    if div_start == -1:
        return full_match
        
    div_end = full_match.rfind('</div>')
    inner = full_match[div_start:div_end+6]
    
    q = "'"
    motion_div = f'<motion.div initial={{{{ opacity: 0, x: -10 }}}} animate={{{{ opacity: expandedCard === {q}{card_name}{q} ? 1 : 0, x: expandedCard === {q}{card_name}{q} ? 0 : -10 }}}} transition={{{{ type: "spring", stiffness: 250, damping: 25, mass: 0.8 }}}}'
    
    animated_inner = inner.replace('<div', motion_div)
    animated_inner = animated_inner.replace('</div>', '</motion.div>')
    
    return full_match[:div_start] + animated_inner + full_match[div_end+6:]

pattern = r"""<\s*motion\.div[^>]*?animate=\{\{\s*width:\s*expandedCard\s*===\s*'([^']+)'\s*\?[^>]*?>\s*<div\s+className="w-\[140px\][^>]*>.*?</div>\s*</motion\.div>"""

new_content = re.sub(pattern, replacer, content, flags=re.DOTALL)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(new_content)

print("Hero text inner animations applied.")
