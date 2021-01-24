import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Switch, Route, useLocation} from 'react-router-dom';
import Home from './components/pages/Home'
import Projects from './components/pages/Projects';
import Footer from './components/Footer';
import Resume from './components/pages/Resume';
// import Contact from './components/pages/Contact';

import { AnimatePresence} from 'framer-motion'


function App() {
  const location = useLocation();
  return (
    <>
     
      {/* <Router> */}
        <Navbar />
        
        <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/resume" exact component={Resume}/>
          {/* <Route path="/contact" exact component={Contact}/> */}
        </Switch>
        </AnimatePresence>
        <Footer />
      {/* </Router> */}
          
   </>
  );
}

export default App;
