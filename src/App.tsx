import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { ThemeProvider } from "styled-components";
import { play, exit } from './styles/timelines';

import Navbar from './components/layouts/Navbar';
import { GlobalStyles } from './styles/global';
import { ThemeContext, themes } from './styles/theme';
import { Home, Project, NotFound, Api } from './components/pages';

export default function App() {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  }
  const themeContext = {
    theme: theme,
    toggleTheme: toggleTheme,
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ThemeContext.Provider value={themeContext}>
          <Navbar />
        </ThemeContext.Provider>
        <Switch>
          <Route path="*">
            <AnimationApp />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

function AnimationApp() {
  let location = useLocation();
  const nodeRef = useRef(null);

  // work around of wrong onExit nodeRef bug in react-transition-group
  const [currentRef, setCurrentRef] = useState(nodeRef.current);

  return (
    <div className="container-fluid">
      <TransitionGroup>
        <Transition
          key={location.key}
          appear={true}
          onExit={() => exit(currentRef)}
          onEnter={(isAppearing: boolean) => play(location.pathname, nodeRef.current, isAppearing, setCurrentRef)}
          timeout={{ enter: 1300, exit: 200 }}
          nodeRef={nodeRef}>
          <div ref={nodeRef}>
            <Switch location={location}>
              <Route path="/" exact><Home /></Route>
              <Route path="/project"><Project /></Route>
              <Route path="/api"><Api /></Route>
              <Route path="*"><NotFound /></Route>
            </Switch>
          </div>
        </Transition>
      </TransitionGroup>
    </div>
  )
}
