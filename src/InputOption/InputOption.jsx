import React from 'react'
import './InputOption.css'
const InputOption = ({Icon,title,color}) => {
  return (
    <div className='InputOption'>
    <Icon style={{color:color}} className='InputOptionIcon'/>
     <h4>{title}</h4>
    </div>
  )
}

export default InputOption