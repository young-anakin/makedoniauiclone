'use client'
import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const images = [
  "https://mekedoniahomes.org/wp-content/uploads/2023/02/Noble-Logo.png",
  "https://mekedoniahomes.org/wp-content/uploads/2023/02/EBC-Logo.png",
  "https://mekedoniahomes.org/wp-content/uploads/2023/02/ET-Logo.png",
  "https://mekedoniahomes.org/wp-content/uploads/2023/02/Ethiotelecom-Logo.png",
  "https://mekedoniahomes.org/wp-content/uploads/2023/02/Noble-Logo.png",
];

export default function ImageSlider() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: true,
    slides: {
      perView: 5,
      spacing: 10,
    },
  });

  return (
    <div ref={ref} className="keen-slider">
      {images.map((image, index) => (
        <div key={index} className="keen-slider__slide">
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
