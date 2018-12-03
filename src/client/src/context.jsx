import React, { Component } from "react";
const Context = React.createContext();

const Reducer = (state, action) => {
  switch (action.type) {
    case "Delete_Contact":
      return {
        ...state,
        info: state.info.filter(item => item.id !== action.payload)
      };
    case "Add_Contact":
      const randID = state.info[state.info.length - 1].id || 0;
      console.log(randID);

      action.payload.id = randID ? randID + 1 : 1;
      return {
        ...state,
        info: state.info.concat([action.payload])
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    info: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Smith",
        email: "ksmith@yahoo.com",
        phone: "333-333-3333"
      },
      {
        id: 3,
        name: "Micheal Jorden",
        email: "mj1234@gmail.com",
        phone: "222-222-2222"
      }
    ],
    dispatch: action => {
      this.setState(state => Reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

Provider.defaultProps = {
  state: {
    info: [
      {
        id: 0,
        name: "",
        email: "",
        phone: ""
      }
    ]
  }
};

export const Consumer = Context.Consumer;
