import React from 'react'
import QuoraBox from '../QuoraBox/QuoraBox'
import '../feed/Feed.css'
import Post from '../post/post'

function Feed() {
  return (

    <div className='feed'>
      <QuoraBox />
      <Post/>

    </div>
    
  )
}

export default Feed