import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { IoClose ,IoDocumentText} from 'react-icons/io5';
import {modelOPen} from '../Re/Slice'
import { BsImageFill } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { RiRedPacketFill } from 'react-icons/ri';


const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
 
  p: 3,
};


const  Modal1=()=> {
  const dispatch =useDispatch()
  const [open, setOpen] = useState(null);
  // redux 
  const model1=useSelector(state=>state.userStore.ModelState)
  const use=useSelector(state=>state.userStore.user)

 
  const handleClose = () => {
    dispatch(modelOPen(!model1))
  };

  return (
    <div>
      <Modal
        open={model1}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, 
        display:'flex',
        flexDirection:"column" ,
        gap:'15px',
        border:'none',
        borderRadius:'10px',
        outline:'none'
        ,
       
        width:600 }}>
{/* Top div */}
          <Box  
          style={{
            width:'100%',
            height:"50px",
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            fontSize:'20px',
            fontWeight:'500',
            borderBottom:'solid 1px gray'
            
        }}
        >
            <p>Create a post</p>
            <Button 
            style={{
              width:'35px',
              height:'35px',
              borderRadius:'50%',
              backgroundColor:'green',
            
            color:'black'
          }}
            onClick={handleClose}><IoClose/></Button>


          </Box>

 {/* Center div */}
 <Box style={{display:'flex',flexDirection:'row',gap:"10px" ,alignItems:'center'}}>
 <img src={use?.photoURL} alt='avatar'
  style={{width:'60px',height:'60px',borderRadius:"100%"}} />
  <Box >
  <p style={{fontSize:'20px',fontWeight:"500"}}>{use?.displayName}</p>
  <button 
  style={{width:"90px",height:'35px',borderRadius:'50px',border:'none',fontSize:'18px'}}>
    Anyone</button>
  </Box>




 </Box>
 <Box style={{width:'100%',height:'220px'}}>
<input type="text" placeholder='What do you want to talk about?' 
style={{width:'100%',border:'none', fontSize:'18px',outline:'none'}}/>




 </Box>

 {/* Bottom */}

 <Box style={{
  display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between',
  width:"100%"}}>



       <Box style={{display:'flex',flexDirection:'row',alignItems:'flex-start',fontSize:"26px",gap:'15px',color:'gray'}}>
         <BsImageFill style={{cursor:'pointer'}}/>
         <AiFillYoutube style={{cursor:'pointer'}}/>
         <IoDocumentText style={{cursor:'pointer'}}/>
         <RiRedPacketFill style={{cursor:'pointer'}}/>
     </Box>

          <button
          disabled 
          style={{width:"60px",borderRadius:'50px',height:'30px',fontWeight:'600',cursor:'pointer' }}
          >Post</button>
  
        </Box>
        </Box>
      </Modal>
    </div>
  );
}
export default Modal1