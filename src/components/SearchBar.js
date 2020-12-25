import React , {useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Form,Button} from 'react-bootstrap'
import '../styles/search.css'
import axios from 'axios'
import rateLimit from 'axios-rate-limit';

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
  
    const http = rateLimit(axios.create(), { maxRequests: 100, perMilliseconds: 1000, maxRPS: 100 })
    http.getMaxRPS() // 2
      
      const LoadData= (user) => {
       fetch(`https://api.github.com/users/malaysrivastava`)
            .then(res => {
                const { data } = res;
                console.log({data})
                setUserdata(data);
                console.log(userdata)
            })
            // .catch((error) => {
            //   toast.error("Oops! Could not reach GitHub");
            //   console.log("Oops! We have an error", error);
            // });
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