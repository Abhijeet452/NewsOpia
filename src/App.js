import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress: 10
  }
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <div className="container my-4">
            <LoadingBar
            height={3}
              color='#f11946'
              progress={this.state.progress}
            />
            <Switch>
              <Route exact path="/">
                <News setProgress={this.setProgress} key="general" category="general" />
              </Route>
              <Route exact path="/general">
                <News setProgress={this.setProgress} key="general" category="general" />
              </Route>
              <Route exact path="/home">
                <News setProgress={this.setProgress} key="general" category="general" />
              </Route>
              <Route exact path="/business">
                <News setProgress={this.setProgress} key="business" category="business" />
              </Route>
              <Route exact path="/entertainment">
                <News setProgress={this.setProgress} key="entertainment" category="entertainment" />
              </Route>
              <Route exact path="/health">
                <News setProgress={this.setProgress} key="health" category="health" />
              </Route>
              <Route exact path="/science">
                <News setProgress={this.setProgress} key="science" category="science" />
              </Route>
              <Route exact path="/sports">
                <News setProgress={this.setProgress} key="sports" category="sports" />
              </Route>
              <Route exact path="/technology">
                <News setProgress={this.setProgress} key="technology" category="technology" />
              </Route>
            </Switch>
          </div>
          {/* <Footer/> */}
        </Router>
      </>
    )
  }
}


