import React from 'react'
import { Link } from 'react-router-dom'
import dp from '../image/_DSC0541.JPG'
import {  FaBook,  FaChalkboardTeacher, FaUserGraduate, FaUsers,FaSearch, FaBell } from 'react-icons/fa'    
import SideNotify from '../Components/SideNotify'

const Dashboard = () => {
  return (
    <div className='w-full'>
    <nav className='py-3 px-10 bg-dark-purple flex items-center justify-between'>
          <div className="hidden lg:flex search--box bg-white lg:items-center w-[25%] gap-[5px] py-[3px] rounded-md  px-[12px] bg-light-gray">
                            <i className="text-[1.2rem] pointer text-gray-800"><FaSearch /></i>
                            <input type="text" name="search" id="" placeholder="Search" className='p-[10px] text-black w-full'/>
            </div>
            <div className='flex items-center'>
                  <FaBell className='mr-6 text-white text-[25px]'/>
                  <img src={dp} alt='' className='w-[50px] h-[50px] rounded-full'/>
            </div>
    </nav>
<div className='flex items-start justify-between p-5  h-[90vh]'>
        {/* DASHBOARD */}
        <div className='w-[74%]'>
              <h1 className='font-bold text-2xl mb-5'>Overview</h1>

              <div className='flex items-center flex-wrap gap-3'>
              {/* ITEMS */}
                  <Link to="/staff">
                      <div className='bg-color-danger w-[280px] lg:w-[280px]  rounded-lg lg:mb-0 mx-auto lg:mx-0 overflow-hidden shadow-lg'>
                          <div className='flex items-center justify-between px-[30px] py-5'>
                              <div>
                                  <h2 className='text-[35px] text-white'>7</h2>
                                  <span className="uppercase text-[13px] lg:text-[15px] text-white">Staffs</span>
                              </div>
                              <div>
                                <i className='text-[70px] text-link-color'><FaUsers /></i>
                              </div>
                          </div>
                          <div className='flex items-center justify-center py-[15px] bg-link-color text-white'><Link to="/" className='text-[13px] uppercase'>Learn More</ Link></div>
                      </div>
                  </Link>

                  <Link >
                      <div className='bg-color-warning w-[280px] lg:w-[280px]  rounded-lg lg:mb-0 mx-auto lg:mx-0 overflow-hidden shadow-lg'>
                          <div className='flex items-center justify-between px-[30px] py-5'>
                              <div>
                                  <h2 className='text-[35px] text-white'>70</h2>
                                  <span className="uppercase text-[13px] lg:text-[15px] text-white">Student</span>
                              </div>
                              <div>
                                <i className='text-[70px] text-link-color'><FaUserGraduate /></i>
                              </div>
                          </div>
                          <div className='flex items-center justify-center py-[15px] bg-link-color text-white'><Link to="/" className='text-[13px] uppercase'>Learn More</ Link></div>
                      </div>
                  </Link>
                  <Link >
                      <div className='bg-color-primary w-[280px] lg:w-[280px]  rounded-lg lg:mb-0 mx-auto lg:mx-0 overflow-hidden shadow-lg'>
                          <div className='flex items-center justify-between px-[30px] py-5'>
                              <div>
                                  <h2 className='text-[35px] text-white'>14</h2>
                                  <span className="uppercase text-[13px] lg:text-[15px] text-white">Class</span>
                              </div>
                              <div>
                                <i className='text-[70px] text-link-color'><FaChalkboardTeacher /></i>
                              </div>
                          </div>
                          <div className='flex items-center justify-center py-[15px] bg-link-color text-white'><Link to="/" className='text-[13px] uppercase'>Learn More</ Link></div>
                      </div>
                  </Link>
                  <Link >
                      <div className='bg-color-purple w-[280px] lg:w-[280px]  rounded-lg lg:mb-0 mx-auto lg:mx-0 overflow-hidden shadow-lg'>
                          <div className='flex items-center justify-between px-[30px] py-5'>
                              <div>
                                  <h2 className='text-[35px] text-white'>21</h2>
                                  <span className="uppercase text-[13px] lg:text-[15px] text-white">Subjects</span>
                              </div>
                              <div>
                                <i className='text-[70px] text-link-color'><FaBook /></i>
                              </div>
                          </div>
                          <div className='flex items-center justify-center py-[15px] bg-link-color text-white'><Link to="/" className='text-[13px] uppercase'>Learn More</ Link></div>
                      </div>
                  </Link>
              {/* ITEMS END */}
              </div>

              <h1 className='font-bold text-2xl mt-10 mb-4'>Activity Chart</h1>
              <div className='w-full bg-white shadow-lg'>
                    Table
              </div>
              
        </div>
        {/* DASHBOARD END */}

        <SideNotify />        
    </div>
    </div>
  )
}

export default Dashboard