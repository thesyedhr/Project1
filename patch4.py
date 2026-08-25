import sys

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

start_marker = "{/* Minimal Monogram Emblem Link */}"
end_marker = "        {/* Navigation Links */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    new_logo_block = """        {/* Minimal Monogram Emblem Link */}
        <div className="flex-1 flex justify-start">
          <button 
            id="nav-brand-logo"
            onClick={() => onNavigate('hero')}
            className="flex items-center gap-2.5 group focus:outline-none transition-transform active:scale-95"
            title="Return to Maison Levain Home"
          >
            <BakeryLogo size="sm" />
          </button>
        </div>

"""
    new_content = content[:start_idx] + new_logo_block + content[end_idx:]
    with open('src/components/Navbar.tsx', 'w') as f:
        f.write(new_content)
    print("Patched!")
else:
    print("Markers not found.")
