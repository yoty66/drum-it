import React, { Component } from 'react';
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (



      <div className="homePage">
          <div className="title">
            Drum-it
          </div>
        <h3 className = "about"> Learn to drum in a fun way while customizing your experience! </h3>
        <button className = "defaultDrumSet"> <a href="#PlayerPanel"> <b> Use default drum set </b> </a> </button>
        <button className = "ownDrumSet">  <a href="#EnablePanel"> <b> Build your own drum set </b> </a> </button>

      </div>
    )
  }
}
export default HomePage;
