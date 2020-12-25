import React, { useState, useEffect } from 'react';
import Bar from '../components/SearchBar'
import UserView from '../components/View'
import { ToastContainer, toast } from 'react-toastify';
import '../styles/Home.css'

const Home = () => {

   const [user,setUser] = useState({Uname:''})

   const [userdata,setUserdata] = useState([])

   const {Uname} = user

   const handleChange = name => e => {
     setUser({...user, [name]: e.target.value })
     console.log(user.Uname)
   }

 

          useEffect(() => {
               fetch(`https://api.github.com/users/${Uname}`, { 
                headers: {
                     'Accept' : 'application/vnd.github.v3+json'
                 }})
               .then(response => response.json()) 
               .then( data => {
                   setUserdata({data})
                   console.log(userdata.data.message)

               })     
               .catch((error) => {
                 toast.error("Oops! Could not reach GitHub");
                 console.log("Oops! We have an error", error);
               });

           },[user.Uname])
   
  
     return(
        <>
        <ToastContainer/>
         <Bar handleChange={handleChange}/>
         <div className="display">
         {userdata.data.id && user.Uname !== "" ? (
            
            <UserView profile={userdata.data} />
            
            
          ) : (
            <div className="no-data">
              No user Found! <br />
            </div>
          )}
          </div>
        </>
     )
}

export default Home