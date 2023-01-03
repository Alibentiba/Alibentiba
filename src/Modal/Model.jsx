import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {modelOPen} from '../Re/Slice'
import './Modal.css'
import {db,storage} from "../firebaseConfig";
import { collection, getDocs ,addDoc} from "firebase/firestore";
import {deleteObject,getDownloadURL,ref,uploadBytesResumable,} from "firebase/storage";
import { IoMdClose } from 'react-icons/io';

const Model = () => {
  const modalstate =useSelector(state=>state.userStore.ModelState)
  const dispatch = useDispatch()
  const [imageAsset, setimageAsset] =useState(null);
  const [input,setinput]=useState('')

  const uploadImage = (e) => {
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `images/${Math.floor(Math.random() * 100)}-${imageFile?.name}`);
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
         setimageAsset(downloadURL);
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
      message:input,
      timeS:dat,
      image:imageAsset
     })
      setinput('')
    console.log('imge ',imageAsset)
  }





  return (
    <div className='Modal' style={{display:`${modalstate? 'flex' : 'none'}`}}>
      <div className='Modal-Top'>
        <p>Create a post  </p>
        <IoMdClose style={{cursor:'pointer'}} onClick={()=>{dispatch(modelOPen(!modalstate))}}/>
        </div>
        <img src="" alt="" />
        <div>
          <p>userName</p>
          <button>Anyone</button>
        </div>
        <input type="text" />






      <form>
            <input onChange={e=>setinput(e.target.value)} value={input} type="text" placeholder='Start a Post' />
              <button type='submit' onClick={sendpost}>Send</button>
            
            
                   <div >
                    <p className='text-gray-600 text-xl'>Click To uplaod img</p>
                     </div>

                    <input type="file"
                    name='uplaodimg'
                    accept='image/*'
                    onChange={uploadImage}
                    className='w-0 h-0'/>

               {imageAsset && <img src={imageAsset} alt="fdgfdg"/> }   
              <button >close</button>



               </form>    
 </div>
  )
}

export default Model