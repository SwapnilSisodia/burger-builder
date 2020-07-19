import React from 'react';
import  './navigationItem.css';



const navigationItem = (props) =>{

    let cssClasses = [];
    if(props.active){
        cssClasses = ["active"];
    }

    return(

    <li className="NavigationItem">
        <a href={props.link} 
        className={cssClasses}>{props.children}</a>
        </li>
    )
};

export default navigationItem;