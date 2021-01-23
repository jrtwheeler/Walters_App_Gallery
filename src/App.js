import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Directory from "./components/Directory";
import Wrapper from "./components/Wrapper";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faNewspaper)

function App() {
  return (
    <Wrapper>
    <Router>
      <div>
        <Header>Walters App Gallery</Header>
      </div>
      <div>
      <Directory/>
      </div>
    </Router>
    </Wrapper>
  );
}

export default App;
