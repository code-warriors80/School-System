import React from 'react'

import close from '../icons/icons8-close-94.png'

const ClassForm = ({setModel}) => {
  return (
    <div className='fixed w-[66%] p-5 bg-light-gray h-[90vh]'>
        <div className='flex items-center justify-between'>
            <h1 className='text-[20px]'>Add Class</h1>
            <button className='text-[20px]' onClick={() => setModel(false)}><img src={close} className='w-5' /></button>
        </div>
  </div>
  )
}

export default ClassForm