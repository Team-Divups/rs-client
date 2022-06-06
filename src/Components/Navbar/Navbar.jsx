import React from 'react'
import './navbar.scss'
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>
            <span>English</span>
          </div>
          <div className="item">
            <DarkModeIcon className='icon' />
          </div>
          <div className="item">
            <FullscreenExitIcon className='icon' />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className="counter">5</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <img 
              src="https://www.w3schools.com/howto/img_avatar.png" 
              alt=""
              className='avatar'
             />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar