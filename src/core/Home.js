import React, { useState, useEffect } from 'react';
import Bar from '../components/SearchBar'
import UserView from '../components/View'
import { ToastContainer, toast } from 'react-toastify';
import '../styles/Home.css'

const Home = () => {

   const [user,setUser] = useState({Uname:''})

   const [userdata,setUserdata] = useState({
      login: "Nyamador",
id: 48738520,
node_id: "MDQ6VXNlcjQ4NzM4NTIw",
avatar_url: "https://avatars3.githubusercontent.com/u/48738520?v=4",
gravatar_id: "",
url: "https://api.github.com/users/Nyamador",
html_url: "https://github.com/Nyamador",
followers_url: "https://api.github.com/users/Nyamador/followers",
following_url: "https://api.github.com/users/Nyamador/following{/other_user}",
gists_url: "https://api.github.com/users/Nyamador/gists{/gist_id}",
starred_url: "https://api.github.com/users/Nyamador/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/Nyamador/subscriptions",
organizations_url: "https://api.github.com/users/Nyamador/orgs",
repos_url: "https://api.github.com/users/Nyamador/repos",
events_url: "https://api.github.com/users/Nyamador/events{/privacy}",
received_events_url: "https://api.github.com/users/Nyamador/received_events",
type: "User",
site_admin: false,
name: "Desmond ",
company: "@Velocity-Corp",
blog: "Nyamador.me",
location: "Ghana",
email: null,
hireable: null,
bio: "FullStack Engineer | Pluralsight Author",
twitter_username: "DesmondNyamador",
public_repos: 52,
public_gists: 8,
followers: 27,
following: 1,
created_at: "2019-03-19T23:34:18Z",
updated_at: "2020-07-29T11:45:10Z"
   })

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
                   console.log(data)
                   setUserdata(data)
                   console.log(userdata)
                   console.log(userdata.id)

               })     
               .catch((error) => {
                 toast.error("Oops! Could not reach GitHub");
                 console.log("Oops! We have an error", error);
               });

           },[Uname])
   
  
     return(
        <>
        <ToastContainer/>
         <Bar handleChange={handleChange}/>
         <div className="display container">
         {userdata.id  ? (
            
            <UserView avatar={userdata} local={true}/>
            
            
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