import React, {useState} from 'react'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className="container">
                <h1 style={{ marginLeft: '1rem', color: '#00d8ff'}} >STC</h1>
                <ul className={click ? 'nav active' : 'nav'}>
                    <li className="nav-item-plat">
                        <a href="/about">Modules</a>
                    </li>
                    <li className="nav-item-candi">
                        <a href="/joinus">Join Us</a>
                    </li>
                    <li className="nav-item-about">
                        <a href="/coursesumm">Course Summary</a>
                    </li>
                    <li className="nav-item">
                        <a className='btn' href="/">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
