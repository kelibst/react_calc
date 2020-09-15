import React from 'react'
import SetButton from './setButton';

export default function ButtonCov(props) {
    const btns = [
        ['AC', '+/-', '%', '÷'],
        ['7', '8', '9', 'X'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
    ];
    const patt = /^[+\-=÷x]$/i
    const {handleClick} = props;
    return (
        <div className="btn-container">
            {btns.map(btn =>(
                <div key={btn} className="row">
                    {btn.map(bt =>(<SetButton 
                        handleClick={handleClick}
                        name={bt} 
                        key={bt}
                        color={(patt.test(bt)) ? 'orange' : 'white'}
                        wide={(bt === "0")}/>))}
                </div>
            ))}
        </div>
    )
}
