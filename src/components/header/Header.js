import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import "./header.scss";

const Header = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <Fragment>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <Link to={"/"}>
                <img src='./imgs/logo.png' alt='Logo' />
                <span>Movie</span>
              </Link>
            </div>
            <ul className={mobile ? "navMenu-list menu" : 'flexSB menu'} onClick ={() => setMobile(false)}>
              <Link to="/">Home</Link>
              <Link to="/series">Series</Link>
              <Link to="/movie">Movie</Link>
              <Link to="/pages">Pages</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/contact">Contact</Link>
            </ul>
            <button className='toggle' onClick ={() => setMobile(!mobile)}>
              {mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
            <i className='fa fa-search'></i>
            <i className='fa fa-bell'></i>
            <i className='fa fa-user'></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header
