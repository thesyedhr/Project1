import sys

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

# 1. Wrap the logo in a flex-1 container
logo_start = """        {/* Minimal Monogram Emblem Link */}
        <button"""
logo_end = """          <BakeryLogo size="sm" />
        </button>"""

if logo_start in content and logo_end in content:
    logo_block = content[content.find(logo_start):content.find(logo_end) + len(logo_end)]
    new_logo_block = f"""        {{/* Minimal Monogram Emblem Link */}}
        <div className="flex-1 flex justify-start">
          <button 
            id="nav-brand-logo"
            onClick={{() => onNavigate('hero')}}
            className="flex items-center gap-2.5 group focus:outline-none transition-transform active:scale-95"
            title="Return to Maison Levain Home"
          >
            <BakeryLogo size="sm" />
          </button>
        </div>"""
    content = content.replace(logo_block, new_logo_block)

# 2. Fix the nav element back to normal flow but with shrink-0
nav_target = '<nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 text-sm font-medium text-[#5E5244]">'
nav_replacement = '<nav className="hidden lg:flex items-center justify-center gap-1 text-sm font-medium text-[#5E5244] shrink-0">'
content = content.replace(nav_target, nav_replacement)

# 3. Fix the right side to have flex-1
right_target = '<div className="flex items-center gap-1.5 sm:gap-2">'
right_replacement = '<div className="flex-1 flex items-center justify-end gap-1.5 sm:gap-2">'
content = content.replace(right_target, right_replacement)

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(content)
