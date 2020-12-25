import React , {useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Form,Button} from 'react-bootstrap'
import '../styles/search.css'
import axios from 'axios'

const Bar =()=> {
    
    const [user,setUser] = useState({Uname:''})

    const [userdata,setUserdata] = useState([])

    const {Uname} = user

    const handleChange = name => e => {
      setUser({...user, [name]: e.target.value })
      console.log(user.Uname)
    }

    const handleSubmit =()=>e=>{
      e.preventDefault()
      LoadData(user)
    }
      
      const LoadData=(user) => {
       axios.get(`https://api.github.com/users/${user.Uname}`)
            .then(res => {
                const { data } =res;
                console.log({data})
                setUserdata(data);
                console.log(userdata)
            })
            .catch((error) => {
              toast.error("Oops! Could not reach GitHub");
              console.log("Oops! We have an error", error);
            });
    }


    // useEffect(() => {
    //    LoadData()
      
    // }, [])
     
    return(
      <>
      <ToastContainer/> 
      <Form onSubmit={handleSubmit()}>  
      <Form.Group controlId="formBasicName">
      <Form.Control type="text" onChange={handleChange('Uname')} value={Uname} placeholder="Type User " />
      </Form.Group>
      <Button className="login25 btn-warning" type="submit">
      Submit
      </Button>
      </Form>
 
      </>
    )
}

export default Bar