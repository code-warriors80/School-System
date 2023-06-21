<<<<<<< HEAD
import React from 'react'
import dp from '../image/_DSC0541.JPG'
import {  FaSearch, FaBell, FaUser, FaMapMarked } from 'react-icons/fa'    

const StaffProfile = () => {
  return (
               <div className='w-full'>
                              <nav className='py-3 px-10 bg-dark-purple flex items-center justify-between'>
                              <div className="hidden lg:flex search--box bg-white lg:items-center w-[25%] gap-[5px] py-[3px] rounded-md  px-[12px] bg-light-gray">
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
                                                            <h4 className='text-[20px] font-thin my-2'>Mrs Adedolapo Aboaba</h4>
                                                            <p className='text-dark-purple mb-5'>Principal</p>
=======
import React,{useState} from 'react'

// ICONS
import user from '../icons/icons8-male-user-94.png'
import bell from '../icons/icons8-bell-94.png'
import man from '../icons/icons8-user-male-94.png'
import map from '../icons/icons8-map-pinpoint-94.png'
import Tabs from './tabs'
import search from '../icons/icons8-search-94.png'
import lesson from '../icons/icons8-bookmark-94.png'
import Materials from './Materials'

const StaffProfile = () => {

  const [model, setModel] = useState(false);

  return (
               <div className='w-full'>
                              {/* TOP NAV */}
                                    <nav className='py-3 px-10 bg-dark-purple flex items-center justify-between'>
                                          <div className="hidden lg:flex search--box bg-white lg:items-center w-[25%] gap-[5px] py-[3px] rounded-md  px-[12px] bg-light-gray">
                                                      <i className="text-[1.2rem] pointer text-gray-800"><img src={search} alt='' className='w-6'/></i>
                                                      <input type="text" name="search" id="" placeholder="Search" className='p-[10px] text-black w-full'/>
                                          </div>
                                          <div className='flex items-center'>
                                          <img src={bell} alt='' className='mr-6 w-8'/>
                                          <img src={user} alt='' className='w-[50px] h-[50px] rounded-full border-2 border-dashed border-white p-1'/>
                                          </div>
                                    </nav>
                              {/* END TOP NAV */}

                              {/* MODEL */}
                                    {model === true && (<Materials setModel={setModel}/>)}
                              {/* END MODEL */}

                              {/* MODEL BUTTON */}
                              <div className='fixed bottom-10 right-20 gap-3'>
                                    <button onClick={() => {setModel(true)}} className='text-white bg-dark-purple p-4 rounded-full flex items-center justify-center text-[23px] mb-3'><img src={lesson} alt=''  className='w-10'/></button>
                              </div>
                              {/* END MODEL BUTTON */}

                              <div className='flex items-start justify-between p-5'>
                                             <div className='bg-white w-[25%] text-center py-10 rounded-2xl shadow-lg'>
                                                            <img src={user} alt='' className='w-[150px] h-[150px] rounded-full border-2 border-dashed border-dark-purple p-1 mx-auto'/>
                                                            <h4 className='text-[20px] font-thin my-2'>Mrs Adedolapo Aboaba</h4>
                                                            <p className='text-dark-purple mb-5'>Principal</p>
                                                            {/* STAFF DETAILS TABLE */}
>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d
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
                                                                                          <th className='py-3 text-[18px] float-left'>DOB</th>
                                                                                          <td className='py-3 text-[16px] float-right'>10/7/2003</td>
                                                                           </tr>
                                                            </table>
                                                            <button className='border-2 border-solid border-color-danger text-color-danger hover:bg-color-danger hover:text-white w-[82%] py-3 rounded-2xl mt-2 text-white font-bold'>Suspend Staff</button>
                                             </div>
                                             <div className='bg-white w-[45%] p-5 rounded-2xl shadow-lg'>
                                                            Accordions
                                             </div>
                                             <div className='bg-white w-[22%] p-7 py-5 rounded-2xl shadow-lg'>
                                                            <h1 className='py-3 text-[20px]'>About Mrs Adedolapo Aboaba</h1>
                                                            <p className='flex text-[16px] font-bold py-5'><FaUser className='mr-3'/> Principal</p>
                                                            <div className='py-5'>
                                                                           <h4 className='flex text-[16px] font-bold mb-2'><FaMapMarked className='mr-3'/> Location</h4>
                                                                           <p>Blk 35 MOQ Chindit Cantoonment</p>
                                                            </div>
                                             </div>
=======
                                                                                          <th className='py-3 text-[18px] float-left'>Gender</th>
                                                                                          <td className='py-3 text-[16px] float-right'>Female</td>
                                                                           </tr>
                                                            </table>
                                                            {/* END STAFF DETAILS TABLE */}
                                                            <button className='border-2 border-solid border-color-danger text-color-danger hover:bg-color-danger hover:text-white w-[82%] py-3 rounded-2xl mt-2 font-bold'>Suspend Staff</button>
                                             </div>

                                             <div className='bg-white w-[45%] p-5 rounded-2xl shadow-lg'>
                                                            <Tabs />
                                             </div>

                                             <div className='bg-white w-[22%] p-7 py-5 rounded-2xl shadow-lg'>
                                                            <h1 className='py-3 text-[20px]'>About Mrs Adedolapo Aboaba</h1>
                                                            <p className='flex text-[16px] font-bold py-5'><img src={man} alt='' className='mr-6 w-5 mr-2'/> Principal</p>
                                                            <div className='py-5'>
                                                                           <h4 className='flex text-[16px] font-bold mb-2'><img src={map} alt='' className='mr-6 w-5 mr-2'/> Location</h4>
                                                                           <p>Blk 35 MOQ Chindit Cantoonment</p>
                                                            </div>
                                             </div>
                                             
>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d
                              </div>
               </div>
  )
}

export default StaffProfile