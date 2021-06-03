import React from 'react';
import './Body.css';
import BodyComponent from './BodyComponent'
import image1 from '../img/image1.jpeg'
import image2 from '../img/image2.jpeg'
import image3 from '../img/image3.jpeg'
import image4 from '../img/image4.jpeg'

function Body() {
    return (
        <div className='body'>
            <div className='bodyText'>
                <h1>How it works</h1>
                <p>Chose your recipes</p>
                <p>•</p>
                <p>Pre-measured inredients for less waste</p>
                <p>•</p>
                <p>Delivered safely to your door</p>
            </div>
            <div className='bodyItems'>
                <BodyComponent image={image1} title='Choose your meals' text='Curated, easy-to-follow recipes every week, customisable by you'/>
                <BodyComponent image={image2} title='Create the perfect box' text='Suit your lifestyle with a variety of Extras, including desserts and sides'/>
                <BodyComponent image={image3} title='Get convenient weekly deliveries' text='Scheduling made easy, with drop-offs right at your door'/>
                <BodyComponent image={image4} title='Cook seasonal, fresh ingredients' text='Food made from scratch in the comfort of your kitchen'/>
            </div>
            <div className='bodyButton'>
                <button>Learn more</button>
                <p>You can <b>skip a week or cancel</b> at any time</p>
            </div>
        </div>
    )
}

export default Body

