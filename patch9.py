import sys

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

target = '<div className="flex items-center justify-end gap-1.5 sm:gap-2">'
replacement = '<div className="flex items-center justify-end gap-1.5 sm:gap-2 w-[340px] shrink-0">'

if target in content:
    content = content.replace(target, replacement)
    with open('src/components/Navbar.tsx', 'w') as f:
        f.write(content)
    print("Patched right side width")
else:
    print("Not found")

