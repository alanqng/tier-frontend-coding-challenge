import React from 'react';
import './FormInput.css';

// eslint-disable-next-line react/prop-types
const FormInput = ({ handleChange, label, htmlFor, ...otherProps }) => (
    <div>
        {label ? (
            <label htmlFor={htmlFor}>
                {label}
            </label>
        ) : null}
        <input onChange={handleChange} {...otherProps} />
    </div>
);

export default FormInput;
