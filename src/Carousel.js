import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    fade: true,
    infinite: true,
  };
  
  const images = [
    "https://github.com/user-attachments/assets/bd54e11d-6b33-4b5f-a174-9cce912bb66b",
    "https://github.com/user-attachments/assets/881194eb-8ca5-42fb-a362-6d283664a0cb",
    "https://github.com/user-attachments/assets/1244db23-9fca-4bf8-be8f-625f2eed12fd",
    "https://github.com/user-attachments/assets/790db2a6-40c1-421c-85aa-8bf3a8fbb754",
    "https://github.com/user-attachments/assets/ad305367-bfbf-467c-abed-7b442ff50df3",
    "https://github.com/user-attachments/assets/b085f738-b776-4f69-aba6-e47d07221e5e",
    "https://github.com/user-attachments/assets/5d1a241e-6b47-4d81-a8b8-47d35141883c",
    "https://github.com/user-attachments/assets/90d67745-da9f-4998-b316-c3e9fda8a881",
    "https://github.com/user-attachments/assets/8e97465b-35a0-45ac-b4f2-172d8847797f",
    "https://github.com/user-attachments/assets/fb666e42-3307-4c91-832e-0da0f904ea77",
  ];

  const containerStyle = {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  };

  const slideStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    maxHeight: '600px',
    objectFit: 'contain',
    display: 'block',
  };
  
  return (
    <div style={containerStyle}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} style={slideStyle}>
            <img src={img} alt={`Slide ${index}`} style={imageStyle} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
