import React, { Fragment } from 'react';

const Ucard = ({item: {id, cover, name, time}}) => {
  return (
    <Fragment>
      <div className='movieBox'>
        <div className='image'>
          <img src={cover} alt={name}/>
        </div>
        <div className='text'>
          <h3>{name}</h3>
          <span>{time}</span>
          <button className='primary-btn'>
            <i className='fa fa-play'></i>
            Play Now
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Ucard;
