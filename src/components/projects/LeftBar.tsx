import React from 'react';
import { Link } from 'react-router-dom';
import './LeftBar.scss';

export default function LeftBar() {
  return (
    <div className="LeftBar">
      <Link to="/">
        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
        </svg>
        <span>Back</span>
      </Link>
    </div>
  )
}
