import React, {useState} from 'react'
// import { useStaffsContext } from '../hooks/useStaffsContext';
import UpdateStaffProfile from '../Forms/updateStaffProfile';

const Tabs = ({staff}) => {
               const [toggleState, setToggle] = useState(1);
              //  const [dispatch] = useStaffsContext()

              //  TAB TOGGLER
               const toggleTab = (index) => {
                              setToggle(index);
               }

              //  DELETE FUNCTION
              //  const deleteStaff = async () => {
              //       const response = await fetch(`staff/${staff.id}`, () => staff.id, {
              //         method: 'DELETE'
              //       })

              //       const json = await response.json()

              //       if(response.ok) {
              //           dispatch({type: 'DELETE_STAFF',  payload: json})
              //       }
              //  }

  return (
    <div className='scroll h-[80vh] overflow-scroll'>
              {/* TAB HEADER */}
               <div className='block-tabs flex mb-2 cursor-pointer'>
                              <div className={toggleState === 1 ? 'active-tab py-4 px-10' : 'tab bg-light-gray py-4 px-10'} onClick={() => toggleTab(1)}>Home</div>
                              <div className={toggleState === 2 ? 'active-tab py-4 px-10' : 'tab bg-light-gray py-4 px-10'}  onClick={() => toggleTab(2)}>Information</div>
                              <div className={toggleState === 3 ? 'active-tab py-4 px-10' : 'tab bg-light-gray py-4 px-10'}  onClick={() => toggleTab(3)}>Update Profile</div>
                              <div className={toggleState === 4 ? 'active-tab py-4 px-10' : 'tab bg-light-gray py-4 px-10'}  onClick={() => toggleTab(4)}>Settings</div>
               </div>
               {/* END TAB HEADER */}

               <div className='content-tabs'>
                               {/* TAB CONTENT 1 */}
                              <div className={toggleState === 1 ? ' content active-content' : 'tabs'}>
                                             <h1 className='text-2xl my-5'>Home</h1>
                                             <hr/>
                                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, tempora omnis fugit repudiandae 
                                                            laboriosam atque quibusdam nam vero magnam hic voluptate. Voluptate, doloribus. Temporibus ut 
                                                            assumenda rem harum! Doloremque, cupiditate?
                                             </p>
                              </div>
                              {/* END TAB CONTENT 1 */}

                              {/* TAB CONTENT 2 */}
                              <div className={toggleState === 2 ? ' content active-content' : 'tabs'}>
                                             <h1 className='text-2xl my-5'>Personal Information</h1>
                                             <hr/>
                                             <table className='w-[100%]'>
                                                            <tr>
                                                                           <th className='float-left py-3 text-[18px]'>Title</th>
                                                                           <td className='float-right py-3'>{staff.title}</td>
                                                            </tr>
                                                            <tr>
                                                                           <th className='float-left py-3 text-[18px]'>Name</th>
                                                                           <td className='float-right py-3'>{staff.firstname + ' ' + staff.surname}</td>
                                                            </tr>
                                                            <tr>
                                                                           <th className='float-left py-3 text-[18px]'>Position</th>
                                                                           <td className='float-right py-3'>Principal</td>
                                                            </tr>

                                                            <tr>
                                                                           <th className='float-left py-3 text-[18px]'>Role</th>
                                                                           <td className='float-right py-3'>Admin</td>
                                                            </tr>

                                                            <tr>
                                                                           <th className='float-left py-3 text-[18px]'>Email</th>
                                                                           <td className='float-right py-3'>Muctar@gmail.com</td>
                                                            </tr>

                                                            <tr>
                                                                           <th className='float-left py-3 text-[18px]'>Gender</th>
                                                                           <td className='float-right py-3'>Female</td>
                                                            </tr>

                                                            <tr>
                                                                           <th className='float-left py-3 text-[18px]'>Contact</th>
                                                                           <td className='float-right py-3'>08116934763</td>
                                                            </tr>

                                                            <tr>
                                                                           <th className='float-left py-3 text-[18px]'>DOB</th>
                                                                           <td className='float-right py-3'>10th July 2003</td>
                                                            </tr>

                                                            <tr>
                                                                           <th className='float-left py-3 text-[18px]'>Address</th>
                                                                           <td className='float-right py-3'>Blk 35 MOQ Chindit Cantoonment</td>
                                                            </tr>

                                                            <tr>
                                                                           <th className='float-left py-3 text-[18px]'>City</th>
                                                                           <td className='float-right py-3'>Olamaboro</td>
                                                            </tr>

                                                            <tr>
                                                                           <th className='float-left py-3 text-[18px]'>State</th>
                                                                           <td className='float-right py-3'>Kogi State</td>
                                                            </tr>
                                             </table>
                              </div>
                              {/* END TAB CONTENT 2 */}

                              {/* TAB CONTENT 3 */}
                                  <UpdateStaffProfile toggleState={toggleState}/>
                              {/* END TAB CONTENT 3 */}

                              {/* TAB CONTENT 4 */}
                              <div className={toggleState === 4 ? ' content active-content' : 'tabs'}>
                                             <h1 className='text-2xl my-5'>Settings</h1>
                                             <hr/>
                                             <p>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, tempora omnis fugit repudiandae 
                                                    laboriosam atque quibusdam nam vero magnam hic voluptate. Voluptate, doloribus. Temporibus ut 
                                                    assumenda rem harum! Doloremque, cupiditate?
                                             </p>
                                             {/* <button className='bg-red-500 text-white py-3 px-5 rounded-2xl mt-2' onClick={deleteStaff}>Delete Account</button> */}
                              </div>
                              {/* END TAB CONTENT 4 */}
               </div>
    </div>
  )
}

export default Tabs