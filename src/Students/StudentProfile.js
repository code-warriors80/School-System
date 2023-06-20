<<<<<<< HEAD
import React from 'react'
import dp from '../image/_DSC0541.JPG'
import {  FaSearch, FaBell, FaUser, FaMapMarked, FaUserGraduate } from 'react-icons/fa'    


const StudentProfile = () => {
=======
import React, {useState} from 'react'

import user from '../icons/icons8-male-user-94.png'
import bell from '../icons/icons8-bell-94.png'
import student from '../icons/icons8-student-male-94.png'
import map from '../icons/icons8-map-pinpoint-94.png'
import Tabs from './tabs'
import search from '../icons/icons8-search-94.png'
import result from '../icons/icons8-diploma-94.png'
import Material from './Material'

const StudentProfile = () => {
  const [model, setModel] = useState(false)
>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d
  return (
    <div className='w-full'>
                              <nav className='py-3 px-10 bg-dark-purple flex items-center justify-between'>
                              <div className="hidden lg:flex search--box bg-white lg:items-center w-[25%] gap-[5px] py-[3px] rounded-md  px-[12px] bg-light-gray">
<<<<<<< HEAD
                                             <i className="text-[1.2rem] pointer text-gray-800"><FaSearch /></i>
                                             <input type="text" name="search" id="" placeholder="Search" className='p-[10px] text-black w-full'/>
                              </div>
                              <div className='flex items-center'>
                              <FaBell className='mr-6 text-white text-[25px]'/>
                              <img src={dp} alt='' className='w-[50px] h-[50px] rounded-full border-2 border-dashed border-white p-1'/>
                              </div>
                              </nav>
                              <div className='flex items-start justify-between p-5'>
                                             <div className='bg-white w-[25%] text-center py-10 rounded-2xl shadow-lg'>
                                                            <img src={dp} alt='' className='w-[150px] h-[150px] rounded-full border-2 border-dashed border-dark-purple p-2 mx-auto'/>
=======
                                             <i className="text-[1.2rem] pointer text-gray-800"><img src={search} alt='' className='w-6'/></i>
                                             <input type="text" name="search" id="" placeholder="Search" className='p-[10px] text-black w-full'/>
                              </div>
                              <div className='flex items-center'>
                              <img src={bell} alt='' className='mr-6 w-8'/>
                              <img src={user} alt='' className='w-[50px] h-[50px] rounded-full border-2 border-dashed border-white p-1'/>
                              </div>
                              </nav>

                              {model === true&&(<Material setModel={setModel}/>)}

                              <div className='fixed bottom-10 right-20 gap-3'>
                                    <button onClick={() => {setModel(true)}} className='text-white bg-dark-purple p-4 rounded-full flex items-center justify-center text-[23px] mb-3'><img src={result} alt=''  className='w-10'/></button>
                            </div>
                            
                              <div className='flex items-start justify-between p-5'>
                                             <div className='bg-white w-[25%] text-center py-10 rounded-2xl shadow-lg'>
                                                            <img src={student} alt='' className='w-[150px] h-[150px] rounded-full border-2 border-dashed border-dark-purple p-2 mx-auto'/>
>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d
                                                            <h4 className='text-[20px] font-thin my-2'>Samuel Clement</h4>
                                                            <p className='text-dark-purple mb-5'>Pri-Nursery 1</p>
                                                            <table className='w-[80%] mx-auto profile'>
                                                                           <tr >
                                                                                          <th className='py-3 text-[18px] float-left'>Email</th>
                                                                                          <td className='py-3 text-[16px] float-right'>Muctar@gmail.com</td>
                                                                           </tr>
                                                                           <tr>
                                                                                          <th className='py-3 text-[18px] float-left'>Contact</th>
                                                                                          <td className='py-3 text-[16px] float-right'>08116934763</td>
                                                                           </tr>
                                                                           <tr>
<<<<<<< HEAD
                                                                                          <th className='py-3   float-left'>DOB</th>
                                                                                          <td className='py-3   float-right'>10/7/2003</td>
                                                                           </tr>
                                                            </table>
                                                            <button className='bg-color-danger w-[82%] py-3 rounded-2xl mt-2 text-white font-bold'>Suspend Student</button>
                                             </div>
                                             <div className='bg-white w-[45%] p-5 rounded-2xl shadow-lg'>
                                                            Accordions
=======
                                                                                          <th className='py-3   float-left'>Gender</th>
                                                                                          <td className='py-3   float-right'>Male</td>
                                                                           </tr>
                                                            </table>
                                                            <button className='border-2 border-solid border-color-danger text-color-danger hover:bg-color-danger hover:text-white w-[82%] py-3 rounded-2xl mt-2 font-bold'>Suspend Student</button>
                                             </div>
                                             <div className='bg-white w-[45%] p-5 rounded-2xl shadow-lg'>
                                                            <Tabs />
>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d
                                             </div>
                                             
                                             <div className='bg-white w-[22%] p-7 py-5 rounded-2xl shadow-lg'>
                                                  <h1 className='py-3 text-[20px]'>About Samuel Clement</h1>
                                                  <div>
<<<<<<< HEAD
                                                                    <p className='flex text-[16px] font-bold py-5'><FaUserGraduate className='mr-3'/> Student</p>
=======
                                                                    <p className='flex text-[16px] font-bold py-5'><img src={student} alt='' className=' w-5 mr-2'/> Student</p>
>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d
                                                                    <table className='w-full mini-profile'>
                                                                        <tr>
                                                                          <th className='float-left py-3 text-[18px]'>Class</th>
                                                                          <td className='float-right py-3 text-[16px]'>Pri-Nursery 1</td>
                                                                        </tr>
                                                                        <tr>
                                                                          <th className='float-left py-3 text-[18px]'>Section</th>
                                                                          <td className='float-right py-3 text-[16px]'>A</td>
                                                                        </tr>
                                                                        <tr>
                                                                          <th className='float-left py-3 text-[18px]'>Roll</th>
                                                                          <td className='float-right py-3 text-[16px]'>10</td>
                                                                        </tr>
                                                                    </table>
                                                  </div>

                                                  <div className='pt-0'>
<<<<<<< HEAD
                                                                  <h4 className='flex text-[16px] font-bold'><FaMapMarked className='mr-3'/> Location</h4>
=======
                                                                  <h4 className='flex text-[16px] font-bold mb-2'><img src={map} alt='' className='mr-6 w-5 mr-2'/> Location</h4>
>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d
                                                                  <p>Blk 35 MOQ Chindit Cantoonment</p>
                                                  </div>
                                             </div>
                              </div>
               </div>
  )
}

export default StudentProfile