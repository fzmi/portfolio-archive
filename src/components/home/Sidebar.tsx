import React from 'react';
import './Sidebar.scss';

export default function Sidebar() {
  return (
    <div className="App-Sidebar header">
      <div className="Sidebar pl-4 pl-md-2 pr-4 pt-4 mx-3 mx-md-0">
        <h1>N<span>ifu</span>'s Projects</h1>
        <p className="mt-3 text-muted">Click on the project cards <br/>to see more details</p>
      </div>
    </div>
  );
}
