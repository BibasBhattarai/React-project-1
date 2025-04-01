import React, { useContext, useState } from 'react'
import { productcontext } from '../Utils/Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
const Create = () => {
    
    const Navigate= useNavigate();
    const[products,setproducts]=useContext(productcontext);
    const[title,settitle]=useState("");
    const[image,setimage]=useState("");
    const[category,setcategory]=useState("");
    const[price,setprice]=useState("");
    const[description,setdescription]=useState("");


    const Addproducthandler=(e)=>{
        e.preventDefault();
        
        if (
            title.trim().length<5 || image.trim().length<5 || category.trim().length<5 || 
            price.trim().length<1 || description.trim().length<5 ){
              alert("Each and ever field must contains four letter");
              return ;
            }
        
        
        
        const product={
            id:nanoid(),
            image,
            title,
            category,
            price,
            description
        };
        setproducts([...products,product])
        localStorage.setItem("products", 
            JSON.stringify([...products,product]));
        Navigate("/");
    }

   


  return (
    <form onSubmit={Addproducthandler} className='p-[5%] w-screen h-screen flex flex-col items-center'>
        <h1 className=' w-1/2 text-3xl mb-5 '>Add New Product</h1>

        <input className='border text-1xl bg-zinc-200 rounded w-1/2 p-2 mb-2' type="url" placeholder='Image url'
            onChange={(e)=>setimage(e.target.value)}
            value={image}
        
         />

        <input className='border text-1xl bg-zinc-200 rounded w-1/2 p-2 mb-2' type="text" placeholder='Title'
            onChange={(e)=>settitle(e.target.value)}
            value={title}
        
         />

        <div className='w-1/2 flex justify-between'>
            <input className='border text-1xl bg-zinc-200 rounded w-[48%] p-2 mb-2' type="text" placeholder='category'
            onChange={(e)=>setcategory(e.target.value)}
            value={category}
        
            />

            <input className='border text-1xl bg-zinc-200 rounded w-[48%] p-2 mb-2' type="number" placeholder='price'
            onChange={(e)=>setprice(e.target.value)}
            value={price}
        
            />
        </div>

        <textarea className='border text-1xl bg-zinc-200 rounded w-1/2 p-2 mb-2 ' rows="10" placeholder='Enter product description here...' 
        onChange={(e)=>setdescription(e.target.value)}
        value={description}
        
        
        ></textarea>
        <div className='w-1/2'>
            <button className='py-2 px-5 border border-blue-200 text-blue-300'>Add new product</button>

        </div>


    </form>
  )
}

export default Create
