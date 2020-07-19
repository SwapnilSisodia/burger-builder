import React from 'react';
import './logo.css';
import burger from './../../assets/Images/burger-logo.jpg';

const logo=(props) =>(
<div className="Logo" style={{height: props.height}}>
    <img src={burger} alt="burger" width="60px" height="60px"/>
    </div>
);

export default logo;