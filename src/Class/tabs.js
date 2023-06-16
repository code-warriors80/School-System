import React, {useState} from 'react'

const Tabs = () => {
               const [toggleState, setToggle] = useState(1);
               
               const toggleTab = (index) => {
                              setToggle(index);
               }
  return (
               <div>
               <div className='block-tabs flex mb-2 cursor-pointer'>
                              <div className={toggleState === 1 ? 'active-tab py-4 px-10' : 'tab bg-light-gray py-4 px-10'} onClick={() => toggleTab(1)}>Home</div>
                              <div className={toggleState === 2 ? 'active-tab py-4 px-10' : 'tab bg-light-gray py-4 px-10'}  onClick={() => toggleTab(2)}>Information</div>
                              <div className={toggleState === 3 ? 'active-tab py-4 px-10' : 'tab bg-light-gray py-4 px-10'}  onClick={() => toggleTab(3)}>Update Profile</div>
                              <div className={toggleState === 4 ? 'active-tab py-4 px-10' : 'tab bg-light-gray py-4 px-10'}  onClick={() => toggleTab(4)}>Settings</div>
               </div>

               <div className='content-tabs'>
                              <div className={toggleState === 1 ? ' content active-content' : 'tabs'}>
                                             <h1 className='text-2xl my-5'>Home</h1>
                                             <hr/>
                                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, tempora omnis fugit repudiandae 
                                                            laboriosam atque quibusdam nam vero magnam hic voluptate. Voluptate, doloribus. Temporibus ut 
                                                            assumenda rem harum! Doloremque, cupiditate?
                                             </p>
                              </div>

                              <div className={toggleState === 2 ? ' content active-content' : 'tabs'}>
                                             <h1 className='text-2xl my-5'>Class Information</h1>
                                             <hr/>
                                             <table className='w-[100%]'>
                                                            <tr>
                                                                           <th className='float-left py-3 text-[18px]'>Class</th>
                                                                           <td className='float-right py-3'>Pr-Nursery 1</td>
                                                            </tr>

                                                            <tr>
                                                                           <th className='float-left py-3 text-[18px]'>Number Of Pupils</th>
                                                                           <td className='float-right py-3'>20</td>
                                                            </tr>

                                                            <tr>
                                                                           <th className='float-left py-3 text-[18px]'>Class Prefect</th>
                                                                           <td className='float-right py-3'>Halima Auwal</td>
                                                            </tr>

                                                            <tr>
                                                                           <th className='float-left py-3 text-[18px]'>Class Teachers Contact</th>
                                                                           <td className='float-right py-3'>08116934763</td>
                                                            </tr>

                                                            <tr>
                                                                           <th className='float-left py-3 text-[18px]'>Fee's</th>
                                                                           <td className='float-right py-3'>N 45,000</td>
                                                            </tr>

                                                            <tr>
                                                                           <th className='float-left py-3 text-[18px]'>Subjects Offered</th>
                                                                           <td className='float-right py-3'>12</td>
                                                            </tr>
                                             </table>
                              </div>

                              <div className={toggleState === 3 ? ' content active-content' : 'tabs'}>
                                             <h1 className='text-2xl my-5'>Update Profile</h1>
                                             <hr/>
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
                                                                                          <label className='block mb-3'>DOB</label>
                                                                                          <input type='date' placeholder='Contact' className='bg-light-gray h-[50px] px-5 rounded-2xl w-full' name=''/>
                                                                           </div>    
                                                                           <div className='mb-5 w-[48%]'>
                                                                                          <label className='block mb-3'>Class</label>
                                                                                          <select className='bg-light-gray h-[50px] px-2 rounded-2xl w-full'>
                                                                                                         <option>Chose Class</option>
                                                                                                         <option>Pri-Nursery 1</option>
                                                                                                         <option>Pri-Nursery 1</option>
                                                                                          </select>
                                                                           </div>    
                                                            </div>
                                                            <div className='flex justify-between'>
                                                            <button className='bg-dark-purple text-white py-3 px-5 rounded-2xl mt-2'>Update Profile</button>
                                                            <button className='bg-red-500 text-white py-3 px-5 rounded-2xl mt-2'>Reset Password</button>
                                                            </div>
                                             </form>
                              </div>
                              <div className={toggleState === 4 ? ' content active-content' : 'tabs'}>
                                             <h1 className='text-2xl mt-5'>Settings</h1>
                                             <hr/>
                                                            <form className='w-full'>
                                                                           <h1 className='text-[20px] font-thin my-2'>Assign New Class Teacher/Prefect</h1>
                                                                           <div>
                                                                                          <label for="staffs" className='block mb-3'>Select Staff</label>
                                                                                          <select className='bg-light-gray h-[50px] px-2 mb-5 rounded-md w-full'>
                                                                                                         <option>Select Staff</option>
                                                                                                         <option>Mr Samuel Clement</option>
                                                                                                         <option>Mr Joshua Kingsley</option>
                                                                                          </select>
                                                                                          
                                                                           </div>

                                                                           <div>
                                                                                          <label for="staffs" className='block mb-3'>Select Student</label>
                                                                                          <select className='bg-light-gray h-[50px] px-2 rounded-md w-full'>
                                                                                                         <option>Select Student</option>
                                                                                                         <option>Samuel Clement</option>
                                                                                                         <option>Joshua Kingsley</option>
                                                                                          </select>
                                                                                          
                                                                           </div>
                                                                           <button className='bg-dark-purple w-full mt-5 py-3 text-white rounded-lg'>Assign</button>
                                                            </form>
                              </div>
               </div>
    </div>
  )
}

export default Tabs