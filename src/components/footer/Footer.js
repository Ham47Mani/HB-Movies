import React, { Fragment } from 'react';
import "./footer.scss";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className='container'>
          <div className='box'>
            <ul className='flexSB'>
              <li>Terms Of Use</li>
              <li>Privacy-Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Watch List</li>
            </ul>
            <p>&copy; 2023 HB STREAMIT. All Right Reserved. All videos and shows on this platform are trademarks of , and all related images and content are the property of, stremit Inc. Duplication and copy of this is strictly prohabited. All Rights Reserved</p>
          </div>
          <div className='box'>
            <h3>Follow Us</h3>
            <i className="fa-brands fa-facebook-f" style={{"--tooltip-color": "#4267B2"}}></i>
            <i className="fa-brands fa-twitter" style={{"--tooltip-color": "#1DA1F2"}}></i>
            <i className="fa-brands fa-youtube" style={{"--tooltip-color": "#FF0000"}}></i>
            <i className="fa-brands fa-instagram" style={{"--tooltip-color": "#405DE6"}}></i>
          </div>
          <div className='box'>
            <h3>Streamit App</h3>
            <div className='flexSB'>
              <div className='image flexSB'>
                <img src='../imgs/apple-app-store--v3.png' alt="App Store"/>
                <h5>App Store</h5>
              </div>
              <div className='image flexSB'>
                <img src='../imgs/google-play.png' alt="Google Play Store"/>
                <h5>Google Play Store Store</h5>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
