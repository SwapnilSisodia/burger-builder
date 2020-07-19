import React from 'react';
import './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends React.Component{

   
    render(){
        let ingredient=null;


        switch (this.props.type)
    {
        case('bread-bottom'):
          ingredient = (
              <div className="BreadBottom"/>
          );
          break;
          case('bread-top'):
          ingredient = (
              <div className="BreadTop">
                  <div className="Seed1"/>
                  <div className="Seed2"/>
              </div>
          );
          break;
          case('bacon'):
          ingredient = (
              <div className="Bacon"/>
          );
          break;
          case('meat'):
          ingredient = (
              <div className="Meat"/>
          );
          break;
          case('cheese'):
          ingredient = (
              <div className="Cheese"/>
          );
          break;
          case('salad'):
          ingredient = (
              <div className="Salad"/>
          );
          break;
          default:
              ingredient=null;
              break;
          }
              return ingredient;

    
    }

}

BurgerIngredient.propType={
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;

