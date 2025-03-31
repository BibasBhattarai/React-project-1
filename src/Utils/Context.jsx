import axios from './Axios';
import React, { createContext, useEffect, useState } from 'react'

export const productcontext=createContext();
const Context = (props) => {
  
  const[products,setproducts]= useState(null);
  
    const getproducts=async()=>{
        try {
            const {data}=await axios("/products");     // axios("/products") sends a request to get data from the /products endpoint (URL). ,, await tells JavaScript to wait until the data is received before moving to the next line.,,,, data holds the actual product information.
            setproducts(data);                         // now the products will hold the data of products coming from axios
        } catch (error) {

        console.log(error)
            
        }
    }


useEffect(()=>{
    getproducts();
   
},[])

    return (
    <productcontext.Provider value={[products,setproducts]}> 
        {props.children}
    </productcontext.Provider>
  )
}

export default Context
