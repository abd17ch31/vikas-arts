import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages, galleryCategories } from '../data/galleryImages';

const categories = galleryCategories.slice(1).map((category) => ({
  name: category,
  images: galleryImages.filter((image) => image.category === category),
}));

function chooseRandomImages(images, count) {
  const shuffled = [...images];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled.slice(0, count);
}

export default function GalleryPage() {
  const [activeGallery, setActiveGallery] = useState(null);

  useEffect(() => {
    if (!activeGallery) return undefined;

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveGallery(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeGallery]);

  const handleOpenGallery = (category) => {
    setActiveGallery({
      name: category.name,
      images: chooseRandomImages(category.images, 4),
    });
  };

  return (
    <div className="min-h-screen bg-[#FBF6EE] text-[#382329] pt-20 sm:pt-24 pb-20">
      <header className="max-w-4xl mx-auto px-4 sm:px-6 text-center pt-8 sm:pt-12 pb-10 sm:pb-14">
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#C5A15A]">
          The Art of Henna
        </span>
        <h1 className="font-serif font-normal text-[#541820] text-4xl sm:text-5xl md:text-6xl tracking-tight mt-3">
          Our Gallery
        </h1>
        <p className="font-sans text-sm sm:text-base text-[#847976] mt-4 max-w-2xl mx-auto leading-relaxed">
          Explore designs for every celebration. Choose a category to see a selection of
          four designs from our collection.
        </p>
      </header>

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => {
            const coverImage = category.images[0];

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => handleOpenGallery(category)}
                aria-label={`View ${category.name} gallery`}
                className="group overflow-hidden text-left bg-[#FFFCF7] border border-[#E7D5B6] rounded-sm shadow-[0_4px_16px_rgba(84,24,32,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A15A] hover:shadow-[0_10px_28px_rgba(84,24,32,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#F5EEE6]">
                  <img
                    src={coverImage?.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 px-4 py-4 sm:px-5">
                  <h2 className="font-serif text-xl sm:text-2xl text-[#541820]">
                    {category.name}
                  </h2>
                  <span className="shrink-0 text-[10px] sm:text-xs text-[#847976]">
                    {category.images.length} designs
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </main>

      {activeGallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#140608]/85 backdrop-blur-sm p-3 sm:p-6"
          onClick={() => setActiveGallery(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-dialog-title"
            className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-sm bg-[#FBF6EE] p-4 sm:p-7 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-5 sm:mb-7">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#C5A15A]">
                  Selected designs
                </span>
                <h2
                  id="gallery-dialog-title"
                  className="font-serif text-3xl sm:text-4xl text-[#541820] mt-1"
                >
                  {activeGallery.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveGallery(null)}
                aria-label="Close gallery"
                className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full text-[#541820] hover:bg-[#E7D5B6]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A]"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {activeGallery.images.map((image) => (
                <figure
                  key={image.id}
                  className="flex items-center justify-center overflow-hidden bg-[#F5EEE6] border border-[#E7D5B6] rounded-sm"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[30vh] sm:h-[42vh] object-contain"
                  />
                </figure>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
