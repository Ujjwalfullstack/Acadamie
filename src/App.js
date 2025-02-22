import React from 'react'
import "./App.css"
import Header from './components/common/Heading/Header'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/teams/Team';
import Price from './components/pricing/Price';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';

function App () {
  return (
    <>
      
      <Router>
      <Header />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/courses" exact component={CourseHome} />
          <Route path="/team" exact component={Team} />
          <Route path="/pricing" exact component={Price} />
          <Route path="/journal" exact component={Blog} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/footer" exact component={Footer} />
        </Switch> 
        <Footer/>
      </Router>
    </>
  )
}

export default App
