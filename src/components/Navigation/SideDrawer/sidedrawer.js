import React from 'react';
import NavigationItems from './../NavigationItems/navigationItems';
import Logo from './../../Logo/logo';
import './sidedrawer.css';
import Aux from './../../../hoc/aux';
import BackDrop from './../../UI/Backdrop/backdrop';

const sidedrawer = (props) => {

    let attachedClasses = ["SideDrawer" , "Close"];
    if(props.opened){
        attachedClasses = ["SideDrawer" , "Open"];
    }

    return (
        <Aux>
            <BackDrop show={props.opened} cancelled={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div><Logo height="11%"/></div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    )
};

export default sidedrawer;