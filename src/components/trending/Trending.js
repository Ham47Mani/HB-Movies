import React, { Fragment, useRef } from 'react';
import Home from "../homes/Home";
import {trending} from "../../dummyData";
import "./trending.scss";

const Trending = () => {
  const trendingContent = useRef();
  trendingContent.current = trending;
  return (
    <Fragment>
      <section className='trending'>
        <Home items={trendingContent.current}/>
      </section>
    </Fragment>
  );
}

export default Trending;
