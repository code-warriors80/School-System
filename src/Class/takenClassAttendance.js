import React from 'react'

import puple from '../icons/icons8-student-male-94.png'
import close from '../icons/icons8-close-94.png'

const TakenClassAttendance = ({setModel}) => {
  return (
    <div className='fixed w-[66%] p-5 bg-light-gray h-[90vh]'>
        <div className='flex items-center justify-between'>
            <h1 className='text-[20px]'>Today's Attendance</h1>
            <button className='text-[20px]' onClick={() => setModel(false)}><img src={close} alt=''  className='w-5'/></button>
        </div>

        <div className='flex items-center justify-between'>
            <div className='bg-white mb-5 px-4 py-4 w-56 mt-4 rounded-lg'>
                          <select className='w-48'>
                            <option>Select All</option>
                            <option>Present</option>
                            <option>Absent</option>
                        </select>
              </div>

              <div className='bg-white mb-5 px-4 py-4 w-56 mt-4 rounded-lg'>
                  <input type='date' className='w-full'/>
              </div>
        </div>

        <div className=' w-[100%] overflow-scroll scroll mt-2'>
          <div className=' bg-white shadow-lg py-3 rounded-2xl'>
                <table className='w-[95%] mx-auto text-center rounded-2xl'>
                  <thead className='bg-dark-purple text-white rounded-lg'>
                    <tr>
                    <th className='py-5'>SN</th>
                    <th className='py-5'>Student Image</th>
                    <th className='py-5'>Student Name</th>
                    <th className='py-5'>Class</th>
                    <th className='py-5'>Status</th>
                    <th className='py-5'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td className='py-5'>1</td>
                        <td className='py-5'><img src={puple} alt='' className='w-[50px] h-[50px] border-2 border-dashed border-dark-brown p-1 rounded-full mx-auto'/></td>
                        <td>
                              <p className='font-semibold text-[17px]'>Mrs Samuel Malam</p>
                        </td>
                        <td className='py-5'>
                          <button className='bg-yellow-500 p-3 rounded-lg text-white' disabled>
                              Pri-Nursery 1
                            </button>
                        </td>
                        <td className='py-5'>
                            <button className='bg-green-500 p-3 rounded-lg text-white' disabled>
                              Present
                            </button>
                        </td>
                        <td className='py-5 flex items-start justify-center gap-2'>
                          <button className='bg-color-danger p-3 rounded-lg text-white'>Delete</button>
                        </td>
                    </tr>

                    <tr className='bg-light-gray'>
                        <td className='py-5'>2</td>
                        <td className='py-5'><img src={puple} alt='' className='w-[50px] h-[50px] border-2 border-dashed border-dark-brown p-1 rounded-full mx-auto'/></td>
                        <td>     
                              <p className='font-semibold text-[17px]'>Mr Joseph Mosses</p>
                        </td>
                        <td className='py-5'>
                            <button className='bg-yellow-500 p-3 rounded-lg text-white' disabled>Pri-Nursery 1</button>
                        </td>
                        <td className='py-5'>
                            <button className='bg-red-500 p-3 rounded-lg text-white' disabled>Absent</button>
                        </td>
                        <td className='py-5 flex items-start justify-center gap-2'>
                          <button className='bg-color-danger p-3 rounded-lg text-white'>Delete</button>
                        </td>
                    </tr>
                    
                    <tr>
                        <td className='py-5'>3</td>
                        <td className='py-5'><img src={puple} alt='' className='w-[50px] h-[50px] border-2 border-dashed border-dark-brown p-1 rounded-full mx-auto'/></td>
                        <td>
                                <p className='font-semibold text-[17px]'>Mrs Silvia Henry</p>
                        </td>
                        <td className='py-5'>
                            <button className='bg-yellow-500 p-3 rounded-lg text-white'>Pri-Nursery 1</button>
                        </td>
                        <td className='py-5'>
                            <button className='bg-green-500 p-3 rounded-lg text-white'>Present</button>
                        </td>
                        <td className='py-5 flex items-start justify-center gap-2'>
                          <button className='bg-color-danger p-3 rounded-lg text-white flex'> Delete</button>
                        </td>
                    </tr>
                  </tbody>
                </table>
                </div>
                </div>
  </div>
  )
}

export default TakenClassAttendance