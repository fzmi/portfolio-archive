import React from 'react';
import ProjLeftBar from './LeftBar';
import ProjRightBar from './RightBar';
import './projects.scss';

import img1 from '../../images/eventx/img-1.png';
import img2 from '../../images/eventx/img-2.png';
import img3 from '../../images/eventx/img-3.png';
import img4 from '../../images/eventx/img-4.png';
import img5 from '../../images/eventx/img-5.png';
import img6 from '../../images/eventx/img-6.png';
import img7 from '../../images/eventx/img-7.png';

export function Eventx() {
  return (
    <div className="container-fluid">
      <div className="row flex-xl-nowrap py-4">
        <div className="col-12 col-md-3 col-lg-3">
          <ProjLeftBar />
        </div>
        <main className="col-12 col-md-9 col-lg-6" role="main">
          <article className="projects">
            <div className="d-flex align-items-baseline">
              <h1 className="mb-1">EventX Scheduler</h1>
              <p className="text-muted ml-2 mb-0">(2020)</p>
            </div>
            <a href="https://np.uqcloud.net/eventx" rel="noopener noreferrer" target="_blank">np.uqcloud.net/eventx</a>

            <div className="header">
              <p className="mt-3">EventX is a full-stack web app where people can create, join and share various events. The app used MVC architecture and showcased my design language. Additional features include map API integration, email verification, search filtering, social media sharing and web security.</p>
              <hr />
            </div>

            <div className="content">
              <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active dot"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1" className="dot"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2" className="dot"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="3" className="dot"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="4" className="dot"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="5" className="dot"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="6" className="dot"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={img1} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={img2} alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={img3} alt="Third slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={img4} alt="Fourth slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={img5} alt="Fifth slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={img6} alt="Sixth slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={img7} alt="Seventh slide" />
                  </div>
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

              <h3 className="mt-5">Objective</h3>
              <p>Before entering the app, there will be user authentications. They can log in to the app via SMS messages or any other third-party apps like Facebook or Twitter.</p>
              <p>The main application will be divided into 3 main functional components, each serves a different purpose and you can toggle them on the left side menu.</p>
              <p>The ﬁrst component is the dashboard. A dashboard is where people can quickly get access to schedules of the events they have joined. It features a calendar view with a timeline which displays the past and upcoming events. The design can provide users information as well as for instructions on when to attend, where to attend, what to bring and so on. In this way, users can be informed of what is going on as soon as they opened the app. All of this information is retrieved from the event database.</p>
              <p>The second component is the browse view. In the browse view, there will be a list where users can view the events offered by their organisations and choose to join. Alternatively, they can choose to join the public events in the Public tab. It has an integrated map showing the nearby public events. With the recommendation algorithm based on user's preferences and interests, it can offer suggested events to the users.</p>
              <p>Lastly, the third component is the create view, where you can host events privately or publicly. The host can provide information about the events with texts, pictures or even videos. They can also enable online payments so they do not need to worry about fee calculations.</p>

              {/* <h3 className="mt-5">Technical Details</h3>
              <p>To achieve all of those features and behaviours, the application will use the 3-tier architecture.</p>
              <p>Firstly, I will use React.js framework along with essential CSS and HTML to implement the client-side since I have previous experience of these. Other JavaScript libraries like moment.js may also be used for date/time displaying and processing. The front-end is for providing the user interface like displaying the current events or showing relevant images and videos.</p>
              <p>Secondly, in terms of back-end, I may use Node.js with the Express framework because I am more familiar with the JavaScript language. The back-end provides the ability to process the users' requests and communicating with the stored data.</p>
              <p>Finally, for the database, I will learn and utilise the related materials provided by this course, preferably MongoDB, to achieve the prescriptive tasks for the project. The database stores various information like user accounts and events.</p> */}
            </div>
          </article>
        </main>
        <div className="col-12 col-md-12 col-lg-3">
          <ProjRightBar completed={true} site="https://np.uqcloud.net/eventx" demo="https://youtu.be/kkh_p9_Y9QE" />
        </div>
      </div>
    </div>
  );
}
