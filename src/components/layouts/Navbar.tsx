import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

import { themes, ThemeContext } from '../../styles/theme';

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand navbar-dark d-flex flex-row flex-wrap align-items-center justify-content-between">
        <div className="d-flex flex-row flex-wrap align-items-center ml-2">
          <Link to="/" className="text-light px-2 py-1 mx-1 d-flex align-items-center Navbar-item" style={{ textDecoration: 'inherit' }}>
            <div className="link-color" style={{ backgroundColor: "#f1faee" }}></div>
            <span>Home</span>
          </Link>
        </div>
        <div className="d-flex">
          {/* <a href="https://nifushi.com" className="text-light px-2 py-1 mx-1 d-flex align-items-center" style={{ textDecoration: 'inherit' }}>
            <span>Go to Main Site</span>
          </a> */}
          <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
              <button className={"Toggle btn px-2 mx-3 d-flex align-items-center" + (theme === themes.dark ? " nightMode" : "")} onClick={toggleTheme}>
                <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-moon" fill={theme === themes.light ? "white" : "#F2A900"} xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z" />
                </svg>
              </button>
            )}
          </ThemeContext.Consumer>
        </div>
      </nav>
    </div>
  );
}
