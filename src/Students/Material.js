import React from 'react'
import close from '../icons/icons8-close-94.png'
import MaterialTab from './MaterialTab'

const Material = ({setModel}) => {
  return (
<div className='fixed w-[70%] p-5 bg-light-gray h-[90vh]'>
               <div className='flex items-center justify-between'>
                   <h1 className='text-[30px] mb-5'>Learning Materials</h1>
                   <button className='text-[20px]' onClick={() => setModel(false)}><img src={close} alt='' className='w-5' /></button>
               </div>

               <MaterialTab />
         </div>
  )
}

export default Material