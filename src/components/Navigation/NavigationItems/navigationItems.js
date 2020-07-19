import React from 'react';
import NavigationItem from './NavigationItem/navigationItem';
import  './navigationItems.css';

const navigationItems = (props) =>(
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/" >Checkout</NavigationItem>
    </ul>

)

export default navigationItems;