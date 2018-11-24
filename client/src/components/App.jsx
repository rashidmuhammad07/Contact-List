import React from 'react';
import Contacts from './contact.jsx'
import Header from './Header.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = { info: [
      {id: 0, name: 'john Doe', email: 'jdoe@gmail.com', phone: '555-555-5555'},
      {id: 1, name: 'Karen Smith', email: 'ksmith@yahoo.com', phone: '333-333-3333'},
      {id: 2, name: 'Micheal Jorden', email: 'mj1234@gmail.com', phone: '222-222-2222'}
    ] };
  }
  render() {

    return (
      <div> 
        <Header branding='Contact Manager' />
        {this.state.info.map( (i) =>  <Contacts key={i.id} item={i}/>)}
      </div>
    );
  }
}

export default App;