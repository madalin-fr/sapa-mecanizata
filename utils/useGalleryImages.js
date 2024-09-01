// Utility function to generate the image list
export function generateRampSlides() {
    const slides = [];
    for (let i = 1; i <= 18; i++) {
      slides.push({
        image: `/gallery/gallery-${i}.jpeg`,
        alt: `Gallery image ${i}`,
      });
    }
    return slides;
  }

  export function generateFlooringSlides() {
    const slides = [];
    for (let i = 1; i <= 18; i++) {
      slides.push({
        image: `/gallery/gallery-${i}.jpeg`,
        alt: `Gallery image ${i}`,
      });
    }
    return slides;
  }
  