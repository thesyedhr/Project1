import sys

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

target = """            <span className="relative z-10">Curate Box</span>
          </button>"""

about_button = """            <span className="relative z-10">Curate Box</span>
          </button>

          <button
            onClick={() => onNavigate('location')}
            className={`relative px-3 py-1.5 rounded-xl transition-colors duration-300 ease-out text-xs font-semibold ${
              activeSection === 'location'
                ? 'text-[#341C02]'
                : 'text-[#5E5244] hover:text-[#341C02] hover:bg-[#F5EFE6]'
            }`}
          >
            {activeSection === 'location' && (
              <motion.div
                layoutId="activeNavBubble"
                className="absolute inset-0 bg-[#EFE8DC]/80 backdrop-blur-md rounded-xl shadow-[0_1px_3px_rgba(52,28,2,0.03)] border border-[#E5DACD]"
                initial={false}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">About</span>
          </button>"""

if "About" not in content:
    content = content.replace(target, about_button)
    with open('src/components/Navbar.tsx', 'w') as f:
        f.write(content)
    print("Navbar patched")
else:
    print("Navbar already patched")
