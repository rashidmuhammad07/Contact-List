import React, {Component} from 'react';
import propTypes from 'prop-types';

class Contacts extends Component {
  render () {
    let {name, email, phone} = this.props.item;

    return (
      <div>
        <h4> {name} </h4>
          <ul>
            <li> {email} </li>
            <li> {phone} </li>
          </ul>
      </div>
    );
  }
}

Contacts.defaultProps = {
  name: 'Rashid', 
  email: 'rashid@gmail.com', 
  phone: '777-777-7777'
}

Contacts.propTypes = {
  name: propTypes.string.isRequired, 
  email: propTypes.string.isRequired, 
  phone: propTypes.string.isRequired, 
}

export default Contacts;