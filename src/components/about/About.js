import React from 'react'
import './About.css'
import { DiJavascript1 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { GiHook } from "react-icons/gi";
import {SiRedux} from "react-icons/si";
import AboutCard from './AboutCard';

const About = () => {
    return (
        <div className='about'>
            <div className="container">
                
                <p>The modules covered are displayed below.</p>
                <div className="card-container">
                    <div className="card">
                        <AboutCard icon={<AiFillHtml5 className='icon' />} heading='HTML & CSS' text='Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web.' />
                    </div>
                    <div className="card">
                        <AboutCard icon={<DiJavascript1 className='icon' />} heading='JavaScript' text='JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, ' />
                    </div>
                    <div className="card">
                        <AboutCard icon={<GiHook className='icon' />} heading='Hooks' text='A Hook is a special function that lets you “hook into” React features. ' />
                    </div>
                    <div className="card">
                        <AboutCard icon={<SiRedux className='icon' />} heading='Redux' text='Redux simply provides a subscription mechanism which can be used by any other code. ' />
                    </div>
                </div>
                <a href="/" className="btn">Go Back</a>
            </div>
        </div>
    )
}

export default About
