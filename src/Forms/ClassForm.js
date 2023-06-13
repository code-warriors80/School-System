import React from 'react'
import { FaTimes } from 'react-icons/fa'

const ClassForm = ({setModel}) => {
  return (
    <div className='fixed w-[66%] p-5 bg-light-gray h-[90vh]'>
        <div className='flex items-center justify-between'>
            <h1 className='text-[20px]'>Add Class</h1>
            <button className='text-[20px]' onClick={() => setModel(false)}><FaTimes /></button>
        </div>
  </div>
  )
}

export default ClassForm