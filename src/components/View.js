import React , {useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import '../styles/view.css'


const View =({avatar,local})=> {

    const check =(local)=>{
       if (local) {
        return(
           <button onClick={localStorage} className="btn btn-warning">Save</button>
        )       
     } else {
       return null
     } 
    }

    const localStorage =()=>{

    }

    return(
      <>
      <ToastContainer/>
      <div className="avatar container text-center text-light">
       <div className="row m-auto">
      {/* Avatar */}
      <h2>{avatar.message}</h2>
      <div className="col-sm-3 dp">
        <img src={avatar.avatar_url} alt={avatar.name} />
      </div>
      {/* Info */}
      <div className="col-sm-6 text-left info">
        {/* Name */}
        <div className="name">Name: {avatar.name}</div>
        {/* Github Link */}
        <div className="link">
          GitHub Link:{" "}
          <a href={avatar.html_url} target="_blank" rel="noopener noreferrer">
            {avatar.html_url}
          </a>
        </div>
        {/* email */}
        <div className="mail">Email: {avatar.email}</div>
        {/* Location */}
        <div className="loc">Location:{avatar.location}</div>
        {/* Public repo */}
        <div className="repo">Public repos: {avatar.public_repos}</div>
        {/* Info */}
        <div className="bio">Bio: {avatar.bio}</div>
      </div>
      {check(local)}
      </div>
    </div>
    </>
    )
}

export default View