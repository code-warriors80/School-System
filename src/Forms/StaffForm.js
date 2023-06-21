import React from 'react'

import close from '../icons/icons8-close-94.png'

const StaffForm = ({setModel}) => {
  return (
    <div className='scroll fixed w-[66%] p-5 bg-light-gray h-[92vh] overflow-scroll'>
        <div className='flex items-center justify-between'>
            <h1 className='text-[20px]'>Add Staff</h1>
            <button className='text-[20px]' onClick={() => setModel(false)}><img src={close} alt='' className='w-5' /></button>
        </div>

        <form className='mt-10 mx-auto'>
                                                <div className='lg:flex lg:items-center lg:justify-between mb-3'>
                                                            <div className='w-[48%]'>
                                                                               <label className='block text-[14px]'>Title</label>
                                                                               <select name='position' className='w-full h-[50px] my-2 px-2 rounded-md text-black'>
                                                                                    <option>Set Title</option>
                                                                                    <option value="principal ">Mr</option>
                                                                                    <option value="vice principal">Mrs</option>
                                                                                    <option value="director of studies">Miss</option>
                                                                              </select>
                                                            </div>
                                                            <div className='w-[48%]'>
                                                                  <label className='block text-[14px]'>SurName</label>
                                                                  <input type='text' name='surname' placeholder='SurName'  className='w-full h-[50px] my-2 px-5 text-black rounded-md' />
                                                            </div>
                                                </div>

                                                <div className='lg:flex lg:items-center lg:justify-between mb-3'>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>FirstName</label>
                                                                           <input type='text' name='firstname' placeholder='First Name' className='w-full h-[50px] my-2 px-5 text-black rounded-md' />
                                                            </div>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>LastName</label>
                                                                           <input type='text' name='lastname' placeholder='LastName' className='w-full h-[50px] my-2 px-5 text-black rounded-md' />
                                                            </div>
                                                </div>

                                                <div className='lg:flex lg:items-center lg:justify-between mb-3'>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>Email</label>
                                                                           <input type='text' name='email' placeholder='Email' className='w-full h-[50px] my-2 px-5 text-black rounded-md' />
                                                            </div>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>Gender</label>
                                                                           <select name='gender' className='w-full h-[50px] my-2 px-2 rounded-md text-black' >
                                                                              <option>Select Gender</option>
                                                                              <option value='male'>Male</option>
                                                                              <option value='female'>Female</option>
                                                                        </select>
                                                            </div>
                                                </div>

                                                <div className='lg:flex lg:items-center lg:justify-between mb-3'>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>Contact</label>
                                                                           <input type='text' name='contact' placeholder='Contact' className='w-full h-[50px] my-2 text-black px-5 rounded-md' />
                                                            </div>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>Address</label>
                                                                           <input type='text' name='address' placeholder='Address' className='w-full h-[50px] my-2 px-5 text-black rounded-md' />
                                                            </div>
                                                </div>

                                                  <div className='lg:flex lg:items-center lg:justify-between mb-3'>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>State</label>
                                                                           <input type='text' name='state' placeholder='State' className='w-full h-[50px] my-2 px-5 text-black rounded-md'/>
                                                            </div>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>City</label>
                                                                           <input type='text' name='city' placeholder='City' className='w-full h-[50px] my-2 px-5 text-black rounded-md' />
                                                            </div>
                                                </div>

                                                <div className='lg:flex lg:items-center lg:justify-between mb-3'>
                                                                  <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>Position</label>
                                                                           <select name='position' className='w-full h-[50px] my-2 px-2 rounded-md text-black'>
                                                                                    <option>Set Position</option>
                                                                                    <option value="principal ">Principal</option>
                                                                                    <option value="vice principal">Vice Principal</option>
                                                                                    <option value="director of studies">Director Of Studies</option>
                                                                                    <option value="human resource">Human Resource</option>
                                                                              </select>
                                                            </div>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>Role</label>
                                                                           <select name='position' className='w-full h-[50px] my-2 px-2 rounded-md text-black'>
                                                                                    <option>Set Role</option>
                                                                                    <option value="">Admin</option>
                                                                                    <option value="">C_Teacher</option>
                                                                                    <option value="">S_Teacher</option>
                                                                              </select>
                                                            </div>
                                                </div>

                                                <button className=' bg-dark-purple text-white py-5 px-16 rounded-md mb-5' >Add Staff</button>
        </form>
  </div>
  )
}

export default StaffForm