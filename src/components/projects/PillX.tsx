import React from 'react';
import ProjLeftBar from './LeftBar';
import ProjRightBar from './RightBar';
import './projects.scss';

import img from '../../images/pillx/pillx.png';

export function PillX() {
  return (
    <div className="container-fluid">
      <div className="row flex-xl-nowrap py-4">
        <div className="col-12 col-md-3 col-lg-3">
          <ProjLeftBar />
        </div>
        <main className="col-12 col-md-9 col-lg-6" role="main">
          <article className="projects">
            <div className="d-flex align-items-baseline">
              <h1 className="mb-1">PillX Medication Tracker</h1>
              <p className="text-muted ml-2 mb-0">(2020)</p>
            </div>
            <a href="https://github.com/fzmi/pillx" rel="noopener noreferrer" target="_blank">github.com/fzmi/pillx</a>

            <div className="header">
              <p className="mt-3">PillX intends to make relevant, personalised medical data available to the patient, and present this data in a way that would increase patient understanding of their health.
              </p>
              <p className="mt-3">The general workflow for this app would be for a user to scan one of their medicines using the camera on their phone (either the barcode or the AUST-R number). We will then use this information to look up the number within a database, then display back to the user the medicine, it’s side effects and dosages. Users can also check their medication routine through the pill calendar and will receive notifications when it’s time to take their medication.
              </p>
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
          <ProjRightBar completed={true} gitHub="https://github.com/fzmi/pillx" />
        </div>
      </div>
    </div>
  );
}
