import React from 'react';
import Aux from './../../../hoc/aux';
import Button from './../../UI/Button/button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igkey => {
    return <li><span style={{textTransform: 'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}</li>
    })
    return (
        <Aux >
            <h3>Your Order</h3>
            <p style={{textAlign: 'left'}}>One Mc Mexican Chicken Tikki with following ingredients:</p>
            <ul style={{ listStyle: 'none', textAlign: 'left'}}>
                {ingredientSummary}
            </ul>
            <h4 style={{textAlign: 'left'}}>Total Price: ${props.total.toFixed(2)}</h4>
            <p style={{textAlign: 'left'}}>Continue to checkout?</p>
            <Button clicked={props.cancelled} btnType="Button Danger">CANCEL</Button>
            <Button clicked={props.continued} btnType="Button Success">CONTINUE</Button>
            </Aux>
    )
};

export default orderSummary;