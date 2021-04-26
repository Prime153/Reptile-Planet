import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Img1 from 'assets/Slider/img1.webp';
import Img2 from 'assets/Slider/img2.webp';
import Img3 from 'assets/Slider/img3.webp';
import Img4 from 'assets/Slider/img4.webp';
import Img5 from 'assets/Slider/img5.webp';

import { Container, Image, SliderStyled } from './SliderStyled';

const Slider = () => {
  const slideImages = [
    {
      id: 1,
      image: Img1,
    },
    {
      id: 2,
      image: Img2,
    },
    {
      id: 3,
      image: Img3,
    },
    {
      id: 4,
      image: Img4,
    },
    {
      id: 5,
      image: Img5,
    },
  ];

  const properties = {
    pauseOnHover: false,
    duration: 2000,
    indicators: () => <SliderStyled />,
    arrows: false,
  };

  return (
    <Container>
      <Fade {...properties}>
        {slideImages.map(({ image, id }) => (
          <Image
            key={id}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </Fade>
    </Container>
  );
};

export default Slider;
