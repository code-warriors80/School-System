import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import SideNotify from '../Components/SideNotify'
import StaffForm from '../Forms/StaffForm'
import axios from 'axios'
// import { useStaffsContext } from '../hooks/useStaffsContext'

// ICONS
import staff from '../icons/icons8-writer-male-94.png'
import calender from '../icons/icons8-calendar-94.png'
import user from '../icons/icons8-male-user-94.png'
import bell from '../icons/icons8-bell-94.png'
import search from '../icons/icons8-search-94.png'
import Response from '../response/response'

const Staff = () => {
      const [model, setModel] = useState(false)
      const [status, setStatus] = useState(false)
      const [staffs, setStaff] = useState([])

      const url = '/staff'

      useEffect(() => {
        fetchStaff()
      }, [])

      const fetchStaff = async () => {
        axios.get(url).then(response => {
            console.log(response.data);
            setStaff(response.data)
        })
      }

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

          {/* ADD STAFF MODEL */}
              {model === true &&(<StaffForm setModel={setModel}/>)}
              
          {/* END ADD STAFF MODEL */}

          {/* SIDE MENU */}
              <div className='fixed bottom-10 right-20 gap-3'>
                      <button className='text-white bg-dark-purple p-4 rounded-full flex items-center justify-center text-[23px] mb-3' onClick={() => {setModel(true)}}><img src={staff} alt=''  className='w-10'/></button>
                      <Link to="/staff/attendance" className='text-white bg-dark-purple p-4 rounded-full flex items-center justify-center text-[23px] mb-3'><img src={calender} alt=''  className='w-10'/></Link>
              </div>
          {/* END SIDE  MENU */}

          <div className='flex items-start justify-between p-5 '>
            {/* FETCH STAFF CATEGORY */}
            <div className=' w-[69%] h-[88vh] overflow-scroll scroll'>
              <div className='flex items-center justify-between'>
                    {/* SELECT DEPARTMENT */}
                    <div className='bg-white mb-5 px-4 py-4 w-56 mt-4 rounded-lg'>
                        <select className='w-48'>
                          <option>Select Roles</option>
                          <option>Admin</option>
                          <option>ICT</option>
                          <option>Languages</option>
                        </select>
                    </div>
                    {/* END SELECT DEPT */}

                    <div className="flex bg-white items-center w-[29%] gap-[5px] py-[3px] rounded-md  px-[12px] bg-light-gray">
                                    <i className="text-[1.2rem] pointer text-gray-800"><img src={search} alt='' className='w-6'/></i>
                                    <input type="text" name="search" id="" placeholder="Search" className='p-[10px] text-black w-full'/>
                    </div>

              </div>
              {/* END FETCH STAFF CATEGORY */}

            {/* FETCH STAFF PARENT */}
            <div className=' flex items-start gap-5 pb-5 pt-2 flex-wrap mx-auto'>
                  {staffs.map((staff) => (
                      <div key={staff._id}>
                          <div className='bg-white rounded-2xl w-64 p-5 text-center shadow-lg'>
                              <img src={user} alt="" className='w-[110px] h-[110px] rounded-full mx-auto border-2 border-dashed border-dark-brown p-1'/>
                              <h3 className='mb-1 mt-2 font-semibold text-[18px]'>{staff.title + ' ' + staff.surname + ' ' + staff.firstname}</h3>
                              <p className='text-[14px] text-dark-purple'>{staff.position}</p>
                              <div className='bg-dark-purple w-full py-3 rounded-lg text-white mt-1'>
                                <Link to={`${staff._id}`} className='w-full'>View Profile</Link>
                            </div>
                          </div>
                      </div>
                  ))}
            </div>
              {/* END FETCH STAFF PARENT */}
            </div>

              <SideNotify />     
          </div>
    </div>
  )
}

export default Staff