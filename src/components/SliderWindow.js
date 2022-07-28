import React, { useState } from 'react';
import "./SlideWindow.css";
import Cards from "./Cards";
import Footer from "./Footer";
import {CardData} from "./CardData";
import { SliderData } from './SliderData';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  function createCard(data){
    return (
        <Cards 
        title={data.title}
        img = {data.image}
        next = {data.next}
        />
    )
  }

  return (
    <>
    <section className='slider'>
      <FaAngleLeft className='left-arrow' onClick={prevSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
            <fade/>
          </div>
        );
      })}
      <FaAngleRight className='right-arrow' onClick={nextSlide} />
    </section>
    <div className='overall'>
    {CardData.map(
        createCard
    )}
    </div>
    <Footer />
    </>
  );
};

export default ImageSlider;