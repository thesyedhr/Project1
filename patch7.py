import sys

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

target = '<div className="w-fit mx-auto bg-white/75 backdrop-blur-md'
replacement = '<motion.div layout className="w-fit mx-auto bg-white/75 backdrop-blur-md'

if target in content:
    content = content.replace(target, replacement)
    
    # Also need to close it with </motion.div>
    close_target = '      </div>\n    </header>'
    close_replacement = '      </motion.div>\n    </header>'
    content = content.replace(close_target, close_replacement)
    
    with open('src/components/Navbar.tsx', 'w') as f:
        f.write(content)
    print("Patched inner div to motion.div layout")
else:
    print("Not found")
