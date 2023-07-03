import React from 'react'
import successicon from '../icons/icons8-verified-account-94.png'
import erroricon from '../icons/icons8-close-94.png'

const Response = ({success}) => {
  return (
    <div className='absolute w-[100%] h-[100vh] flex items-center justify-center left-0 top-0 notify '>
               {success ? 
                              <div className='bg-white w-[20%] py-5 rounded-2xl shadow-2xl'>      
                                             <img src={successicon} alt='' className='mx-auto'/>
                                             <h1 className='text-center mt-6 text-2xl text-green-500'>{success}</h1>
                              </div>
               :
                <></>
               }            
    </div>
  )
}

export default Response