import React from 'react'
import Header from './header/Header'
import Sidebar from './Sidebar/Sidebar'
import './App.css'
import Feed from './Feed/Feed'


function App() {
  
    return (
      <div className='App'>

  <Header/>
  <div className="App-body">
  <Sidebar/>
  <Feed/>
  </div>
</div>
     
 )}

export default App
