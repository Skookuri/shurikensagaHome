"use client";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "/src/images/screenshot1.png";
import img2 from "/src/images/screenshot2.png";
import img3 from "/src/images/screenshot3.png";
import img4 from "/src/images/screenshot4.png";
import img5 from "/src/images/screenshot5.png";

const imgArray = [img1, img2, img3, img4, img5];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imgArray.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-container relative text-center overflow-hidden rounded-xl">
      <img
        src={imgArray[currentIndex]}
        alt={`Screenshot ${currentIndex + 1}`}
        className="w-full h-full object-cover rounded-xl"
      />
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-none border-none cursor-pointer"
      >
        <FaArrowLeft size={30} />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-none border-none cursor-pointer"
      >
        <FaArrowRight size={30} />
      </button>
    </div>
  );
};

export default Gallery;
