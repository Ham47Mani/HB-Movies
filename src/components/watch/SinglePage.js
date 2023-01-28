import React, { Fragment, useEffect, useRef, useState } from 'react';
import {useParams} from "react-router-dom";
import { homeData, recommended } from '../../dummyData';
import MoviesBox from "../moviesBox/MoviesBoxs";
import './singlePage.scss';

const SinglePage = () => {
  const {id} = useParams();
  const [item, setItem] = useState(null);

  //--- Recommended Movies Get Content
  const recSection = useRef(null);
  recSection.current = recommended;

  useEffect(() => {
    const item = homeData.find(item => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <Fragment>
      {item ? (
        <Fragment>
          <section className='singlePage'>
            <div className='singleHeading'>
              <h1>{item.name}</h1>
              <span> | {item.time} | </span>
              <span>HD</span>
            </div>
            <div className='container'>
              <video src={item.video} controls></video>
              <div className='para'>
                <h3>Data: {item.data} </h3>
                <p>{item.desc}</p>
                <p>Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>
                <p>Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>
                <p>Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>
              </div>
              <div className='social'>
                <h3>Share : </h3>
                <i className="fa-brands fa-facebook-f" style={{"--tooltip-color": "#4267B2"}}></i>
                <i className="fa-brands fa-twitter" style={{"--tooltip-color": "#1DA1F2"}}></i>
                <i className="fa-brands fa-linkedin" style={{"--tooltip-color": "#0072b1"}}></i>
              </div>
            </div>
          </section>
          <MoviesBox items={recSection.current} title="Recommended Movies" className="padding-section"/>
        </Fragment>
      ) : null}
    </Fragment>
  );
}

export default SinglePage;
