import React from 'react'
import MainVideo from '../../assets/video.mp4'
import './Homepage.css'

const Homepage = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={MainVideo} type='video/mp4'/>
            </video>
            <div className="hero-text">
                <h1>Sachin Training Centre</h1>
                <h1><span className="blue">Come Learn </span> Get Roasted!</h1>
                <p>Knowledge - Truth - Coffee breaks - Code</p>
            </div>
            <div className="bottom-text">
                <h2>Acha teek Hai ! Let's go</h2>
            </div>
        </div>
    )
}

export default Homepage
