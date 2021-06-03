import React from 'react';
import logo from '../img/logo.png';
import './Header.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (
        <div className="header">
            <div className="header__right">
                <img src={logo} alt='Hello Fresh logo' className='header__rightLogo'/>
                <div className='header__rightContent'>
                    <div className='header__rightContentText'>Our Recipe Boxes</div>
                    <div className='header__rightContentText dropdown' >How it Works
                        <div className='dropDownContent'>
                            <p>How it Works</p>
                            <p>Sustainability</p>
                            <p>CO2 Neutral</p>
                            
                        </div>
                        <div className='dropDownArrow' >
                            <ExpandMoreIcon />
                        </div>
                    </div>
                    <div className='header__rightContentText dropdown'>Our Recipes
                        <div className='dropDownContent'>
                            <p>Our Menu</p>
                            <p>Recipe hub</p>
                        </div>
                        <div className='dropDownArrow' >
                            <ExpandMoreIcon />
                        </div>
                    </div>
                    <div className='header__rightContentText'>Gift Cards</div>
                </div>
            </div>
            <div className="header__left">
                <div className='header_leftLogin'>
                    <button className='header_leftLoginButton'>Log in</button>
                </div>
            </div>
        </div>
    )
}

export default Header
