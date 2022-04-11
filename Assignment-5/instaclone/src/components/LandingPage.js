import React from 'react'
import reactAssign from "./reactAssign.png"
import { Link } from "react-router-dom"
const LandingPage = () => {
    return (
        <div className='main'>
            <div className='left-container'>
                <img src={reactAssign} alt='pic' />
            </div>
            <div className='right-container'>
                <div>
                    <p>10x Team 04</p>
                </div>

                <div className='enterButton'>
                    <Link to="/Postview" className='Buttontext' >Enter</Link>
                </div>

            </div>

        </div>
    )
}
export default LandingPage