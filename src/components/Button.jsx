import React from 'react';
import  '../style/Button.css'


const Button = ({click, isEqual, isRed, value, expression, result}) => {

    let className = 'number';
    if(isRed){
        className = "symbol";
    }
    if(!isRed){
        className = "number";
    }


    return (
        <div>
            <button  onClick={isEqual ? (()=> result(eval(expression))):(
                (()=> click(value))
            )}  className={className} value={value}>{value}</button>
        </div>
    );
};

export default Button;