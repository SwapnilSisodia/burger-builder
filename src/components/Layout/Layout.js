import React from 'react';
import Aux from './../../hoc/aux';
import './Layout.css';
import Toolbar from './../Navigation/Toolbar/toolbar';
import SideDrawer from './../Navigation/SideDrawer/sidedrawer';


class Layout extends React.Component{
    state={
            openSideDrawer: false
        }
    

    closeSideBarHandler= () =>{
        this.setState({openSideDrawer:false})
     }

     sideDrawerToggleHandler = () =>{
         this.setState( (prevState) => {
             return {openSideDrawer: !prevState.openSideDrawer}
         })
     }


    render(){
        return (

            <Aux>
        <Toolbar opendrawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer 
        opened={this.state.openSideDrawer}
        closed={this.closeSideBarHandler}/>
        <main className="Content">
            {this.props.children}
        </main>
    </Aux>

        )
    }

}
    

export default Layout;