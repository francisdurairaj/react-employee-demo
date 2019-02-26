import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from "./components/Home";
import Department from "./components/Department";
import Location from "./components/Location";
import data from './data.json'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
        <div className="ui secondary pointing menu">
          <NavLink exact to="/" className={"item"}>Home</NavLink>
          <NavLink to="/Department" className={"item"}>Department</NavLink>
          <NavLink to="/Location" className={"item"}>Location</NavLink>
        </div>
        <div className={"ui segment"}>
            <Route exact path="/" render={(props) => <Home {...props} employeedata={data}/>} />
            <Route path="/department" component={Department} />
            <Route path="/location" component={Location} />
          </div>
          </React.Fragment>
      </Router>
    );
  }
}

export default App;
