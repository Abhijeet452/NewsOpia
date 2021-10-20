import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <div className="container my-4">
            <Switch>
              <Route exact path="/">
                <News key="general" category="general" />
              </Route>
              <Route exact path="/general">
                <News key="general" category="general" />
              </Route>
              <Route exact path="/home">
                <News key="general" category="general" />
              </Route>
              <Route exact path="/business">
                <News key="business" category="business" />
              </Route>
              <Route exact path="/entertainment">
                <News key="entertainment" category="entertainment" />
              </Route>
              <Route exact path="/health">
                <News key="health" category="health" />
              </Route>
              <Route exact path="/science">
                <News key="science" category="science" />
              </Route>
              <Route exact path="/sports">
                <News key="sports" category="sports" />
              </Route>
              <Route exact path="/technology">
                <News key="technology" category="technology" />
              </Route>
            </Switch>
          </div>
          {/* <Footer/> */}
        </Router>
      </>
    )
  }
}


