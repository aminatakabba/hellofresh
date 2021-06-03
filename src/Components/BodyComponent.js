import React from 'react';
import './BodyComponents.css';

function BodyComponent(props) {
    return (
        <div className='bodyComponents'>
            <img src={props.image} alt='reference'/>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default BodyComponent
