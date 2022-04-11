import React from 'react'
import cam from "./cam.svg"

const Header = () => {
  return (
    <div className='heading'>
        <div className='app-name'>&#127744;<b>Instaclone</b></div>
        <div className='cam-icon'>
          <img src={cam} alt='cam'></img>
        </div>
    </div>
  )
}

export default Header