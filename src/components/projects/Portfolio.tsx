import React from 'react';
import ProjLeftBar from './LeftBar';
import ProjRightBar from './RightBar';
import './projects.scss';

import img from '../../images/portfolio/portfolio-original.png';

export function Portfolio() {
  return (
    <div className="container-fluid">
      <div className="row flex-xl-nowrap py-4">
        <div className="col-12 col-md-3 col-lg-3">
          <ProjLeftBar />
        </div>
        <main className="col-12 col-md-9 col-lg-6" role="main">
          <article className="projects">
            <div className="d-flex align-items-baseline">
              <h1 className="mb-1">Portfolio Sites</h1>
              <p className="text-muted ml-2 mb-0">(2020)</p>
            </div>
            <a href="https://uq.nifushi.com" rel="noopener noreferrer" target="_blank">uq.nifushi.com</a>

            <div className="header">
              <p className="mt-3">My upcoming portfolio on nifushi.com, currently work-in-progress. This is my experiment of using the latest technologies. Same tech stacks are applied to this academic site.</p>
              <hr />
            </div>

            <div className="content">
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active dot"></li>
                  {/* <li data-target="#carouselExampleIndicators" data-slide-to="1" className="dot"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2" className="dot"></li> */}
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={img} alt="First slide" />
                  </div>
                  {/* <div className="carousel-item">
                    <img className="d-block w-100" src={img} alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={img} alt="Third slide" />
                  </div> */}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

            </div>
          </article>
        </main>
        <div className="col-12 col-md-12 col-lg-3">
          <ProjRightBar completed={false} site="https://uq.nifushi.com" />
        </div>
      </div>
    </div>
  );
}
