import React from 'react';
import propTypes from 'prop-types';


const Header = (props) => {
  return (
    <div> 
      <h1>{props.branding}</h1>
    </div>
  );
}


Header.defaultProps = {
  branding: 'Contact Manager :) '
}

Header.propTypes = {
  branding: propTypes.string.isRequired
}

export default Header;