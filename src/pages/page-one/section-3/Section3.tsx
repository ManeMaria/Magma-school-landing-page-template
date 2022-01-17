/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Slider from 'react-slick';
import { Sections } from '../../../components/section/Section';
import { PROFESSORSIMG } from './images';
import { Container, WrapperCarousel } from './styles';

export function Sections3() {
  const settings = {
    slidesToScroll: 1,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '70px',
    slidesToShow: 2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    rows: 2,
    slidesPerRow: 2,
    arrows: false,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '30px',

        },
      },
    ],
  };

  return (
    <Sections>
      <Container>
        <h2>Nossos professores</h2>
        <WrapperCarousel>
          <Slider {...settings}>
            {PROFESSORSIMG.map((ele, i) => (
              <img key={i} src={ele} alt={`profile img ${i}`} />
            ))}
          </Slider>
        </WrapperCarousel>
      </Container>
    </Sections>
  );
}
