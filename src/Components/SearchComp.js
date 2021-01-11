import React from 'react'
import { Input } from 'antd';


const { Search } = Input;


function SearchComp() {
    
   const handleChange = (value) => {
        console.log(value.target.value)
      };


    return (
        
           <Search
      

    )
}


export default SearchComp;