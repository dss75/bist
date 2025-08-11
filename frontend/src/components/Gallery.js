import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: "https://customer-assets.emergentagent.com/job_f9e1f1af-4f57-4c3d-99d2-eed5bb264757/artifacts/csaneeit_unnamed.webp",
      title: "Dessert exquis",
      description: "Nos desserts faits maison"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_f9e1f1af-4f57-4c3d-99d2-eed5bb264757/artifacts/cwok8678_unnamed%20%281%29.webp",
      title: "Burger artisanal",
      description: "Notre spécial burger du mercredi"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_f9e1f1af-4f57-4c3d-99d2-eed5bb264757/artifacts/fa3tlwzr_unnamed%20%282%29.webp",
      title: "Plat traditionnel",
      description: "Cuisine française authentique"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_f9e1f1af-4f57-4c3d-99d2-eed5bb264757/artifacts/7nw05c3x_unnamed%20%283%29.webp",
      title: "Façade du bistro",
      description: "Notre établissement à Grisolles"
    },
    {
      url: "https://customer-assets.emergentagent.com/job_f9e1f1af-4f57-4c3d-99d2-eed5bb264757/artifacts/u9g85951_unnamed%20%284%29.webp",
      title: "Architecture locale",
      description: "Le charme de Grisolles"
    }
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <section id="galerie" className="py-20 bg-lightTan/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deepBrown bistro-font mb-6">
            Galerie Photos
          </h2>
          <div className="w-24 h-1 bg-warmBrown mx-auto mb-8"></div>
          <p className="text-xl text-deepBrown/80 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre établissement et nos spécialités culinaires
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => openLightbox(image, index)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white rounded-b-lg">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-lg opacity-90">{selectedImage.description}</p>
                <p className="text-sm opacity-70 mt-2">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;