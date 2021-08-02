import React from 'react';
import './CustomButton.css';

// eslint-disable-next-line react/prop-types
const CustomButton = ({ type, value, ...otherProps }) => (
    <input type={type} value={value} {...otherProps} />
);

export default CustomButton;
