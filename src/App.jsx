import React from 'react'
import Header from './header/Header'
import Sidebar from './Sidebar/Sidebar'
import './App.css'
import Feed from './Feed/Feed'
import {useSelector} from 'react-redux'
import Login from './Login/Login'


function App() {
  const user1 =useSelector(state=>state.user)
    return (
      <div className='App'>
         <Header/>

{/* {!user1? (<Login/>) :( */}
  <div className="App-body">
   <Sidebar/>
   <Feed/>
  </div>
  {/* )  */}
  {/* } */}
  
</div>
     
 )}

export default App
