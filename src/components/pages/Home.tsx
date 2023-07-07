import React from 'react';
import Sidebar from '../home/Sidebar';
import { Card } from '../home/Card';
import './Home.scss';

import ImageEventX from '../../images/eventx/eventx.png';
// import ImagePortfolio from '../../images/portfolio/portfolio.png';
import ImagePicQld from '../../images/picqld/picqld.png';
import Image80Days from '../../images/80days/80days.png';
import ImagePillX from '../../images/pillx/pillx.png';

export function Home() {

  const contents = [
    { id: "eventx", name: "EventX Scheduler", stack: ["PHP CodeIgniter", "JavaScript", "jQuery", "REST", "Bootstrap", "MySQL"], description: "Full-stack web app where you can create, join and share various events. The user interface applies my design language and you can watch the in-depth demonstration with the link below.", links: { site: "https://infs3202-4b0cf0a5.uqcloud.net/eventx", demo: "https://youtu.be/kkh_p9_Y9QE" }, image: ImageEventX },
    { id: "pillx", name: "PillX Medication Tracker", stack: ["React Native", "React", "TypeScript", "Expo", "Java", "MongoDB", "REST"], description: "PillX is a full-stack cross-platform mobile app intended to make relevant, personalised medical data available to the patient, and present the data in a way that would increase patient understanding of their health.", links: { site: null, demo: null }, image: ImagePillX },
    // { id: "portfolio", name: "Portfolio Sites", stack: ["React", "TypeScript", "Bootstrap", "Sass"], description: "My upcoming portfolio on nifushi.com, currently work-in-progress. This is my experiment of using the latest technologies. Same tech stacks are applied to this academic site.", links: { site: null, demo: null }, image: ImagePortfolio },
    { id: "picqld", name: "Picture Queensland", stack: ["PHP", "JavaScript", "jQuery", "CSS Flexbox"], description: "Lead a project which conceptualises and builds a mobile web-based, interactive application to enhance the experience of visitors as they navigate a fictional exhibition. The application presented data from the State Library of Queensland to provide an alternative, digital perspective on the exhibits.", links: { site: "https://np.uqcloud.net/picqld", demo: null }, image: ImagePicQld },
    { id: "80days", name: "Eighty Days", stack: ["JavaScript", "jQuery", "CSS Flexbox", "Responsive Design"], description: "Inspired by the famous adventure novel 'Around the World in Eighty Days' by Jules Verne, I designed and implemented an interactive website which combines the educational content with visuals and theme for teenagers.", links: { site: "https://np.uqcloud.net/80days", demo: null }, image: Image80Days },
  ];

  return (
    <div className="row flex-xl-nowrap">
      <div className="col-12 col-md-4 col-xl-3">
        <Sidebar />
      </div>
      <main className="App-Content col-12 col-md-8 col-xl-9 py-3" role="main">
        <div className="Home-Content content">
          {contents.map((entry, index) => {
            return (
              <div key={index} className="project-card">
                <Card id={entry.id} name={entry.name} stack={entry.stack} description={entry.description} image={entry.image} />
              </div>
            );
          })}
          <small className="legal text-muted m-4">&copy; 2018-2021 Yiyun Zhang at the University of Queensland, Australia</small>
        </div>
      </main>
    </div>
  );
}
