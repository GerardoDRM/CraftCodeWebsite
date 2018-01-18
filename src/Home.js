import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

class Home extends Component {

  render() {
    return (
      <div>
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
module.exports = Home;
