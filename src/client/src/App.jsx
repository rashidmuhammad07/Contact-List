import React from "react";
import Contacts from "./components/contacts/Contacts.jsx";
import Header from "./components/layout/Header.jsx";
import AddContact from "./components/contacts/addContact.jsx";
import About from "./components/pages/about.jsx";
import PageNotFound from "./components/pages/pageNotFound.jsx";
import Test from "./components/test/test.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faSortUp,
  faTimes,
  faHome,
  faPlus,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import { Provider } from "../src/context.jsx";

library.add(faSortDown, faSortUp, faTimes, faHome, faPlus, faQuestionCircle);

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/Add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
