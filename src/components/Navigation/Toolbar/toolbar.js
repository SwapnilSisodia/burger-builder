import React from 'react';
import './toolbar.css';
import Logo from './../../Logo/logo';
import NavigationItems from './../NavigationItems/navigationItems';
import DrawerToggle from './../SideDrawer/DrawerToggle/drawerToggle';

const toolbar = (props) => (

    <header className="Toolbar">
        <DrawerToggle clicked={props.opendrawerToggleClicked}/>
        <Logo/>
        <nav className="DesktopOnly">
            <NavigationItems/>
        </nav>
    </header>

);

export default toolbar