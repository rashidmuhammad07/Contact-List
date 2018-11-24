import React from 'react';
import Contacts from './contact.jsx'

class App extends React.Component {
  render() {
    return (
      <div> 
        <h1>The App Component</h1>
        <Contacts />
      </div>
    );
  }
}

export default App;