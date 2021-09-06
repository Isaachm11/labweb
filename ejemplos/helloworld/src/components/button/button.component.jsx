import React from 'react';

const Button = ({onClick, url, type, children}) => (
    <a onClick={onClick} href={url} type={type} className="">{children}</a>
);

export default Button;