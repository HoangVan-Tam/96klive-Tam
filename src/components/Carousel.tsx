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
  const [width, setWidth] = useState(0);

  const prev = () => {
    var step =
      width < 768 ? 1 : 768 < width && width < 1280 ? 2 : width > 1280 ? 3 : 0;
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? children.length - step : currentIndex - 1
    );
  };

  const next = () => {
    var step =
      width < 768 ? 1 : 768 < width && width < 1280 ? 2 : width > 1280 ? 3 : 0;
    setCurrentIndex((currentIndex) =>
      currentIndex === children.length - step ? 0 : currentIndex + 1
    );
  };

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(next, autoSlideInterval);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="overflow-hidden relative">
      <div
        className="h-full flex transition-transform ease-out duration-1000 md:hidden"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children}
      </div>
      <div
        className="h-full transition-transform ease-out duration-1000 hidden md:flex xl:hidden"
        style={{ transform: `translateX(-${currentIndex * 50}%)` }}
      >
        {children}
      </div>
      <div
        className="h-full transition-transform ease-out duration-1000 hidden xl:flex"
        style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
      >
        {children}
      </div>
      <div className="flex items-center justify-center mt-10">
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
