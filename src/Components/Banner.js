import React, { useState, useEffect } from 'react';
import './Banner.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from 'react-scroll';

function Banner() {
    const [seconds, setSeconds] = useState('money');
    // const [seconds2, setSeconds2] = useState('stress');

    useEffect(() =>  { 
        const interval =  setInterval(() => {
          setSeconds(seconds => 'time');
        }, 1000);
        // const interval2 = setInterval(() => {
        //     setSeconds(seconds2 => 'stress');
        // }, 3000);
        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <div className='banner'>
            <div className='banner__content'>
                <div className='banner_contentItems'>
                    <div className='banner_contentOne'>
                        <h1>We save you serious 
                        <span> {seconds}</span>
                        </h1>
                    </div>
                    <div className='banner_contentTwo'>
                        <p>Now with more choices every week and meals starting from just £3.25/pp</p>
                    </div>
                    <div className='banner_contentThree'>
                        <button className='viewButton'>View our boxes</button>
                    </div>
                </div>
                <div className='scroll-downButton'>
                    <button>
                        <Link to="body" spy={true} smooth={true}><ExpandMoreIcon id='body'/></Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner
