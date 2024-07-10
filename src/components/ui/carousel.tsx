import React, { useEffect, useState } from 'react';
import m2 from '../../assets/m2.png';
import m1 from '../../assets/m1.png';
import m3 from '../../assets/m3.png';

const images = [m1, m3, m2];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'right' | 'left'>('right');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === 'right') {
          if (prevIndex === images.length - 1) {
            setDirection('left');
            return prevIndex - 1;
          } else {
            return prevIndex + 1;
          }
        } else {
          if (prevIndex === 0) {
            setDirection('right');
            return prevIndex + 1;
          } else {
            return prevIndex - 1;
          }
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full w-full transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, whiteSpace: 'nowrap' }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="inline-block h-full w-full relative"
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
              <h1 className="text-5xl font-bold">{index === 0 ? "Let's Change" : 'Discover More'}</h1>
              <p className="mt-4 text-lg">
                {index === 0
                  ? 'iPhone XS. With an all-screen design. Super Retina display in two sizes. TrueDepth Camera. Face ID. Dual-camera system. And A12 Bionic chip.'
                  : 'Experience the best events around you with our platform. From concerts to conferences, we have got you covered.'}
              </p>
              <button className={`mt-6 px-6 py-3 ${index === 0 ? 'bg-red-500' : 'bg-blue-500'} text-white font-semibold rounded-md`}>
                {index === 0 ? 'Explore Events' : 'See More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
