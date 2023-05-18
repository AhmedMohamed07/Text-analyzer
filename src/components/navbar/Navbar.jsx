import React from 'react';
import './navbar.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-elements">
          <span className="app-title">Text Analyzer</span>

          <ul className="social-links">
            <li>
              <a href="www.linkedin.com">
                <LinkedInIcon />
              </a>{' '}
            </li>
            <li>
              <a href="www.facebook.com">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="www.twitter.com">
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
