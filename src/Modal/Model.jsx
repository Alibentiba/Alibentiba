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
import {deleteObject,getDownloadURL,ref,uploadBytesResumable,} from "firebase/storage";
import { storage,db } from "../firebaseConfig";
import { collection ,addDoc} from "firebase/firestore"; 
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
 
  p: 3,
};


const  Modal1=()=> {

  const [inputmsg, setinputmsg] = useState('');
    const [fileAsset, setfileAsset] = useState(null);
    const [Extension, setExtension] = useState(null);

     const uploadImage = (e) => {
     const imageFile = e.target.files[0];
     const storageRef = ref(storage, `images/${Math.floor(Math.random() * 100)}-${imageFile.name}`);
     const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =(snapshot.bytesTransferred / snapshot.totalBytes) * 100;

      },
      (error) => {
        console.log(error);
    
        setTimeout(4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setfileAsset(downloadURL);

          setTimeout(() => 4000);
      
          
        });
      }
    );
  };
                var d = new Date("2022-03-25");
                let dat = d.toString().slice(0,25);
                const sendpost=(e)=>{
                  e.preventDefault();
                 addDoc(collection(db,"posts"),{
                    name:"Ali bentiba",
                    photoUrl:'',
                    message:inputmsg,
                    timeS:dat,
                    file:fileAsset,
                    Extension:Extension
                   })
                    setinputmsg('')
                    dispatch(modelOPen(!open))
                    setfileAsset(null)

                }



                const top100Films = [
                  { label: 'TheALL', year: 1994 },
                  { label: 'father', year: 1972 },
                  { label: 'TGod', year: 1974 }]

      

  const dispatch =useDispatch()
  // redux 
  const open=useSelector(state=>state.userStore.ModelState)
  const use=useSelector(state=>state.userStore.user) 
  const handleClose = () => {
    dispatch(modelOPen(!open))
  };

  return (
    <div>
      <Modal
        open={open}
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
              fontSize:'28px',
           
            
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
  

 
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width:150,
      
       '& .MuiOutlinedInput-root':{  borderRadius: '50px'}
      
      
      }}
      style={{borderRadius:'50px'}}
      renderInput={(params) => <TextField {...params} label="viewers" />}
    />

  </Box>




 </Box>
 <Box 
 style={{width:'100%',height:'220px',display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-between'}}>

<form action="" >
 <input 
 style={{width:'300px',border:'none', fontSize:'18px',outline:'none'}}
 onChange={e=>setinputmsg(e.target.value)} value={inputmsg} type="text" placeholder='What do you want to talk about?' />        
  </form>



{fileAsset?
<>  {Extension==='vidio' ? 
          // <ReactPlayer url={file} className='image-post-pub' />
       
          <video width="100%" height="100%" controls>
              <source src={fileAsset} type="video/mp4"/>
                <source src={fileAsset} type="video/ogg"/>
                </video>
               
           
          
       : 
       <img src={fileAsset} alt="fgf" className='image-post-pub' />
       }
</>:
<p></p>

}

 </Box>

 {/* Bottom */}

 <Box style={{
  display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between',
  width:"100%"}}>



       <Box style={{display:'flex',flexDirection:'row',alignItems:'flex-start',fontSize:"26px",gap:'15px',color:'gray'}}>
       
         <label onClick={()=>{setExtension('img')}}>  
                   <BsImageFill style={{cursor:'pointer'}}/>
                    <input type="file"
                    name='uplaodimg'
                    accept='image/*'
                    onChange={ uploadImage}
                       
               
                   style={{width:'0'}}/>
               </label>
               
               <label onClick={()=>{setExtension('vidio')}}> 
                   <AiFillYoutube style={{cursor:'pointer'}}/>
                    <input type="file"
                    name='uplaodimg'
                    accept='vidio/*'
                    onChange={uploadImage}
                   style={{width:'0'}}/>
               </label>










         <IoDocumentText style={{cursor:'pointer'}}/>
         <RiRedPacketFill style={{cursor:'pointer'}}/>
     </Box>

          <button
          disabled={!fileAsset && inputmsg===''}
           onClick={sendpost}
          style={{width:"70px",borderRadius:'50px',height:'35px',fontWeight:'600',cursor:'pointer'
         ,backgroundColor:'rgb(4, 113, 175)',border:'none',color:'white',fontSize:'18px' }}
          >Post</button>
  
        </Box>
        </Box>
      </Modal>
    </div>
  );
}
export default Modal1