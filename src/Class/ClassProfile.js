import React from 'react'

import user from '../icons/icons8-male-user-94.png'
import bell from '../icons/icons8-bell-94.png'
import classes from '../icons/icons8-school-building-94.png'
import search from '../icons/icons8-search-94.png'
import Tabs from './tabs'

const ClassProfile = () => {
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

                              <div className='flex items-start justify-between p-5'>
                                             <div className='bg-white w-[25%] text-center py-10 rounded-2xl shadow-lg'>
                                                            <img src={user} alt='' className='w-[150px] h-[150px] rounded-full border-2 border-dashed border-dark-purple p-1 mx-auto'/>
                                                            <h4 className='text-[20px] font-thin my-2'>Mrs Adedolapo Aboaba</h4>
                                                            <p className='text-dark-purple mb-5'>Class Teacher</p>
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
                                                                                          <th className='py-3 text-[18px] float-left'>Gender</th>
                                                                                          <td className='py-3 text-[16px] float-right'>Female</td>
                                                                           </tr>
                                                            </table>
                                                            <button className='border-2 border-solid border-color-danger text-color-danger hover:bg-color-danger hover:text-white w-[82%] py-3 rounded-2xl mt-2 font-bold'>Remove As Class Teacher</button>
                                             </div>
                                             <div className='bg-white w-[45%] p-5 rounded-2xl shadow-lg'>
                                                            <Tabs />
                                             </div>

                                             <div className='bg-white w-[22%] p-7 py-5 rounded-2xl shadow-lg'>
                                                            <h1 className='py-3 text-[20px]'>About Pri-Nursery 1</h1>
                                                            <div>
                                                                    <p className='flex items-center text-[16px] font-bold py-5'><img src={classes} alt='' className='w-5 mr-2'/> Class</p>
                                                                    <table className='w-full mini-profile'>
                                                                        <tr>
                                                                          <th className='float-left py-3 text-[18px]'>Class</th>
                                                                          <td className='float-right py-3 text-[16px]'>Pri-Nursery 1</td>
                                                                        </tr>
                                                                        <tr>
                                                                          <th className='float-left py-3 text-[18px]'>Num Of Pupils</th>
                                                                          <td className='float-right py-3 text-[16px]'>20</td>
                                                                        </tr>
                                                                        <tr>
                                                                          <th className='float-left py-3 text-[18px]'>Sections</th>
                                                                          <td className='float-right py-3 text-[16px]'>1</td>
                                                                        </tr>
                                                                    </table>
                                                            </div>

                                             </div>
                              </div>
               </div>
  )
}

export default ClassProfile