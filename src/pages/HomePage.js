import React, {Component} from "react";
import AppShowcase from '../components/AppShowcase'
import Skills from '../components/Skills';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';

class HomePage extends Component {
  render(){
    return (
      <div className="HomePage">
        <AppShowcase />
        <>
          <Skills />
        </>
        <>
          <Jobs />
        </>
        <>
          <Projects />
        </>
      </div>
    );
  }
}

export default HomePage;