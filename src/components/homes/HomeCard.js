import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({item : {id, cover, name, rating, time, desc, starring, genres, tags, video}}) => {
  return (
    <Fragment>
      <div className='box'>
        <div className='coverImage'>
          <img src={cover} alt={name}/>
        </div>
        <div className='content flexSB'>
          <div className='details row'>
            <h1>{name}</h1>
            <div className='rating flex'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star-half'></i>
              <label> | {rating}</label>
              <span>GP</span>
              <label>{time}</label>
            </div>
            <p>{desc}</p>
            <div className='cast'>
              <h4>
                <span>Starring : </span>
                {starring}
              </h4>
              <h4>
                <span>Genres : </span>
                {genres}
              </h4>
              <h4>
                <span>Tgas : </span>
                {tags}
              </h4>
            </div>
            <button className='primary-btn'>
              <i className='fas fa-play'></i> 
              Play Now
            </button>
          </div>
          <div className='playButton row'>
            <Link to={`/singlepage/${id}`}>
              <button>
                <div className='image'>
                  <img src='./imgs/play-button.png' alt={name} />
                  <img className='change' src='./imgs/play.png' alt={name} />
                </div>
                Watch Trailer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HomeCard;
