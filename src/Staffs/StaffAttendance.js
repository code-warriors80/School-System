import React, {useState} from 'react'
import SideNotify from '../Components/SideNotify'
import TakenStaffAttendance from './TakenStaffAttendance'

import { staffs } from '../data/staffs'

// ICONS
import user from '../icons/icons8-male-user-94.png'
import calander from '../icons/icons8-today-94.png'
import bell from '../icons/icons8-bell-94.png'
import search from '../icons/icons8-search-94.png'

const StaffAttendance = () => {
  const [model, setModel] = useState(false)
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


          {/* TAKEN ATTENDANCE MODEL */}
          {model === true &&(<TakenStaffAttendance setModel={setModel} />)}
          {/* END TAKEN ATTENDANCE MODEL */}

          {/* TAKEN ATTENDANCE MODEL BUTTON */}
          <div className='fixed bottom-10 right-20 gap-3'>
                  <button className='text-white bg-dark-purple p-4 rounded-full flex items-center justify-center text-[23px] mb-3' onClick={() => setModel(true)}><img src={calander} alt=''  className='w-10'/></button>
          </div>
          {/* END TAKEN ATTENDANCE MODEL BUTTON */}

          <h3 className='ml-5 mt-5 text-[20px]'>Staff Attendance</h3>

          <div className='flex items-start justify-between p-5 '>
                {/* ATTENDANCE TABLE PARENT */}
                <div className=' w-[69%] h-[83vh] overflow-scroll scroll'>
                        <div className=' bg-white shadow-lg py-3 rounded-2xl'>
                              {/* ATTENDANCE TABLE */}
                              <table className='bigger w-[95%] mx-auto text-center rounded-2xl'>
                                  <thead className='bg-dark-purple text-white rounded-lg'>
                                      <tr>
                                          <th className='py-5'>SN</th>
                                          <th className='py-5'>Staff Image</th>
                                          <th className='py-5'>Staff Name</th>
                                          <th className='py-5'>Time in</th>
                                          <th className='py-5'>Time out</th>
                                          <th className='py-5'>Action</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                    {staffs.map((allstaff,index) => (
                                    <tr key={index}>
                                          <td className='py-5'>{index + 1}</td>
                                          <td className='py-5'><img src={user} alt='' className='w-[50px] h-[50px] border-2 border-dashed border-dark-brown p-1 rounded-full mx-auto'/></td>
                                          <td>
                                                <p className='font-semibold text-[17px]'>{allstaff.name}</p>
                                          </td>
                                          <td className='py-5'>
                                              <button className='border-2 border-solid border-green-500 text-green-500 hover:bg-green-500 hover:text-white p-3 rounded-lg'>Sign In</button>
                                          </td>
                                          <td className='py-5'>
                                              <button className='border-2 border-solid border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white p-3 rounded-lg'>Sign Out</button>
                                          </td>
                                          <td className='py-5 flex items-start justify-center gap-2'>
                                            <button className='border-2 border-solid border-red-500 text-red-500 hover:bg-red-500 hover:text-white p-3 rounded-lg'>Absent</button>
                                          </td>
                                      </tr>
                                    ))}
                                  </tbody>
                              </table>
                              {/* END ATTENDANCE TABLE */}
                              </div>
                </div>
                {/* END ATTENDANCE TABLE PARENT */}

                <SideNotify />
          </div>
    </div>
  )
}

export default StaffAttendance