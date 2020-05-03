import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import UserPage from "./components/UserPage/UserPage"
import Dashboard from "./components/DashBoard/DashBoard"
import Promocoes from "./components/UserPage/Promocoes"

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route path="/userpage" component={UserPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/promocoes" component={Promocoes} />
        </div>
      </Router>
    );
  }
}
export default App;