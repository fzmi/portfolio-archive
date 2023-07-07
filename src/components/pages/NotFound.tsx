import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {

  return (
    <div className="d-flex flex-column m-4 text-center">
      <h1>Uh Oh!</h1>
      <p>The requested page cannot be found. (404)</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}
