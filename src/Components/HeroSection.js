import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>

            <iframe width="100%" height="720" allowfullscreen="" frameborder="0" src="//player.vimeo.com/video/387685300?title=0&amp;portrait=0&amp;byline=0&amp;autoplay=1&amp;muted=true&amp;loop=1"></iframe>


            <h1>Discover Your Next Adventure</h1>
            <p>Explore the World Awaiting You</p>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn-large'
            >START NOW</Button>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn-large'
            >
                WATCH TRAILER <i className="fa-solid fa-circle-play"/> 
            </Button>
        </div>
    )
}

export default HeroSection;

