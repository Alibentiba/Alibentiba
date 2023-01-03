import React from 'react'
import './InputOption.css'
import { useDispatch,useSelector } from 'react-redux'
import {modelOPen} from '../Re/Slice'
const InputOption = ({Icon,title,color}) => {
  return (
    <div className='InputOption'>
    <Icon style={{color:color}} className='InputOptionIcon ' />
     <h4>{title}</h4>


     
    </div>
  )
}

export default InputOption