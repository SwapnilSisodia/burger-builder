import React from 'react';
import Aux from './../../hoc/aux';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/buildcontrols';
import Modal from './../../components/UI/Modal/modal';
import OrderSummary from './../../components/Burger/OrderSummary/orderSummary';

const INGREDIENT_PRICES={
    bacon: 0.4,
    salad: 0.3,
    cheese: 0.5,
    meat: 0.7
}

class BurgerBuilder extends React.Component{

    
    state = {
        ingredients: {
            bacon: 0,
            salad: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseable(ingredients){
        const sum= Object.keys(ingredients)
        .map((igKey) =>{
            return ingredients[igKey]
        }).reduce((sum,el)=>{
            return sum+el;
        },0);
        if(sum>0)
        {
            this.setState({purchaseable:true})
        }
    }

    addIngredientHandler = (type) => {
        const oldCount= this.state.ingredients[type];
        const updatedCount= oldCount+1;
        const updatedingredients = {
            ...this.state.ingredients
        };
        updatedingredients[type]= updatedCount;
        const oldTotalPrice= this.state.totalPrice;
        const updatedTotalPrice= oldTotalPrice + INGREDIENT_PRICES[type];
        this.setState({ingredients:updatedingredients, totalPrice:updatedTotalPrice}); 
        console.log(this.state.ingredients);
        this.updatePurchaseable(updatedingredients);

    }

    removeIngredientHandler = (type) => {
        const oldCount= this.state.ingredients[type];
        if(oldCount>0)
        {
        const updatedCount= oldCount-1;
        const updatedingredients = {
            ...this.state.ingredients
        };
        updatedingredients[type]= updatedCount;
        const oldTotalPrice= this.state.totalPrice;
        const updatedTotalPrice= oldTotalPrice - INGREDIENT_PRICES[type];
        this.setState({ingredients:updatedingredients, totalPrice:updatedTotalPrice}); 
        this.updatePurchaseable(updatedingredients);
    }
    
}

purchaseHandler = () =>{
    this.setState({purchasing: true});
}

purchaseCancelled = () =>{
    this.setState({purchasing: false});
}

purchaseContinued = () =>{
    alert("You Continued!!");
}

    render(){
        const disabledInfo={
            ...this.state.ingredients
        };
        for(let key in disabledInfo)
        {
            disabledInfo[key]= disabledInfo[key]<=0
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} 
                   clicked={this.purchaseCancelled}>
                    <OrderSummary 
                    ingredients={this.state.ingredients} 
                    cancelled={this.purchaseCancelled}
                    continued={this.purchaseContinued}
                    total={this.state.totalPrice}/>
                
                </Modal>
                 <Burger ingredients={this.state.ingredients}/>
                 <BuildControls 
                   ingredientsAdded={this.addIngredientHandler}
                   ingredientsRemoved={this.removeIngredientHandler}
                   disabled={disabledInfo}
                   purchaseable={this.state.purchaseable}
                   ordered={this.purchaseHandler}
                   prices={this.state.totalPrice}/>
                </Aux>
        )
    }
}

export default BurgerBuilder;