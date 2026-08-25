import sys

with open('src/components/Navbar.tsx', 'r') as f:
    content = f.read()

start_marker = "{/* Quick Search */}"
end_marker = "{/* Track Order Button */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    new_search_block = """{/* Quick Search */}
          <motion.div 
            layout
            className={`flex items-center rounded-xl overflow-hidden transition-colors ${
              isSearchOpen ? 'bg-[#FAF7F2] border border-[#D9CEBF] shadow-inner' : 'hover:bg-[#F2ECE1] border border-transparent'
            }`}
            style={{ height: '36px' }}
          >
            <div className="flex items-center h-full px-2.5">
              <button 
                id="nav-search-toggle"
                onClick={() => !isSearchOpen && setIsSearchOpen(true)}
                className={`flex items-center justify-center gap-1.5 focus:outline-none h-full ${isSearchOpen ? 'cursor-default' : 'cursor-pointer'}`}
                title={isSearchOpen ? "" : "Search Bakery Items"}
                disabled={isSearchOpen}
              >
                <Search className={`w-4 h-4 shrink-0 transition-colors ${isSearchOpen ? 'text-[#786C5E]' : 'text-[#5E5244] hover:text-[#341C02]'}`} />
                <AnimatePresence initial={false}>
                  {!isSearchOpen && (
                    <motion.span
                      layout
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="hidden md:inline text-xs font-medium text-[#5E5244] hover:text-[#341C02] whitespace-nowrap overflow-hidden"
                    >
                      Search
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              
              <AnimatePresence initial={false}>
                {isSearchOpen && (
                  <motion.div
                    layout
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex items-center h-full overflow-hidden"
                  >
                    <input
                      id="nav-search-input"
                      type="text"
                      placeholder="Search sourdough..."
                      value={searchQuery}
                      onChange={(e) => onSearchChange(e.target.value)}
                      className="bg-transparent text-xs sm:text-sm text-[#341C02] focus:outline-none placeholder:text-[#9E9080] w-[140px] sm:w-[160px] ml-1.5"
                      autoFocus
                    />
                    <button
                      onClick={() => {
                        setIsSearchOpen(false);
                        onSearchChange('');
                      }}
                      className="text-xs text-[#786C5E] hover:text-[#341C02] px-1 h-full shrink-0"
                    >
                      ✕
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          """
    new_content = content[:start_idx] + new_search_block + content[end_idx:]
    with open('src/components/Navbar.tsx', 'w') as f:
        f.write(new_content)
    print("Patched search block")
else:
    print("Markers not found.")
