import React, { Fragment, useState } from 'react';
import { homeData } from '../../dummyData';
import Home from './Home';
import "./home.scss";

const Homes = () => {
  const [items, setItems] = useState(homeData);
  return (
    <Fragment>
      <section className='home'>
        <Home items={items}/>
      </section>
    </Fragment>
  );
}

export default Homes;
