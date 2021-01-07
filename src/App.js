import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Projects from './components/pages/Projects';
import Footer from './components/Footer';
import Resume from './components/pages/Resume';



function App() {
  
  return (
    <>
     
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/resume" exact component={Resume}/>
        </Switch>
        <Footer />
      </Router>
          
   </>
  );
}

export default App;
