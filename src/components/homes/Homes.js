import React, { Fragment, useRef } from 'react';
import { homeData } from '../../dummyData';
import Home from './Home';
import "./home.scss";

const Homes = () => {
  const itemsRef = useRef(homeData);
  const items = itemsRef.current;
  return (
    <Fragment>
      <section className='home'>
        <Home items={items}/>
      </section>
    </Fragment>
  );
}

export default Homes;
