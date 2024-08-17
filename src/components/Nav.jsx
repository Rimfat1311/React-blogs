import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-between bg-gray-600 text-white p-8 cursor-pointer'>
        <p>logo</p>
        <ul className='flex p space-x-5 '>
            <li className='flex list-none'>HOME</li>
            <li>BLOGS</li>
            <li>CREAT BLOGS</li>

        </ul>
        <p>search</p>

    </div>
  )
}

export default Nav