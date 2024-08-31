// Utility function to generate the image list
export function generateSlides() {
    const slides = [];
    for (let i = 1; i <= 18; i++) {
      slides.push({
        image: `/gallery/gallery-${i}.jpeg`,
        alt: `Gallery image ${i}`,
      });
    }
    return slides;
  }
  