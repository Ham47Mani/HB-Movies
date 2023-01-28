import React, { Fragment } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Slider from 'react-slick/lib/slider';
import { SampleNextArrow, SamplePrevArrow } from '../slider/controlleur';
import Ucard from './Ucard';
import "./upCome.scss"

const Upcomming = ({title, items, className}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 900,
        settings : {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings : {
          slidesToShow: 1,
        }
      }
    ]
  }
  return (
    <Fragment>
      <section className={className}>
        <div className='container'>
          <div className='heading flexSB'>
            <h1>{title}</h1>
            <Link to="/">View All</Link>
          </div>
          <div className='content'>
            <Slider {... settings}>
              {items.map((item) => (
                <Ucard key={item.id} item={item} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Upcomming;
