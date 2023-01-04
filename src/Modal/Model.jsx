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

  const [inputmsg, setinputmsg] = useState('');
    const [category, setcategorie] = useState();
    const [isLaoding, setisLaoding] = useState(false);
    const [imageAsset, setimageAsset] = useState(null);
    const [calories, setcalories] = useState('');
    const [price, setprice] = useState('');
  
 
     const uploadImage = (e) => {
     const imageFile = e.target.files[0];
     const storageRef = ref(storage, `images/${Math.floor(Math.random() * 100)}-${imageFile.name}`);
     const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setisLaoding(!isLaoding)

      },
      (error) => {
        console.log(error);
    
        setTimeout(4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setimageAsset(downloadURL);
          if(imageAsset){setisLaoding(false)}

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
                    image:imageAsset
                   })
                    setinputmsg('')
                    dispatch(modelOPen(!model1))
                    setimageAsset(null)

                }





      

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
  <button 
  style={{width:"90px",height:'35px',borderRadius:'50px',border:'none',fontSize:'18px'}}>
    Anyone</button>
  </Box>




 </Box>
 <Box 
 style={{width:'100%',height:'220px',display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-between'}}>

<form action="" >
 <input 
 style={{width:'300px',border:'none', fontSize:'18px',outline:'none'}}
 onChange={e=>setinputmsg(e.target.value)} value={inputmsg} type="text" placeholder='What do you want to talk about?' />        
  </form>
{imageAsset&& <img src={imageAsset} alt="fdg" style={{width:"100%",height:'180px',objectFit:'cover'}} /> }
 </Box>

 {/* Bottom */}

 <Box style={{
  display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'space-between',
  width:"100%"}}>



       <Box style={{display:'flex',flexDirection:'row',alignItems:'flex-start',fontSize:"26px",gap:'15px',color:'gray'}}>
       
         <label>  
                   <BsImageFill style={{cursor:'pointer'}}/>
                    <input type="file"
                    name='uplaodimg'
                    accept='image/*'
                    onChange={uploadImage}
                   style={{width:'0'}}/>
               </label>






         <AiFillYoutube style={{cursor:'pointer'}}/>
         <IoDocumentText style={{cursor:'pointer'}}/>
         <RiRedPacketFill style={{cursor:'pointer'}}/>
     </Box>

          <button
          disabled={!imageAsset && inputmsg===''}
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