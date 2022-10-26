import React from 'react'
import avatar from '../header/avatar.jpg'
import './Sidebar.css'
import dev from './dev.jpg'
import { FaDiceTwo ,FaBookmark} from "react-icons/fa";


const Sidebar = () => {
    const recent=(topic)=>{
     return(<div className="recent-item">
          <span className="item">
            <p>#{topic}</p>
          </span>
     </div>)
        
    }
  return (
    <div className='sidebar'>
        <div className="sidebar-top">
            <img src={dev} alt="dev"  className='dev-image'/>
            <img src={avatar} alt="avatar" className='img-avatar'/>
           <h4>Ali Bentiba</h4>
           <p>Front-End Developer |<br/> JavaScript | React </p>
       
        <div className="sidebar-stats">
            <div className="sidebar-stat">
                <p>Who's viewed your profile </p>
                <p className='sidebar-stat-Number'>71</p>
            </div>
            <div className="sidebar-stat">
                <p>Connections</p>
                <p className='sidebar-stat-Number'>1,185</p>
            </div>
            </div>

            <div className="sidebar-item">
                 <FaBookmark className='bookmark'/>
                <p>My item</p>
            </div> 
            </div>

<div className="sidbar-botoom">
   <div className='recent-items'>
            <p>Recent</p>
            {recent('front End Dev')}
            {recent('Back End Dev')}
            {recent('QA eng')}
            {recent('DevOps')}

   </div>
   </div>




    </div>
  )
}

export default Sidebar