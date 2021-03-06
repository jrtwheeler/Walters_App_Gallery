import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import SideBar from "./components/SideBar";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faNewspaper)

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <SideBar />
        <Wrapper>
          <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
