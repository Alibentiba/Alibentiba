import React from 'react'
import './header.css'
import { IoMdHome,IoMdNotifications} from 'react-icons/io';
import { AiOutlineSearch,AiFillMessage } from 'react-icons/ai';
import avatar from './avatar.jpg'
import { MdGroup,MdBusinessCenter} from 'react-icons/md';
import HeaderOption from '../HeaderOptions/HeaderOption'
import { useDispatch } from 'react-redux';
import { Logout } from '../Re/Slice';


const Header = () => {
const dispatch=useDispatch()
const logoutApp=()=>{
dispatch(Logout())
}
  return (
    <div className='header'>

        <div className='header-left'>
            <img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="" />
            <div className="header-search">
              <AiOutlineSearch/>
                <input placeholder='Search' type="text"/>
            </div>

        </div>


<div className='header-right'>
  <HeaderOption Icon={IoMdHome} title='Home'/>
  <HeaderOption Icon={MdGroup} title='My Network'/>
  <HeaderOption Icon={MdBusinessCenter} title='Jobs'/>
  <HeaderOption Icon={AiFillMessage} title='Messaging'/>
  <HeaderOption Icon={IoMdNotifications} title='Notifications'/>
  <HeaderOption avatar={avatar} title='Me' Click={logoutApp}/>


</div>



    </div>
  )
}

export default Header