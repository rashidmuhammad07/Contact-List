import React, { Component } from "react";
import Contact from "./contact.jsx";
import { Consumer } from "../../context.jsx";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div>
              <h1>
                <span className="text-danger">Contact</span> List
              </h1>
              {value.info.map(i => (
                <Contact key={i.id} item={i} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
