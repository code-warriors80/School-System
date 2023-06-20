import React, {useState} from 'react'
<<<<<<< HEAD
import dp from '../image/_DSC0541.JPG'
import {  FaSearch, FaBell, FaCalendarCheck } from 'react-icons/fa'    
import SideNotify from '../Components/SideNotify'
import TakenStudentAttendance from './TakenStudentAttendance'

=======
import SideNotify from '../Components/SideNotify'
import TakenStudentAttendance from './TakenStudentAttendance'

import { students } from '../data/students'

import user from '../icons/icons8-male-user-94.png'
import calander from '../icons/icons8-today-94.png'
import puple from '../icons/icons8-student-male-94.png'
import bell from '../icons/icons8-bell-94.png'
import search from '../icons/icons8-search-94.png'

>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d
const StudentAttendance = () => {
  const [model, setModel] = useState(false)
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
=======
                                  <i className="text-[1.2rem] pointer text-gray-800"><img src={search} alt='' className='w-6'/></i>
                                  <input type="text" name="search" id="" placeholder="Search" className='p-[10px] text-black w-full'/>
                  </div>
                  <div className='flex items-center'>
                  <img src={bell} alt='' className='mr-6 w-8'/>
                        <img src={user} alt='' className='w-[50px] h-[50px] rounded-full border-2 border-dashed border-white p-1'/>
>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d
                  </div>
          </nav>

          {model === true &&(<TakenStudentAttendance setModel={setModel} />)}

          <div className='fixed bottom-10 right-20 gap-3'>
<<<<<<< HEAD
                  <button className='text-white bg-dark-purple p-4 rounded-full flex items-center justify-center text-[23px] mb-3' onClick={() => setModel(true)}><FaCalendarCheck /></button>
=======
                  <button className='text-white bg-dark-purple p-4 rounded-full flex items-center justify-center text-[23px] mb-3' onClick={() => setModel(true)}><img src={calander} alt=''  className='w-10'/></button>
>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d
          </div>

          <h3 className='ml-5 mt-5 text-[20px]'>Student Attendance</h3>

          <div className='flex items-start justify-between p-5 '>
<<<<<<< HEAD
          <div className=' w-[69%] h-[88vh] overflow-scroll scroll'>
=======
          <div className=' w-[69%] h-[83vh] overflow-scroll scroll'>
>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d
          <div className='flex items-center justify-between'>
               <div className='bg-white mb-5 px-4 py-4 w-56 mt-4 rounded-lg'>
                              <select className='w-48'>
                                             <option>Select Class</option>
                                             <option>Pri-Nursery 1</option>
                                             <option>Pri-Nursery 2</option>
                                             <option>Nursery</option>
                                             <option>Reception</option>
                              </select>
               </div>
        </div>
          <div className=' bg-white shadow-lg py-3 rounded-2xl'>
<<<<<<< HEAD
                <table className='w-[95%] mx-auto text-center rounded-2xl'>
=======
                <table className='bigger w-[95%] mx-auto text-center rounded-2xl'>
>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d
                  <thead className='bg-dark-purple text-white rounded-lg'>
                    <tr>
                    <th className='py-5'>SN</th>
                    <th className='py-5'>Student Image</th>
                    <th className='py-5'>Student Name</th>
                    <th className='py-5'>Class</th>
                    <th  className='py-5'>Date</th>
                    <th className='py-5'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
<<<<<<< HEAD
                    <tr>
                        <td className='py-5'>1</td>
                        <td className='py-5'><img src={dp} alt='' className='w-[50px] h-[50px] border-2 border-dashed border-dark-brown p-1 rounded-full mx-auto'/></td>
                        <td>
                              <p className='font-semibold text-[17px]'>Mrs Samuel Malam</p>
                        </td>
                        <td className='py-5'>
                        <button className='bg-yellow-500 p-3 rounded-lg text-white' disabled>Pri-Nursery 1</button>
                        </td>
                        <td className='py-5'> <button className='bg-blue-500 p-3 rounded-lg text-white' disabled>10 May 2023</button></td>
                        <td className='py-5 flex items-start justify-center gap-2'>
                        <button className='border-solid text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white p-3 rounded-lg text-white'>Present</button>
                          <button className='border-2 border-solid text-color-danger hover:bg-color-danger hover:text-white border-color-danger p-3 rounded-lg text-white'>Absent</button>
                        </td>
                    </tr>

                    <tr className='bg-light-gray'>
                        <td className='py-5'>2</td>
                        <td className='py-5'><img src={dp} alt='' className='w-[50px] h-[50px] border-2 border-dashed border-dark-brown p-1 rounded-full mx-auto'/></td>
                        <td>     
                              <p className='font-semibold text-[17px]'>Mr Joseph Mosses</p>
                        </td>
                        <td className='py-5'>
                        <button className='bg-yellow-500 p-3 rounded-lg text-white' disabled>Pri-Nursery 1</button>
                        </td>
                        <td className='py-5'> <button className='bg-blue-500 p-3 rounded-lg text-white' disabled>10 May 2023</button></td>
                        <td className='py-5 flex items-start justify-center gap-2'>
                          <button className='border-solid text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white p-3 rounded-lg text-white'>Present</button>
                          <button className='border-2 border-solid text-color-danger hover:bg-color-danger hover:text-white border-color-danger p-3 rounded-lg text-white'>Absent</button>
                        </td>
                    </tr>
                    
                    <tr>
                        <td className='py-5'>3</td>
                        <td className='py-5'><img src={dp} alt='' className='w-[50px] h-[50px] border-2 border-dashed border-dark-brown p-1 rounded-full mx-auto'/></td>
                        <td>
                                <p className='font-semibold text-[17px]'>Mrs Silvia Henry</p>
                        </td>
                        <td className='py-5'>
                            <button className='bg-yellow-500 p-3 rounded-lg text-white' disabled>Pri-Nursery 1</button>
                        </td>
                        <td className='py-5'> <button className='bg-blue-500 p-3 rounded-lg text-white' disabled>10 May 2023</button></td>
                        <td className='py-5 flex items-start justify-center gap-2'>
                          <button className='border-solid text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white p-3 rounded-lg text-white'>Present</button>
                          <button className='border-2 border-solid text-color-danger hover:bg-color-danger hover:text-white border-color-danger p-3 rounded-lg text-white'>Absent</button>
                        </td>
                    </tr>
=======
                  {students.map((pupils, index) => (
                    <tr>
                        <td className='py-5'>{index + 1}</td>
                        <td className='py-5'><img src={puple} alt='' className='w-[50px] h-[50px] border-2 border-dashed border-dark-brown p-1 rounded-full mx-auto'/></td>
                        <td>
                              <p className='font-semibold text-[17px]'>{pupils.name}</p>
                        </td>
                        <td className='py-5'>
                        <button className='bg-yellow-500 p-3 rounded-lg text-white' disabled>{pupils.class}</button>
                        </td>
                        <td className='py-5'> <button className='bg-blue-500 p-3 rounded-lg text-white' disabled>10 May 2023</button></td>
                        <td className='py-5 flex items-start justify-center gap-2'>
                        <button className='border-solid text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white p-3 rounded-lg'>Present</button>
                          <button className='border-2 border-solid text-color-danger hover:bg-color-danger hover:text-white border-color-danger p-3 rounded-lg'>Absent</button>
                        </td>
                    </tr>
                  ))}
>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d
                  </tbody>
                </table>
                </div>
                </div>
              <SideNotify />
          </div>
    </div>
  )
}

export default StudentAttendance