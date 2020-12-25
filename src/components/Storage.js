import React , {useEffect,useState} from 'react'
import '../styles/store.css'
import { ToastContainer, toast } from 'react-toastify';
import UserView from './View'

var ls = require('local-storage');


  export const DELstorage =({avatar})=>{
    if (typeof(Storage) !== "undefined") {
      // Store
        ls.remove('users')
        toast.success("Successfully removed from local storage")
  } else {
      toast.error("Sorry, your browser does not support Web Storage...");
  }
  } 


export const Storage =()=> {
    const [avatar,setAvatar] = useState({})
    const data = ls.get('users')
    

    useEffect(()=>{
        setAvatar(data)
    },[data])

   return(
       <>
       <ToastContainer/>
       <div className="display container">
         {avatar && avatar.id  ? (
            
            <UserView avatar={avatar} local={false}/>
            
            
          ) : (
            <div className="no-data">
              No user Found! <br />
            </div>
          )}
          </div>
       </>
   )
}
