import React from 'react'
import './Joinus.css'

const Joinus = () => {
    return (
        <div className='joinus'>
            <div className="content">
                <h2>Join Our STC Community</h2>
                <form>
                    <div className="form-container display-col">
                        <input type="email" name='email' placeholder='Enter your email' />
                        <button className="btn">Sign Up</button>
                    </div>
                    <div className="form-container">
                        <input type="checkbox"/> <p>Yes, I agree to receive email communications from STC.</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Joinus
