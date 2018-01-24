import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

  render() {
    const logo = require('./static/craftcodelogo.svg');

    return (
      <div className="footer">
        <img src={logo}/>
        <div>
          <img/>
          <img/>
        </div>
      </div>
    )
  }
}
export default Footer;
