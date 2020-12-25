import React , {useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Form} from 'react-bootstrap'
import '../styles/search.css'

const Bar =({handleChange})=> {
    
     
    return(
      <div className="container text-center">
      <ToastContainer/> 
      <Form.Control className="search" type="text" onChange={handleChange('Uname')} name="Uname" placeholder="Search your user here" />
      </div>
    )
}

export default Bar