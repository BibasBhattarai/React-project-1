import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { productcontext } from '../Utils/Context';

const Edit = () => {
    const[products,setproducts]=useContext(productcontext);
  
     const Navigate= useNavigate();
     const{id}=useParams();
     const[product,setproduct]=useState({
        title:"",
        description:"",
        image:"",
        price:"",
        category:"",
     });

     const Chandgehandler=(e)=>{
        // console.log(e.target.name,e.target.value);
        setproduct({...product,[e.target.name]:e.target.value});
     }
    
    
    useEffect(()=>{
        setproduct(products.filter((p)=>p.id==id)[0]);
    },[id])
    // console.log(product);


     const Addproducthandler=(e)=>{
         e.preventDefault();
         
         if (
             product.title.trim().length<5 || 
             product.image.trim().length<5 || 
             product.category.trim().length<5 || 
             product.price.trim().length<1 || 
             product.description.trim().length<5 ){
               alert("Each and ever field must contains four letter");
               return ;
             }
         
             const pi=products.findIndex((p)=>p.id==id);

             const copyData=[...products];
             copyData[pi]={...products[pi],...product}
         
             
         setproducts(copyData)
        //  localStorage.setItem("products", 
             JSON.stringify("products",JSON.stringify(copyData));
         Navigate(-1);
     };
    
  
  
  
    return (

    <form onSubmit={Addproducthandler} className='p-[5%] w-screen h-screen flex flex-col items-center'>
        <h1 className=' w-1/2 text-3xl mb-5 '>Edit Product</h1>

        <input className='border text-1xl bg-zinc-200 rounded w-1/2 p-2 mb-2' type="url" placeholder='Image url'
            name='image'
            onChange={Chandgehandler}
            value={product && product.image}
        
         />

        <input className='border text-1xl bg-zinc-200 rounded w-1/2 p-2 mb-2' type="text" placeholder='Title'
            name='title'
            onChange={Chandgehandler}
            value={product && product.title}
        
         />

        <div className='w-1/2 flex justify-between'>
            <input className='border text-1xl bg-zinc-200 rounded w-[48%] p-2 mb-2' type="text" placeholder='category'
            name='category'
            onChange={Chandgehandler}
            value={ product && product.category}
        
            />

            <input className='border text-1xl bg-zinc-200 rounded w-[48%] p-2 mb-2' type="number" placeholder='price'
            name='price'
            onChange={Chandgehandler}
            value={product && product.price}
        
            />
        </div>

        <textarea className='border text-1xl bg-zinc-200 rounded w-1/2 p-2 mb-2 ' rows="10" placeholder='Enter product description here...' 
        name='description'
        onChange={Chandgehandler}
        value={product && product.description}
        
        
        ></textarea>
        <div className='w-1/2'>
            <button className='py-2 px-5 border border-blue-200 text-blue-300'>Edit Product</button>

        </div>


    </form>
  )
}

export default Edit
