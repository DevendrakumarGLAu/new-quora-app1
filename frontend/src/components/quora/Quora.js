import React from 'react' 
import '../quora/Quora.css' 
import Header from '../header/header'
import Sidebar from '../sidebar/Sidebar'
import Feed from '../feed/Feed'
import Widget from '../Widget/Widget'



function Quora() {
  return (

    <div className='quora'>
        <Header/>
        <div className='quora_contents_main'>
            <div className='quora_contents'>
                <Sidebar/>

                <Feed/>

                <Widget/>

            </div>

        </div>
    </div>
  )
}

export default Quora