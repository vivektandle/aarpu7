import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotoGallery } from '@/components/ui/gallery';
import { PRODUCTS } from '../../data/products';

export default function FeaturedProducts({ onOpenQuoteModal }) {
  const navigate = useNavigate();

  // Create photo items mapped to Aarpu's architectural minimal systems
  // Exactly 5 images in requested order without onClick:
  // Order 0: panaromic.jpeg -> PANORAMIC - Beyond the Frame
  // Order 1: image10.jpeg -> MINIMALIST - Less Frame. More Vision
  // Order 2: slimline.jpeg -> SLIMLINE - Reduced sightlines
  // Order 3: seamless.jpeg -> SEAMLESS - Architectural continuity
  // Order 4: linear.jpeg -> LINEAR - Geometric precision
  const productPhotos = [
    {
      id: 'featured-panoramic',
      order: 0,
      direction: 'left',
      src: '/panaromic.jpeg',
      title: 'PANORAMIC - Beyond the Frame',
    },
    {
      id: 'featured-minimalist',
      order: 1,
      direction: 'right',
      src: '/image10.jpeg',
      title: 'MINIMALIST - Less Frame. More Vision',
    },
    {
      id: 'featured-slimline',
      order: 2,
      direction: 'left',
      src: '/slimline.jpeg',
      title: 'SLIMLINE - Reduced sightlines',
    },
    {
      id: 'featured-seamless',
      order: 3,
      direction: 'right',
      src: '/seamless.jpeg',
      title: 'SEAMLESS - Architectural continuity',
    },
    {
      id: 'featured-linear',
      order: 4,
      direction: 'left',
      src: '/linear.jpeg',
      title: 'LINEAR - Geometric precision',
    },
  ];

  return (
    <section className="w-full py-4 sm:py-5 md:py-6 bg-white border-y border-[#E2E2E2] overflow-hidden relative">
      <div className="w-full">
        <PhotoGallery
          animationDelay={0.2}
          title="Explore Our Products"
          titleClassName="text-3xl sm:text-4xl md:text-5xl font-display font-light tracking-tight text-[#171717] leading-tight"
          buttonText="See More Products"
          onButtonClick={() => navigate('/products')}
          photosData={productPhotos}
          photoWidth={280}
          photoHeight={350}
          showImageDetails={true}
        />
      </div>
    </section>
  );
}
