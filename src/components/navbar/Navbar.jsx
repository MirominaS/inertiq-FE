import React,{useState} from 'react'
import Logo from '../logo/Logo'
import Dropdown from '../dropdown/Dropdown'
import { useEffect } from 'react';

const Navbar = () => {
    const [options,setOptions] = useState([]);
    const [streams,setStreams] = useState(1);
    useEffect(()=>{
        setOptions([
            {value : 1,label : 'Physical Science'},
            {value : 2,label : 'Biological Science'},
            {value : 3,label : 'Technology'}
        ])
    },[])
    const handleStreamChange = (str) =>{
        setStreams(str.target.value)
    }
  return (
    <>
        <div>
            <Logo height='60px'/>
        </div>
        <div>
            <Dropdown label={"Streams"} options={options} handleChange={handleStreamChange} value={streams} minWidth={10}/>
        </div>
        
    </>
  )
}

export default Navbar