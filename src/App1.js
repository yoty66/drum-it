import React, { Component } from 'react';
import {Alert} from 'react-bootstrap'
import {Popover} from 'react-bootstrap'
import logo from './logo.svg';
import './App1.css';

class App1 extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

            {/*<Alert bsStyle="warning">*/}
                {/*<strong>Holy guacamole!</strong> Best check yo self, you're not looking too*/}
                {/*good.*/}
            {/*</Alert>;*/}


                <Popover
                    id="popover-basic"
                    placement="right"
                    positionLeft={500}
                    positionTop={500}
                    title="Popover right"
                >
                    And here's some <strong>amazing</strong> content. It's very engaging. right?
                </Popover>


          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
