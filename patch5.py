import sys

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

# 1. Remove "relative" from the main wrapper just in case it's doing something weird, though not strictly necessary. Let's leave it.
target_wrapper = 'flex items-center justify-between gap-4 relative"'
if target_wrapper in content:
    content = content.replace(target_wrapper, 'flex items-center justify-between gap-4"')

# 2. Update Left Side (Logo)
logo_start = """        {/* Minimal Monogram Emblem Link */}
        <div className="flex-1 flex justify-start">
          <button 
            id="nav-brand-logo\""""

logo_end = """          </button>
        </div>"""

if logo_start in content:
    idx_s = content.find(logo_start)
    idx_e = content.find(logo_end, idx_s) + len(logo_end)
    old_logo_block = content[idx_s:idx_e]
    
    new_logo_block = """        {/* Left Side: Logo & Navigation */}
        <div className="flex items-center gap-6 xl:gap-10">
          {/* Minimal Monogram Emblem Link */}
          <button 
            id="nav-brand-logo\"""" + old_logo_block.split('id="nav-brand-logo"')[1].replace('          </button>\n        </div>', '          </button>')
            
    content = content.replace(old_logo_block, new_logo_block)
else:
    print("Logo block not found")

# 3. Update Nav
nav_target = '<nav className="hidden lg:flex items-center justify-center gap-1 text-sm font-medium text-[#5E5244] shrink-0">'
nav_replacement = '<nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-[#5E5244]">'
content = content.replace(nav_target, nav_replacement)

# 4. Close the left side div before Right side actions
right_side_target = '        {/* Right side actions: Search, Order Lookup, Cart Button */}'
if right_side_target in content:
    content = content.replace(right_side_target, '        </div>\n\n' + right_side_target)
else:
    print("Right side target not found")

# 5. Update Right side div
right_div_target = '<div className="flex-1 flex items-center justify-end gap-1.5 sm:gap-2">'
right_div_replacement = '<div className="flex items-center justify-end gap-1.5 sm:gap-2">'
content = content.replace(right_div_target, right_div_replacement)

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(content)
