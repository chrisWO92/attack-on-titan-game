import React from 'react'
import './video-bg.css'
import Video from '../../assets/videoBg.mp4'

const Videobg = () => {
  return (
    <div id="header-bg">
      <video src={Video} autoplay='autoplay' muted loop type="video/mp4" id='video-bg'/>
    </div>
  )
}

export default Videobg