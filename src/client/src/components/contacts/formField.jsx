import React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

const FormField = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  type,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={classnames("form-control form-control-lg ", {
          "is-invalid": error
        })}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

FormField.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired
};

FormField.defaultProps = {
  type: "text"
};

// {labelTag,label,inputType,inputPlaceHolder,name,this.onChange}
export default FormField;
