import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = ({type,value,handleChange}) => {
  return (
    <div>     
        <FaSearch/>
        <input 
            type = {type}
            value = {value}
            onChange = {handleChange}
            placeholder= 'Search here...'
        
        />
           
    </div>
  )
}

export default Search