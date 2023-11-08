// rfce

import React, { useEffect, useState } from 'react'
import Header from './Header'
import {LiaThumbsDown, LiaThumbsUp, LiaDownloadSolid} from 'react-icons/lia'

import {PiShareFatLight} from 'react-icons/pi'
import allVideos from './useful-data-main/videos.json'
import tmkoc from './images/tmkoc.jpg'
import avtar from './images/avtar.png'
import { Link } from 'react-router-dom'
function VideoInfo(){
  return(<><h5 class='video-title'>Kalank Title track -Lyrical|alia Bhatt,varun dhawan | Amitabh</h5>
  <div class="video-detail">
    <div class="channel-info"></div>
    <img src={avtar} height={'30px'} width={'30px'}/>
        <div className='channel-name'>
          <h6 className='margin-0'>Zee Music Company</h6>
          <p className='margin-0'>102M subscribers</p>
  </div>
  <button className='subscribe'>Subscribe</button>
  
      <div class="video-action-buttons">
        <button>
          <LiaThumbsUp size={'1.4rem'} />597K | <LiaThumbsDown size={'1.4rem'} />
        </button>
        <button>
          <PiShareFatLight size={'1.4rem'}/> Share
        </button>
        <button>
          <LiaDownloadSolid size={'1.4rem'}/>
            Download
        </button>
      </div>
    </div>
    <div class="video-desc">
      <p>434K views &nbsp; 1 year ago</p>
      <p>Here is the compilation video for all the random suggestions Shukla Ji gave from 
                  the film Chhalaang. Watch this video for non stop laughter and let us know in 
                  the comments which suggestion did you relate with the most.
                  </p>

</div>
 
</>  )


}

function SuggestedVideos(props){
  let title = props.videoId;
  return (
    <>
      <div className='suggested-video'>
        <div className='suggestion-image'>
          <img src={tmkoc} title={title}/>
        </div>
        <div className='suggestion-content'>
          <div className='video-info'>
            <p class="track-title margin-0 video-info-title">Kalank Title Track - Lyrical | Alia Bhatt</p>
            <p class="margin-0 smaller-fontsize">T-Series</p>
            <p class="margin-0 smaller-fontsize">230M views . 4 years ago</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Video() {
  let videos = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div>
      {/* <p>Video comp</p>
      <h4>Time Left : {seconds}</h4> */}
      <Header />
      <div className='video-main-page'>
        <div className='video-frame'>
          <iframe className='iframe-video' src="https://www.youtube.com/embed/Grr0FlC8SQA?si=wzrbZX_JVDirQuKX?rel=0&mute=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className='video-info'>
          <div className='below-video'>
          <div className='video-title-below'><b>Kalank Title Track - Lyrical | Alia Bhatt</b></div>
            <div className='channel-logo'><img className='avtar'src='https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-465.jpg?w=740' alt='channel logo'></img><pre><b>zee music</b>
            <p>700M views</p></pre></div>
            </div>
          
          <div className=''></div>
        </div>
        </div>
        <div className='suggestions'>
          <p> Suggested Videos</p>
          {videos.map((videoId) => {
            return (<SuggestedVideos title={videoId} />);
          })}
        </div>
      </div>
    </div>
  )
}

export default Video

