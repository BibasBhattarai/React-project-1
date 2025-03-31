import React from 'react'

const Nav = () => {
  return (
    <>
        <nav className='w-[15%] h-full bg-zinc-50 flex flex-col  items-center pt-5'>
          <a className='py-2 px-5 border border-blue-200 text-blue-300' href="/create">Add new product
          </a>
          <hr className='my-3 w-[80%]' />
          <h1 className='text-2xl w-[80%] mb-3'>Category</h1>
          <ul className='w-[80%]'>
            <li className='mb-3 flex items-center '> 
            <span className='w-[15px] h-[15px] bg-blue-200 rounded-full mr-2'></span>{""}
            Cat 1</li>

            <li className='mb-3 flex items-center '> 
            <span className='w-[15px] h-[15px] bg-red-200 rounded-full mr-2'></span>{""}
            Cat 2</li>

            <li className='mb-3 flex items-center '> 
            <span className='w-[15px] h-[15px] bg-green-200 rounded-full mr-2'></span>{""}
            Cat 3</li>
          </ul>
        </nav>
        </>
  )
}

export default Nav
