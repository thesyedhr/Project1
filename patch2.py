import sys

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

# Make the outer container relative
target1 = '<div className="max-w-7xl mx-auto bg-white/75 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 border border-[#E6DACB]/80 rounded-2xl shadow-sm px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4"'
replacement1 = '<div className="max-w-7xl mx-auto bg-white/75 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 border border-[#E6DACB]/80 rounded-2xl shadow-sm px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 relative"'

if target1 in content:
    content = content.replace(target1, replacement1)
else:
    print("Warning: outer container not found")

# Make the nav absolute
target2 = '<nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-[#5E5244]">'
replacement2 = '<nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 text-sm font-medium text-[#5E5244]">'

if target2 in content:
    content = content.replace(target2, replacement2)
else:
    print("Warning: nav not found")

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(content)
