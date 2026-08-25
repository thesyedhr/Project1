import sys

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

target1 = "['journal', 'reviews', 'location'].includes(activeSection) || isMoreMenuOpen"
replacement1 = "['journal', 'reviews'].includes(activeSection) || isMoreMenuOpen"
content = content.replace(target1, replacement1)

target2 = "['journal', 'reviews', 'location'].includes(activeSection) || isMoreMenuOpen"
replacement2 = "['journal', 'reviews'].includes(activeSection) || isMoreMenuOpen"
content = content.replace(target2, replacement2)

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(content)

print("Navbar glitch patched")
