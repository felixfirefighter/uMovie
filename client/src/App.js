import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Heading from "./components/Heading";
import Landing from "./components/Landing";
import MovieDetail from "./components/MovieDetail";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_MOVIE_API_KEY;

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Heading />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/movie/:id" component={MovieDetail} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
