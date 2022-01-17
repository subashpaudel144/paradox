import React from 'react'
import '../Styles/Video.css';

function Video() {
    return (
        <div className='video'>
            <iframe
             src="https://www.youtube.com/embed/dpEPNioJ1Ik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
        </div>
    )
}

export default Video
