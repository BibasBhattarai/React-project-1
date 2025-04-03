import axios from '../Utils/Axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading'
import { productcontext } from '../Utils/Context'

const Details = () => {
  const navigate=useNavigate();
  const[product,setproduct]=useContext(productcontext);
  const[products,setproducts]  =useState(null)
  const{id}= useParams();
  
  
  // const getproducts=async()=>{
  //   try {
  //     const {data}=await axios.get(`products/${id}`);
  //     setproducts(data);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
 
  useEffect(()=>{
    if(!products){
      setproducts(product.filter((p)=>p.id==id)[0]);
    }
    // getproducts();
  },[]);


  const productdeletehandler=()=>{
     const filterproducts=product.filter((p)=>p.id!==id);
     setproduct(filterproducts);
     localStorage.setItem("products",JSON.stringify(filterproducts));
     navigate("/")
  }
  
  return products ? ( 
    <div className='w-[70%] h-full justify-between items-center m-auto p-[10%] flex  '>
        <img className='h-[80%] w-[40%] object-contain' src={`${products.image}`} alt="" />

        <div className='content w-[50%] '>
          <h1 className='text-3xl'>{products.title}</h1>
          <h3 className='text-zinc-400 my-5'>{products.category}</h3>
          <h2 className='text-red-300 mb-3'>${products.price}</h2>
          <p className='mb-[5%]'>{products.description}</p>
          <Link to={`/edit/${products.id}`}  className='py-2 px-5 mr-[5%] rounded-md border border-blue-200 text-blue-400' >Edit</Link>
          <button onClick={()=>productdeletehandler(product.id)} className='py-2 px-5 border rounded-md  border-red-200 text-red-400'>Delete</button>  

        </div>

    </div>
  ) :<Loading/>
}

export default Details
