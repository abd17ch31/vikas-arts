import { useState, useMemo, useCallback } from 'react';
import { ShoppingBag, Sparkles, Filter, Check, ArrowRight } from 'lucide-react';
import { galleryImages, galleryCategories } from '../data/galleryImages';
import GalleryCard from '../components/GalleryCard';
import GalleryLightbox from '../components/GalleryLightbox';
import SelectionCart from '../components/SelectionCart';

const INITIAL_DISPLAY_COUNT = 24;
const LOAD_MORE_STEP = 24;

/**
 * Dedicated Luxury Gallery Page for Vikash Mehndi Art
 * Showcases 100 curated mehndi designs with responsive compact cards,
 * full-size lightbox viewer with thumbnail strip, and gallery-exclusive WhatsApp selection cart.
 */
export default function GalleryPage({ onNavigateHome }) {
  // Filtering & Pagination State
  const [selectedCategory, setSelectedCategory] = useState('All Designs');
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  // Selection Cart State (IDs stored in a Set for O(1) lookup)
  const [selectedIds, setSelectedIds] = useState(() => new Set());
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  // Filter images based on active category
  const filteredImages = useMemo(() => {
    if (selectedCategory === 'All Designs') {
      return galleryImages;
    }
    return galleryImages.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  // Paginated visible images slice
  const visibleImages = useMemo(() => {
    return filteredImages.slice(0, displayCount);
  }, [filteredImages, displayCount]);

  // Selected full item objects for cart and WhatsApp sharing
  const selectedItems = useMemo(() => {
    return galleryImages.filter((img) => selectedIds.has(img.id));
  }, [selectedIds]);

  // Toggle selection for an item
  const handleToggleSelect = useCallback((item) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(item.id)) {
        next.delete(item.id);
      } else {
        next.add(item.id);
      }
      return next;
    });
  }, []);

  // Remove individual item from cart
  const handleRemoveItem = useCallback((itemId) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.delete(itemId);
      return next;
    });
  }, []);

  // Clear all selections
  const handleClearAll = useCallback(() => {
    setSelectedIds(new Set());
  }, []);

  // Category switch resets pagination
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setDisplayCount(INITIAL_DISPLAY_COUNT);
  };

  // Open Lightbox at specific item
  const handleOpenLightbox = useCallback((item) => {
    const idx = filteredImages.findIndex((img) => img.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  }, [filteredImages]);

  // Handle Load More
  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + LOAD_MORE_STEP, filteredImages.length));
  };

  const handleShowAll = () => {
    setDisplayCount(filteredImages.length);
  };

  const hasMore = displayCount < filteredImages.length;

  return (
    <div className="min-h-screen bg-[#FBF6EE] text-[#382329] pt-20 sm:pt-24 pb-20">
      {/* =========================================================================
          SECTION 4: EDITORIAL GALLERY HEADER
          Eyebrow, Main Heading, Supporting Description, and Decorative Divider
         ========================================================================= */}
      <header className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center pt-6 sm:pt-10 pb-8 sm:pb-12">
        {/* Eyebrow */}
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#C5A15A] font-sans inline-flex items-center justify-center gap-2">
          <span>—</span>
          <span>THE ART OF HENNA</span>
          <span>—</span>
        </span>

        {/* Main Heading */}
        <h1 className="font-serif font-normal text-[#541820] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mt-3 leading-[1.1]">
          Every Design Tells a Story
        </h1>

        {/* Supporting Description */}
        <p className="font-sans text-sm sm:text-base text-[#847976] mt-4 max-w-2xl mx-auto leading-relaxed">
          Explore our collection of intricate mehndi designs, from timeless bridal artistry to contemporary patterns crafted for every celebration. Select designs using the <span className="font-bold text-[#541820]">+</span> button to enquire directly on WhatsApp.
        </p>

        {/* Decorative Gold Double-Diamond Divider */}
        <div className="flex items-center justify-center gap-3.5 mt-5 text-[#C5A15A]" aria-hidden="true">
          <div className="w-12 sm:w-16 h-[1px] bg-[#E7D5B6]" />
          <svg
            className="w-4 h-4 text-[#C5A15A]"
            viewBox="0 0 16 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          >
            <path d="M8 1L14 6.5L8 12L2 6.5L8 1Z" />
            <path d="M8 8L14 13.5L8 19L2 13.5L8 8Z" />
          </svg>
          <div className="w-12 sm:w-16 h-[1px] bg-[#E7D5B6]" />
        </div>
      </header>

      {/* =========================================================================
          SECTION 8: GALLERY TOOLBAR WITH TOP-RIGHT SELECTION CART
          (Cart strictly belongs to the Gallery toolbar, NOT the global navbar)
         ========================================================================= */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-3 sm:p-4 bg-[#FFFCF7] rounded-[4px] border border-[#E7D5B6] shadow-[0_4px_16px_rgba(84,24,32,0.04)]">
          {/* Category Filter Pills (Scrollable horizontally on mobile) */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <span className="hidden lg:inline-flex items-center gap-1 text-xs font-semibold text-[#847976] uppercase tracking-wider pl-1 pr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Category:</span>
            </span>

            {galleryCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`flex-shrink-0 px-3.5 py-2 rounded-full text-xs font-sans tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] ${
                    isActive
                      ? 'bg-[#541820] text-[#E9D8B8] font-semibold shadow-sm'
                      : 'bg-[#FBF6EE] hover:bg-[#F5EEE6] text-[#541820] border border-[#E7D5B6]/70'
                  }`}
                >
                  {category}
                  {category === 'All Designs' && (
                    <span className="ml-1.5 opacity-75 font-mono text-[10px]">
                      (100)
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Top-Right Selection Cart Button (Gallery Page Exclusive) */}
          <div className="flex items-center justify-end flex-shrink-0">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Open selected designs cart with ${selectedIds.size} designs`}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded text-xs font-sans uppercase tracking-[0.14em] font-semibold transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] ${
                selectedIds.size > 0
                  ? 'bg-[#541820] text-[#FFFDF9] hover:bg-[#3A1017] border border-[#C5A15A]'
                  : 'bg-[#FFFDF9] text-[#541820] hover:bg-[#F5EEE6] border border-[#541820]/40'
              }`}
            >
              <ShoppingBag className="w-4 h-4 text-[#C5A15A]" />
              <span>Selected Designs</span>
              <span
                className={`ml-1 px-2 py-0.5 rounded-full text-[11px] font-mono font-bold ${
                  selectedIds.size > 0
                    ? 'bg-[#C5A15A] text-[#3A1017]'
                    : 'bg-[#E7D5B6] text-[#541820]'
                }`}
              >
                {selectedIds.size}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: COMPACT RESPONSIVE IMAGE GRID
          5-6 columns desktop, 3-4 columns tablet, 2 compact columns mobile
         ========================================================================= */}
      <main className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Results summary label */}
        <div className="flex items-center justify-between text-xs text-[#847976] mb-4 font-sans px-1">
          <span>
            Showing <strong className="text-[#541820]">{visibleImages.length}</strong> of{' '}
            <strong className="text-[#541820]">{filteredImages.length}</strong> {selectedCategory} designs
          </span>
          {selectedIds.size > 0 && (
            <span className="text-[#541820] font-medium inline-flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-[#C5A15A]" />
              {selectedIds.size} selected for WhatsApp
            </span>
          )}
        </div>

        {/* 100-Image Compact Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5 sm:gap-3.5 lg:gap-4">
          {visibleImages.map((item, idx) => (
            <GalleryCard
              key={item.id}
              item={item}
              isSelected={selectedIds.has(item.id)}
              onToggleSelect={handleToggleSelect}
              onOpenLightbox={handleOpenLightbox}
              isPriority={idx < 8}
            />
          ))}
        </div>

        {/* =========================================================================
            SECTION 14: PROGRESSIVE LOAD-MORE CONTROLS
           ========================================================================= */}
        {hasMore && (
          <div className="mt-12 text-center space-y-3">
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded bg-[#541820] hover:bg-[#3A1017] text-[#FFFDF9] font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-200 shadow-md hover:shadow-lg border border-[#C5A15A]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A]"
            >
              <span>Load More Designs</span>
              <span className="text-[#E9D8B8] font-mono text-[11px]">
                (+{Math.min(LOAD_MORE_STEP, filteredImages.length - displayCount)})
              </span>
            </button>

            <div>
              <button
                type="button"
                onClick={handleShowAll}
                className="text-xs font-sans text-[#541820] hover:underline uppercase tracking-wider font-semibold"
              >
                Show All {filteredImages.length} Designs
              </button>
            </div>
          </div>
        )}

        {/* Bottom Editorial Call to Action */}
        <div className="mt-20 p-6 sm:p-10 rounded-[4px] bg-[#FFFDF9] border border-[#E7D5B6] text-center max-w-3xl mx-auto shadow-sm">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A15A]">
            CUSTOMIZE YOUR BRIDAL LOOK
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#541820] mt-2">
            Have a Specific Design in Mind?
          </h2>
          <p className="text-xs sm:text-sm text-[#847976] max-w-lg mx-auto mt-2 leading-relaxed">
            Every bride brings her own story. We customize motifs, incorporate bridal portraits, love letters, and family heritage into every cone.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="w-full sm:w-auto px-6 py-3 rounded bg-[#541820] text-[#FFFDF9] text-xs uppercase tracking-wider font-semibold hover:bg-[#3A1017] transition-colors"
            >
              Review Selected Designs ({selectedIds.size})
            </button>
            {onNavigateHome && (
              <button
                type="button"
                onClick={onNavigateHome}
                className="w-full sm:w-auto px-6 py-3 rounded border border-[#541820] text-[#541820] text-xs uppercase tracking-wider font-semibold hover:bg-[#541820] hover:text-white transition-colors"
              >
                Return to Homepage
              </button>
            )}
          </div>
        </div>
      </main>

      {/* =========================================================================
          SECTION 10 & 11: FULL-SIZE LIGHTBOX VIEWER WITH THUMBNAIL STRIP
         ========================================================================= */}
      <GalleryLightbox
        isOpen={lightboxIndex >= 0}
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(-1)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        selectedIds={selectedIds}
        onToggleSelect={handleToggleSelect}
      />

      {/* =========================================================================
          SECTION 9 & 12: SELECTION CART DRAWER & WHATSAPP ENQUIRY
         ========================================================================= */}
      <SelectionCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        selectedItems={selectedItems}
        onRemoveItem={handleRemoveItem}
        onClearAll={handleClearAll}
        onOpenItemInLightbox={handleOpenLightbox}
      />
    </div>
  );
}
