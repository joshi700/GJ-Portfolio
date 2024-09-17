import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { alignPropType } from "react-bootstrap/esm/types";
import { FaAlignCenter } from "react-icons/fa";


const Carousel = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    fade: true,
  };

  const images = [
    
    "https://github.com/user-attachments/assets/bd54e11d-6b33-4b5f-a174-9cce912bb66b",
    "https://github.com/user-attachments/assets/881194eb-8ca5-42fb-a362-6d283664a0cb",
    "https://github.com/user-attachments/assets/1244db23-9fca-4bf8-be8f-625f2eed12fd",
    "https://github.com/user-attachments/assets/934dc14e-a377-4c6a-bf04-28d7b986a19a",
    "https://github.com/user-attachments/assets/ee558b2f-2d94-4ee8-b9ec-855764af653c",
    "https://github.com/user-attachments/assets/790db2a6-40c1-421c-85aa-8bf3a8fbb754",
    "https://github.com/user-attachments/assets/ad305367-bfbf-467c-abed-7b442ff50df3",
    "https://github.com/user-attachments/assets/b085f738-b776-4f69-aba6-e47d07221e5e",
    "https://github.com/user-attachments/assets/90d67745-da9f-4998-b316-c3e9fda8a881",
  ];

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
