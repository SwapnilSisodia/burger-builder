import React from 'react';
import './buildcontrols.css';
import BuildControl from './buildcontrol/buildcontrol';

const controls = [
    {label: 'Bacon', type: 'bacon'},
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]



const buildControls = (props) => {

    return (
        <div className="BuildControls">            
        <p>Current Price: $<strong>{props.prices.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl 
                   key={ctrl.label} 
                   label={ctrl.label}
                   added={() => props.ingredientsAdded(ctrl.type)}
                   removed={()=> props.ingredientsRemoved(ctrl.type)}
                   disable={props.disabled[ctrl.type]}/>
            ))}
        <button className="OrderButton" disabled={!props.purchaseable}  onClick={props.ordered}>Order</button>
        </div>
    )
}

export default buildControls;