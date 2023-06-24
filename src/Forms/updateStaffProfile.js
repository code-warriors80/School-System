import React from 'react'

const UpdateStaffProfile = ({toggleState}) => {
  return (
<div className={toggleState === 3 ? ' content active-content' : 'tabs'}>
                                             <h1 className='text-2xl my-5'>Update Profile</h1>
                                             <hr/>
                                             {/* UPDATE USER DETAIL FORM */}
                                             <form className='w-full'>
                                                            <div className='flex gap-3 justify-between'>
                                                                           <div className='mb-5 w-[48%]'>
                                                                                          <label className='block mb-3'>SurName</label>
                                                                                          <input type='password' placeholder='SurName' className='bg-light-gray h-[50px] px-5 rounded-2xl w-full' name=''/>
                                                                           </div>    
                                                                           <div className='mb-5 w-[48%]'>
                                                                                          <label className='block mb-3'>First Name</label>
                                                                                          <input type='password' placeholder='First Name' className='bg-light-gray h-[50px] px-5 rounded-2xl w-full' name=''/>
                                                                           </div>    
                                                            </div>
                                                            <div className='flex gap-3 justify-between'>
                                                                           <div className='mb-5 w-[48%]'>
                                                                                          <label className='block mb-3'>Last Name</label>
                                                                                          <input type='password' placeholder='Last Name' className='bg-light-gray h-[50px] px-5 rounded-2xl w-full' name=''/>
                                                                           </div>    
                                                                           <div className='mb-5 w-[48%]'>
                                                                                          <label className='block mb-3'>Email</label>
                                                                                          <input type='password' placeholder='Email' className='bg-light-gray h-[50px] px-5 rounded-2xl w-full' name=''/>
                                                                           </div>    
                                                            </div>

                                                            <div className='flex gap-3 justify-between'>
                                                                           <div className='mb-5 w-[48%]'>
                                                                                          <label className='block mb-3'>Contact</label>
                                                                                          <input type='password' placeholder='Contact' className='bg-light-gray h-[50px] px-5 rounded-2xl w-full' name=''/>
                                                                           </div>    
                                                                           <div className='mb-5 w-[48%]'>
                                                                                          <label className='block mb-3'>Address</label>
                                                                                          <input type='password' placeholder='Address' className='bg-light-gray h-[50px] px-5 rounded-2xl w-full' name=''/>
                                                                           </div>    
                                                            </div>

                                                            <div className='flex gap-3 justify-between'>
                                                                           <div className='mb-5 w-[48%]'>
                                                                                          <label className='block mb-3'>City</label>
                                                                                          <input type='password' placeholder='City' className='bg-light-gray h-[50px] px-5 rounded-2xl w-full' name=''/>
                                                                           </div>    
                                                                           <div className='mb-5 w-[48%]'>
                                                                                          <label className='block mb-3'>State</label>
                                                                                          <input type='password' placeholder='State' className='bg-light-gray h-[50px] px-5 rounded-2xl w-full' name=''/>
                                                                           </div>    
                                                            </div>

                                                            <div className='flex gap-3 justify-between'>
                                                                           <div className='mb-5 w-[48%]'>
                                                                                          <label className='block mb-3'>DOB</label>
                                                                                          <input type='date' placeholder='Contact' className='bg-light-gray h-[50px] px-5 rounded-2xl w-full' name=''/>
                                                                           </div>    
                                                                           <div className='mb-5 w-[48%]'>
                                                                                          <label className='block mb-3'>Position</label>
                                                                                          <select className='bg-light-gray h-[50px] px-2 rounded-2xl w-full'>
                                                                                                         <option>Chose Position</option>
                                                                                                         <option>Principal</option>
                                                                                                         <option>Director Of Studies</option>
                                                                                          </select>
                                                                           </div>    
                                                            </div>
                                                            <div className='flex justify-between'>
                                                            <button className='bg-dark-purple text-white py-3 px-5 rounded-2xl mt-2'>Update Profile</button>
                                                            <button className='bg-red-500 text-white py-3 px-5 rounded-2xl mt-2'>Reset Password</button>
                                                            </div>
                                             </form>
                                             {/* END UPDATE USER DETAIL FORM */}
                              </div>
  )
}

export default UpdateStaffProfile