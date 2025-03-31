import React, { useContext } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { productcontext } from '../Utils/Context'
import Loading from './Loading'

const Home = () => {
  const [products]=useContext(productcontext);
  // console.log(products);
  
  return (products ?
    <>
    
        <Nav />
     <div className='w-[85%] h-full  p-5 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto  '>

      {products.map((p,i)=>(<Link key={p.id} to={`/details/${p.id}`} className='card mr-3 mb-3 p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center'>
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
