import React from 'react'
import { Link } from 'react-router-dom'
import SideNotify from '../Components/SideNotify'

import user from '../icons/icons8-male-user-94.png'
import bell from '../icons/icons8-bell-94.png'
import staff from '../icons/icons8-users-94.png'
import student from '../icons/icons8-student-male-94.png'
import classes from '../icons/icons8-classroom-94.png'
import subject from '../icons/icons8-books-94.png'
import search from '../icons/icons8-search-94.png'

const Dashboard = () => {
  return (
    <div className='w-full'>
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
                                <i className='text-[70px] text-link-color'><img src={staff} alt='' className='w[80px]' /></i>
                              </div>
                          </div>
                          <div className='flex items-center justify-center py-[15px] bg-link-color text-white'><Link to="/staff" className='text-[13px] uppercase'>Learn More</ Link></div>
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
                                <i className='text-[70px] text-link-color'><img src={student} alt='' className='w[80px]' /></i>
                              </div>
                          </div>
                          <div className='flex items-center justify-center py-[15px] bg-link-color text-white'><Link to="/student" className='text-[13px] uppercase'>Learn More</ Link></div>
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
                                <i className='text-[70px] text-link-color'><img src={classes} alt='' className='w[80px]' /></i>
                              </div>
                          </div>
                          <div className='flex items-center justify-center py-[15px] bg-link-color text-white'><Link to="/class" className='text-[13px] uppercase'>Learn More</ Link></div>
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
                                <i className='text-[70px] text-link-color'><img src={subject} alt='' className='w[80px]' /></i>
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