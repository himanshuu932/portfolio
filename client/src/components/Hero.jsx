import React from 'react';
import './styles/Hero.css'; // Assuming you have a CSS file for styling

const  Hero =()=>{
    return (
        <div className="hero">
            <div className='image'>
                <img src="https://picsum.photos/300" alt="Hero" />
            </div>
            <div className="hero-content">
                <h1>Welcome to My Portfolio</h1>
                <p>Hi, I'm Himanshu Upadhyay, a passionate web developer.</p>
                <button className="cta-button">View Projects</button>
            </div>
        </div>
    );
}
export default Hero;