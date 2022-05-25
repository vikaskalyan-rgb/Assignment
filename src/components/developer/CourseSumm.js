import React from 'react'
import './CourseSumm.css'
import Terminal from '../../assets/logo192.png'

const CourseSumm = () => {
    return (
        <div className='coursesumm'>
            <div className="container">
                <div className="left">
                    <h2>React JS</h2>
                    <p>React JS is an open-source Java script library created by Facebook for rapidly and easily creating rich web - based applications with least coding. It is one of the most popular java script libraries available today, and it is preferred by the majority of organisations. Our React JS Training in Chennai is curated by industry experts and covers the most recent version of React as well as the most recent advancements in the field. It will teach you how to build applications from the ground up using React JS, Redux, and Flux. After completing this course, you will be able to apply React fundamentals to real-time React JS projects. </p>
                </div>
                <div className="right">
                    <div className="img-container">
                        <img src={Terminal} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseSumm
