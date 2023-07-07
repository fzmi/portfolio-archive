import gsap from 'gsap';

function homeTimeline(node: any, delay: number) {
  const timelineHeader = gsap.timeline({ paused: true });
  const timelineContent = gsap.timeline({ paused: true });

  const header = node.querySelector('.header');
  const content = node.querySelector('.content');

  timelineHeader
    .from(node, { duration: 0.3, display: 'none', opacity: 0, delay, ease: "power1.out" })
    .from(header, { duration: 0.5, opacity: 0, y: 10, ease: "power1.out" })
  timelineContent.from(content, { duration: 0.6, delay: 0.6, opacity: 0, y: 20, ease: "power1.out" });

  timelineHeader.play();
  timelineContent.play();
}

export function play(pathname: any, node: any, isAppearing: any, setCurrentRef: any) {
  const delay = isAppearing ? 0 : 0.3;
  homeTimeline(node, delay);

  setCurrentRef(node);

  // const loadPromise = new Promise(resolve => {
  //   window.addEventListener('DOMContentLoaded', resolve)
  // })

  // loadPromise.then(() => homeTimeline(node, delay));

  // requestAnimationFrame(window.loadPromise.)

  // requestAnimationFrame(async () => await timeline.play());
  // window
  //   .loadPromise
  //   .then(() => )
}

export function exit(node: any) {
  const timeline = gsap.timeline({ paused: true });

  timeline.to(node, { duration: 0.3, opacity: 0, y: -10, ease: "power1.in" });
  timeline.play();
}
