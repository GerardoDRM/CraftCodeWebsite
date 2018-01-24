import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

  render() {
    const logo = require('./static/craftcodelogo.svg');
    const face = require('./static/facebook.svg');
    const linkedin = require('./static/linkedin.svg');

    return (
      <div className="footer">
        <img src={logo} width="100px" height="100px"/>
        <div className="icons">
          <img src={face} width="50px" height="50px"/>
          <img src={linkedin}  width="50px" height="50px"/>
        </div>
      </div>
    )
  }
}
export default Footer;
