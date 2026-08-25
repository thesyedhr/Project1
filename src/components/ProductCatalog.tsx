import React, { useState } from 'react';
import { BakeryItem, Category } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles, Wheat, Flame, Coffee, Cake, Utensils, Filter, Search } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCatalogProps {
  products: BakeryItem[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onQuickAdd: (item: BakeryItem) => void;
  onSelectDetail: (item: BakeryItem) => void;
  onOpenBoxBuilder: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onQuickAdd,
  onSelectDetail,
  onOpenBoxBuilder,
}) => {
  const [selectedDietary, setSelectedDietary] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price_asc' | 'price_desc' | 'ferment'>('featured');

  const categories: { id: Category; name: string; count: number; icon: React.ReactNode }[] = [
    { id: 'all', name: 'All Daily Bakes', count: products.length, icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'sourdough', name: 'Wild Sourdough', count: products.filter((p) => p.category === 'sourdough').length, icon: <Wheat className="w-3.5 h-3.5" /> },
    { id: 'viennoiserie', name: 'Laminated Viennoiserie', count: products.filter((p) => p.category === 'viennoiserie').length, icon: <Flame className="w-3.5 h-3.5" /> },
    { id: 'patisserie', name: 'French Patisserie', count: products.filter((p) => p.category === 'patisserie').length, icon: <Cake className="w-3.5 h-3.5" /> },
    { id: 'savory', name: 'Savory Hearth', count: products.filter((p) => p.category === 'savory').length, icon: <Utensils className="w-3.5 h-3.5" /> },
    { id: 'provisions', name: 'Pantry & Starters', count: products.filter((p) => p.category === 'provisions').length, icon: <Coffee className="w-3.5 h-3.5" /> },
  ];

  const dietaryTags = ['All', 'Organic', 'Ancient Grains', 'Vegan', 'Vegetarian', 'Signature'];

  // Filtering Logic
  const filteredProducts = products.filter((item) => {
    // Category filter
    if (selectedCategory !== 'all' && item.category !== selectedCategory) {
      return false;
    }

    // Dietary filter
    if (selectedDietary !== 'All') {
      let matchesDietary = item.dietary.includes(selectedDietary as any) || item.tags.includes(selectedDietary);
      
      // Implicit dietary logic: Vegan is also Vegetarian and Dairy-Free
      if (selectedDietary === 'Vegetarian' && item.dietary.includes('Vegan')) {
        matchesDietary = true;
      }
      if (selectedDietary === 'Dairy-Free' && item.dietary.includes('Vegan')) {
        matchesDietary = true;
      }

      if (!matchesDietary) {
        return false;
      }
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchFrench = item.frenchName?.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchIngredients = item.ingredients.some((ing) => ing.toLowerCase().includes(q));
      const matchFlavor = item.flavorNotes?.some((fn) => fn.toLowerCase().includes(q));
      return matchName || matchFrench || matchDesc || matchIngredients || matchFlavor;
    }

    return true;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price_asc') return a.price - b.price;
    if (sortBy === 'price_desc') return b.price - a.price;
    if (sortBy === 'ferment') return (b.fermentationHours || 0) - (a.fermentationHours || 0);
    return b.rating - a.rating; // default featured
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="catalog-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Category Navigation Bar */}
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#8D4B26] font-bold">
              Fournil Selection
            </p>
            <h2 className="text-3xl font-serif font-bold text-[#341C02]">
              Today's Fresh Daily Bakes
            </h2>
          </div>

          {/* Pastry Box Builder Promo Banner Link */}
          <button
            onClick={onOpenBoxBuilder}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#341C02] text-[#FAF7F2] text-xs font-semibold hover:bg-[#45372B] transition-all shadow-sm self-start sm:self-auto"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E8C5A0]" />
            <span>Curate Custom Pastry Box (Save up to 20%)</span>
          </button>
        </div>

        {/* Category Filter Pills with Glassmorphism */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`cat-btn-${cat.id}`}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedCategory === cat.id
                  ? 'bg-[#341C02] text-[#FAF7F2] border-[#341C02] shadow-md'
                  : 'glass-panel text-[#5E5244] border-[#E2D7CA] hover:border-[#C4B29E] hover:text-[#341C02]'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-[#EFE8DC] text-[#786C5E]'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Secondary Sub-filters: Dietary & Sorting */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#EAE0D3]">
          
          {/* Dietary Tags */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-bold text-[#786C5E] mr-1 hidden sm:inline">Dietary:</span>
            {dietaryTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedDietary(tag)}
                className={`px-3 py-1 rounded-xl text-xs font-medium transition-colors ${
                  selectedDietary === tag
                    ? 'bg-[#EFE8DC] text-[#341C02] font-bold border border-[#D9CEBF]'
                    : 'text-[#6B5E4F] hover:text-[#341C02] hover:bg-[#F5EFE6]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#786C5E]">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs p-1.5 rounded-xl border border-[#D9CEBF] bg-white text-[#341C02] focus:outline-none"
            >
              <option value="featured">Featured / Highest Rated</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="ferment">Longest Fermentation (Hours)</option>
            </select>
          </div>

        </div>

      </motion.div>

      {/* Product Grid */}
      {sortedProducts.length === 0 ? (
        <motion.div 
          className="py-16 text-center space-y-5 glass-panel rounded-3xl p-8 max-w-lg mx-auto overflow-hidden relative border border-[#E5DACD]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Belgium_2013_%2811620905224%29.jpg/1280px-Belgium_2013_%2811620905224%29.jpg" alt="Bakery Background" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="relative z-10 space-y-4">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Kommissbrot.jpg/1280px-Kommissbrot.jpg" alt="Empty selection" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#341C02]">
              No bakery items matched your selection
            </h3>
            <p className="text-xs text-[#786C5E] max-w-xs mx-auto font-medium">
              Try adjusting your search terms or dietary filters to explore all handcrafted loaves and pastries.
            </p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setSelectedDietary('All');
                onSearchChange('');
              }}
              className="px-6 py-2.5 bg-[#341C02] text-[#FAF7F2] rounded-xl text-xs font-semibold hover:bg-[#43362A] transition-colors shadow-sm"
            >
              Reset All Filters
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {sortedProducts.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onQuickAdd={onQuickAdd}
              onSelectDetail={onSelectDetail}
            />
          ))}
        </motion.div>
      )}

    </motion.section>
  );
};
