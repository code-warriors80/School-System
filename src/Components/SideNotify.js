import React from 'react'
import { Link } from 'react-router-dom'
import dp from '../image/_DSC0541.JPG'

const SideNotify = () => {
  return (
<div className='w-[23%]'>
          {/*Active Users */}
          <div className='rounded-2xl bg-white p-3 shadow-lg'>
            {/* HEADER */}
            <div className='flex items-center justify-between p-3'>
                <h2 className='font-bold text-lg text-dark-purple'>Active Users</h2>
                <span className='bg-dark-purple text-white w-[30px] h-[30px] flex items-center justify-center text-sm rounded-full p-1'>5</span>
            </div>
            {/* HEADER END */}

            <div>
                {/* USER */}  
                <Link className='flex items-center justify-between hover:bg-gray-100 rounded-2xl py-3 px-3 border-2 border-red-300'>
                    <div className='flex items-center gap-5'>
                      <img src={dp} alt='' className='w-[55px] h-[55px] rounded-full border-2 border-dashed border-dark-brown p-1'/>
                        <h4 className='text-dark-purple font-bold text-sm'>Mrs Joy Bamidele</h4>
                    </div>
                    <p className='text-[12px]'>Active</p>
                </Link>

                <Link className='flex items-center justify-between hover:bg-gray-100 rounded-2xl py-3 px-3 border-2 border-red-300'>
                    <div className='flex items-center gap-5'>
                      <img src={dp} alt='' className='w-[55px] h-[55px] rounded-full border-2 border-dashed border-dark-brown p-1'/>
                        <h4 className='text-dark-purple font-bold text-sm'>Mrs Dorcas Shehu</h4>
                    </div>
                    <p className='text-[12px]'>Active</p>
                </Link>

                <Link className='flex items-center justify-between hover:bg-gray-100 rounded-2xl py-3 px-3 border-2 border-red-300'>
                    <div className='flex items-center gap-5'>
                      <img src={dp} alt='' className='w-[55px] h-[55px] rounded-full border-2 border-dashed border-dark-brown p-1'/>
                        <h4 className='text-dark-purple font-bold text-sm'>Mr Chris Tosin</h4>
                    </div>
                    <p className='text-[12px]'>Active</p>
                </Link>
                {/* USER END */}  
            </div>
          </div>
          {/*Active Users End */}

          <div className='rounded-2xl bg-white p-3 mt-5 shadow-lg'>
            <div className='flex items-center justify-between p-3'>
                            <h2 className='font-bold text-lg text-dark-purple'>Recent Transaction</h2>
            </div>

          </div>
        </div>
  )
}

export default SideNotify