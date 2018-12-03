import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    id: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data => this.setState({ id: data.id, title: data.title }));
  }
  // componentWillMount() {
  //   console.log("component will mount...");
  // }
  // componentDidUpdate() {
  //   //runs only updating something (i.e: state in a component)
  //   console.log("component did update...");
  // }
  // componentWillReceiveProps(nextProps, nextState) {
  //   //runs when a component is expecting to receive props (i.e: redux)
  //   console.log("component will receive props...");
  // }
  // getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {

  // }

  render() {
    const { id, title } = this.state;
    return (
      <div>
        <div className="display-4">{title}</div>
        <p>{id}</p>
      </div>
    );
  }
}

export default Test;
