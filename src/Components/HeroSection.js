import { Button } from './Button';

function HeroSection() {
    return (
        <div className='hero-container'>

            <iframe width="640" height="360" src="https://www.youtube.com/embed/OAFxlLMixTE?list=PLOhV0FrFphUcZnVciz7KtPaaXGAa5wTyP" title="Music for vlogs | LiQWYD - Birthday (Free Travel Music No Copyright | Vlog Background Music)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h1>Discover Your Next Adventure</h1>
            <p>Explore the World Awaiting You</p>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn-large'
            >START NOW</Button>
        </div>
    )
}

export default HeroSection;

