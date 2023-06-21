import React, {useState} from 'react'
<<<<<<< HEAD
import dp from '../image/_DSC0541.JPG'
import {  FaSearch, FaBell, FaPlusCircle } from 'react-icons/fa'    
import SideNotify from '../Components/SideNotify'
import { Link } from 'react-router-dom'
import ClassForm from '../Forms/ClassForm'

=======
import SideNotify from '../Components/SideNotify'
import { Link } from 'react-router-dom'

// CLASS FORM
import ClassForm from '../Forms/ClassForm'

//  CLASS DATA
import { classes } from '../data/class'

// ICONS
import user from '../icons/icons8-male-user-94.png'
import bell from '../icons/icons8-bell-94.png'
import add from '../icons/icons8-plus-94.png'
import search from '../icons/icons8-search-94.png'

>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d
const Class = () => {
  const [model, setModel] = useState(false)
  return (
<div className='w-full'>
<<<<<<< HEAD
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
          {model === true &&(<ClassForm setModel={setModel} />)}
          <div className='fixed bottom-10 right-20 gap-3'>
                  <button className='text-white bg-dark-purple p-4 rounded-full flex items-center justify-center text-[23px] mb-3' onClick={() => setModel(true)}><FaPlusCircle /></button>
          </div>

          <div className='flex items-start justify-between p-5 '>
            <div className=' w-[69%] h-[88vh] overflow-scroll scroll'>
              <div className=' bg-white shadow-lg py-3 rounded-2xl'>
                <table className='w-[95%] mx-auto text-center rounded-2xl'>
                  <thead className='bg-dark-purple text-white rounded-lg'>
                    <tr>
                    <th className='py-5'>SN</th>
                    <th className='py-5'>Class Name</th>
                    <th className='py-5'>Teacher Image</th>
                    <th className='py-5'>Class Teacher</th>
                    <th className='py-5'>Students</th>
                    <th className='py-5'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td className='py-5'>1</td>
                        <td className='py-5'>Pri-Nursery 1</td>
                        <td className='py-5'> <img src={dp} alt='' className='w-[40px] h-[40px] border-2 border-dashed border-dark-brown p-1 rounded-full mx-auto'/></td>
                        <td>
                        <div className='py-5'>
                              <p>Mrs Samuel Malam</p>
                        </div>
                        </td>
                        <td className='py-5'>10</td>
                        <td className='py-5 flex items-start justify-center gap-2'>
                          <Link className='bg-color-warning rounded-lg p-3 text-white'>View</Link>
                          <button className='bg-color-danger p-3 rounded-lg text-white'>Delete</button>
                        </td>
                    </tr>

                    <tr className='bg-light-gray'>
                        <td className='py-5'>2</td>
                        <td className='py-5'>Pri-Nursery 2</td>
                        <td className='py-5'><img src={dp} alt='' className='w-[40px] h-[40px] border-2 border-dashed border-dark-brown p-1 rounded-full mx-auto'/></td>
                        <td>
                          <div className='py-5'>
                              <p>Mr Joseph Mosses</p>
                          </div>
                        </td>
                        <td className='py-8'>48</td>
                        <td className='py-5 flex items-start justify-center gap-2'>
                          <Link className='bg-color-warning rounded-lg p-3 text-white'>View</Link>
                          <button className='bg-color-danger p-3 rounded-lg text-white'>Delete</button>
                        </td>
                    </tr>
                    
                    <tr>
                        <td className='py-5'>3</td>
                        <td className='py-5'>Nursery</td>
                        <td className='py-5'><img src={dp} alt='' className='w-[40px] h-[40px] border-2 border-dashed border-dark-brown p-1 rounded-full mx-auto'/></td>
                        <td>
                        <div className='py-5'>
                                <p>Mrs Silvia Henry</p>
                          </div>
                        </td>
                        <td className='py-5'>23</td>
                        <td className='py-5 flex items-start justify-center gap-2'>
                          <Link className='bg-color-warning rounded-lg p-3 text-white'>View</Link>
                          <button className='bg-color-danger p-3 rounded-lg text-white'>Delete</button>
                        </td>
                    </tr>
                  </tbody>
                </table>
                </div>
            </div>
            <SideNotify /> 
=======

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

          {/* ADD CLASS MODEL */}
          {model === true &&(<ClassForm setModel={setModel} />)}
          {/* END ADD CLASS MODEL */}

          {/* OPEN ADD CLASS MODEL BUTTON */}
          <div className='fixed bottom-10 right-20 gap-3'>
                  <button className='text-white bg-dark-purple p-4 rounded-full flex items-center justify-center text-[23px] mb-3' onClick={() => setModel(true)}><img src={add} alt='' className='w-8' /></button>
          </div>
          {/* END OPEN ADD CLASS MODEL BUTTON */}

          <div className='flex items-start justify-between p-5 '>
            {/* CLASS TABLE CONTAINER PARENT */}
            <div className=' w-[69%] h-[88vh] overflow-scroll scroll'>
                {/* CLASS TABLE CONTAINER */}
                <div className=' bg-white shadow-lg py-3 rounded-2xl'>
                  {/* CLASS TABLE */}
                      <table className='bigger w-[95%] mx-auto text-center rounded-2xl'>
                            <thead className=' bg-dark-purple text-white rounded-lg'>
                                  <tr>
                                  <th className='py-5'>SN</th>
                                  <th className='py-5'>Class Name</th>
                                  <th className='py-5'>Teacher Image</th>
                                  <th className='py-5'>Class Teacher</th>
                                  <th className='py-5'>Students</th>
                                  <th className='py-5'>Action</th>
                                  </tr>
                            </thead>
                            <tbody>
                                  {classes.map((myclass, index) => (
                                  <tr>
                                      <td className='py-5'>{index + 1}</td>
                                      <td className='py-5'>{myclass.class}</td>
                                      <td className='py-5'> <img src={user} alt='' className='w-[40px] h-[40px] border-2 border-dashed border-dark-brown p-1 rounded-full mx-auto'/></td>
                                      <td>
                                      <div className='py-5'>
                                            <p>{myclass.class_teacher}</p>
                                      </div>
                                      </td>
                                      <td className='py-5'>{myclass.NOS}</td>
                                      <td className='py-5 flex items-start justify-center gap-2'>
                                        <Link to={`/class/${myclass.id}`} className='bg-color-warning rounded-lg p-3 text-white'>View</Link>
                                        <button className='bg-color-danger p-3 rounded-lg text-white'>Delete</button>
                                      </td>
                                </tr>
                                  ))}
                            </tbody>
                      </table>
                      {/* END CLASS TABLE */}
                  </div>
                  {/* END CLASS TABLE CONTAINER */}
            </div>
            {/* END CLASS TABLE CONTAINER PARENT */}

            {/*SIDE NOIFICATION */}
            <SideNotify /> 
            {/* END SIDE NOIFICATION */}

>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d
          </div>
</div>
  )
}

export default Class