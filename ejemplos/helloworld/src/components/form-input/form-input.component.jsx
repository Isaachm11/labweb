import React from "react";

const FormInput = ({ label, onChange, name, type, required }) => (
  <div className="form-group">
    <label>{label}: </label>
    <input onChange={onChange} name={name} type={type} required={required} />
  </div>
);

export default FormInput;