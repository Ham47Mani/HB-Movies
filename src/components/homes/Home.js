import React, { Fragment } from 'react';
import HomeCard from './HomeCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { SampleNextArrow, SamplePrevArrow } from '../slider/controlleur';

const Home = ({items}) => {
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
  }
  return (
    <Fragment>
      <div className='home-container'>
        <Slider {... setting}>
          {items.map(item => <HomeCard key={item.id} item={item}/>)}  
        </Slider>
      </div>
    </Fragment>
  );
}

export default Home;
