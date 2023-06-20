import React from 'react'

import MaterialTabs from './MaterialTabs'

// ICONS 
import close from '../icons/icons8-close-94.png'

const Materials = ({setModel}) => {
  return (
          <div className='fixed w-[70%] p-5 bg-light-gray h-[90vh]'>
               <div className='flex items-center justify-between'>
                   <h1 className='text-[30px] mb-5'>Learning Materials</h1>
                   {/* CLOSE MODEL BUTTON */}
                   <button className='text-[20px]' onClick={() => setModel(false)}><img src={close} alt='' className='w-5' /></button>
                   {/* END CLOSE MODEL BUTTON */}
               </div>

               <MaterialTabs />
         </div>
  )
}

export default Materials