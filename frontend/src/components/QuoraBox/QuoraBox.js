import React from 'react'
import '../QuoraBox/QuoraBox.css'
import { Avatar } from '@material-ui/core'

function QuoraBox() {
  return (
    <div className='quoraBox'>
        <div className='quoraBox_info'>
                <Avatar/>
        </div>
          <div className='quoraBox'>
            <input type="text" placeholder='what is your question'/>
          </div>
    </div>
  )
}

export default QuoraBox