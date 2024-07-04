import React, { ReactNode, useEffect, useState } from "react";
import { CgArrowLongLeftC, CgArrowLongRightC } from "react-icons/cg";

interface CarouselProps {
  children: ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const Carousel = ({
  autoSlide = false,
  autoSlideInterval = 3000,
  children,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? children.length - 3 : currentIndex - 1
    );

  const next = () =>
    setCurrentIndex((currentIndex) =>
      currentIndex === children.length - 3 ? 0 : currentIndex + 1
    );

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(next, autoSlideInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="h-full flex transition-transform ease-out duration-1000"
        style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
      >
        {children}
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={prev}
          className="p-3 bg-white/80 mr-3 text-3xl transition-all hover:bg-black hover:text-white"
        >
          <CgArrowLongLeftC />
        </button>
        <button
          onClick={next}
          className="p-3 bg-white/80 ml-3 text-3xl transition-all hover:bg-black hover:text-white"
        >
          <CgArrowLongRightC />
        </button>
      </div>

      <div className="absolute bottom-0 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {children.map((_, i) => (
            <div
              key={i}
              className={`
                  transition-all w-3 h-3 bg-n-9 rounded-full
                  ${currentIndex === i ? "p-2" : "bg-opacity-50"}
                `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
