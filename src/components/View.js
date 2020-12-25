import React , {useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import '../styles/view.css'


const View =(avatar)=> {
    return(
      <>
      {/* Avatar */}
      <div>
        <img src={avatar.avatar_url} alt={avatar.name} />
      </div>
      {/* Info */}
      <div className="container">
        {/* Name */}
        <div>Name: {avatar.name}</div>
        {/* Github Link */}
        <div>
          GitHub Link:{" "}
          <a href={avatar.html_url} target="_blank" rel="noopener noreferrer">
            {avatar.html_url}
          </a>
        </div>
        {/* email */}
        <div>Email: {avatar.Email}</div>
        {/* Location */}
        <div>Location:{avatar.location}</div>
        {/* Public repo */}
        <div>Public repos: {avatar.public_repos}</div>
        {/* Info */}
        <div>Bio: {avatar.bio}</div>
      </div>
    </>
    )
}

export default View