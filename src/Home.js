import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

class Home extends Component {

  render() {
    const logo = require('./static/craftcodelogo.svg');

    return (
      <div className="app">
      <header>
        <img src={logo} width="50px" height="100px"/>
        <div className="tabs">
          <span>Services</span>
          <span>Portfolio</span>
          <span>Contanct</span>
        </div>
      </header>
        {/* Top Img */}
        <div>
          <h1>Craft Code</h1>
          <p></p>
          <div>
            <img src=""/>
          </div>
        </div>
        {/* Services */}
        <div>
          <div>
            <img />
            <h3></h3>
            <p></p>
          </div>
        </div>
        {/* Projects */}
        <div>
          <p></p>
          <div>
            <img />
            <img />
            <img />
          </div>
        </div>
        {/* Funny */}
        <div>
          <p></p>
          <img />
        </div>
        {/* Footer */}
        <Footer/>
      </div>
    )
  }
}
export default Home;
