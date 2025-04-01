import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { productcontext } from '../Utils/Context'
import Loading from './Loading'
import axios from '../Utils/Axios'

const Home = () => {
  const [products]=useContext(productcontext);
  // console.log(products);

  const {search}=useLocation();
  const category=decodeURIComponent(search.split("=")[1]); 

  const[filteredproducts,setfilteredproducts]= useState(null);
  
  const getproductcategory=async()=>{
      try {
        const {data}= await axios.get(`/products/category/${category}`)
        setfilteredproducts(data);
      } catch (error) 
      {
        console.log(error);
      }
    
  }

  useEffect(()=>{
    // console.log(category);
    if (!filteredproducts || category=="undefined") setfilteredproducts(products)
    if (category!="undefined") {
      // getproductcategory();
        setfilteredproducts(products.filter(p=>p.category==category))
    
    }
  },[category,products])
  
  return (products ?
    <>
    
        <Nav />
     <div className='w-[85%] h-full  p-5 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto  '>

      {filteredproducts && filteredproducts.map((p,i)=>(<Link key={p.id} to={`/details/${p.id}`} className='card mr-3 mb-3 p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center'>
              <div className='w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 hover:scale-110' style={{
                backgroundImage:`url(${p.image})`
              }}>



              </div> 
              <h1 className='hover:text-blue-500'>{p.title}</h1>

          </Link>))}

          

         
      </div>
    </> :<Loading />
  )
}

export default Home
