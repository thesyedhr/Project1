import sys

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

target = 'className="max-w-7xl mx-auto bg-white/75 backdrop-blur-md'
replacement = 'className="w-fit mx-auto bg-white/75 backdrop-blur-md'

if target in content:
    content = content.replace(target, replacement)
    with open('src/components/Navbar.tsx', 'w') as f:
        f.write(content)
    print("Patched inner div to w-fit")
else:
    print("Not found")

