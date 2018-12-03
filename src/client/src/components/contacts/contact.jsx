import React, { Component } from "react";
import propTypes from "prop-types";
import { Consumer } from "../../context.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contacts extends Component {
  state = {
    toggle: false,
    currentArrow: "sort-down"
  };
  onClickHandler = e => {
    this.setState({
      toggle: !this.state.toggle,
      currentArrow:
        this.state.currentArrow == "sort-down" ? "sort-up" : "sort-down"
    });
  };
  onDeleteHandler = (id, dispatch) => {
    dispatch({ type: "Delete_Contact", payload: id });
  };

  render() {
    let { id, name, email, phone } = this.props.item;
    let showDetail = (
      <ul className="list-group">
        <li className="list-group-item"> {email} </li>
        <li className="list-group-item"> {phone} </li>
      </ul>
    );

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <FontAwesomeIcon
                  icon={this.state.currentArrow}
                  onClick={this.onClickHandler}
                />
                <FontAwesomeIcon
                  icon="times"
                  style={{ color: "red", float: "right" }}
                  onClick={() => this.onDeleteHandler(id, dispatch)}
                />
              </h4>
              {this.state.toggle ? showDetail : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contacts.defaultProps = {
  name: "Rashid",
  email: "rashid@gmail.com",
  phone: "777-777-7777"
};

Contacts.propTypes = {
  name: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  phone: propTypes.string.isRequired
};

export default Contacts;
