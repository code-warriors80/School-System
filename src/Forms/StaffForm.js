import React, {useState} from 'react'

import close from '../icons/icons8-close-94.png'
import Response from '../response/response';

// import { useStaffsContext } from '../hooks/useStaffsContext'
// import axios from 'axios';

const StaffForm = ({setModel}) => {
      const [title, setTitle] = useState('');
      const [surname, setSurname] = useState('')
      const [firstname, setFirstname] = useState('')
      const [lastname, setLastname] = useState('')
      const [email, setEmail] = useState('')
      const [gender, setGender] = useState('')
      const [dob, setDob] = useState('')
      const [contact, setContact] = useState('')
      const [address, setAddress] = useState('')
      const [state, setState] = useState('')
      const [city, setCity] = useState('')
      const [position, setPosition] = useState('')
      const [role, setRole] = useState('')
      const [success, setSuccess] = useState('')
      const [status, setStatus] = useState(false)
      const [error, setError] = useState(null)

      setTimeout(() => {
            setStatus(false)
      }, 5000)

      const handleSubmit = async (e) => {
            e.preventDefault()

            const url = '/addStaff';
            const staffs = {title, surname, firstname, lastname, email, gender, contact, dob, address, state, city, position, role}

            const response = await fetch(url, {
                  method: 'POST',
                  body: JSON.stringify(staffs),
                  headers: {
                        'Content-Type': 'application/json'
                    }
            })

            const json = await response.json()

            if(!response.ok)
            {
                setError(json.error)
            }

            if(response.ok)
            {
                  setStatus(true)
                  setModel(false)
                  setSuccess('Success')
                  setError('Error')
            }
      }


  return (
    <div className='scroll fixed w-[66%] p-5 bg-light-gray h-[92vh] overflow-scroll'>
        <div className='flex items-center justify-between'>
            <h1 className='text-[20px]'>Add Staff</h1>
            <button className='text-[20px]' onClick={() => setModel(false)}><img src={close} alt='' className='w-5' /></button>
        </div>

        {status === true && <Response success={success} error={error}/>}

        <form className='mt-10 mx-auto' onSubmit={handleSubmit} >
                                                <div className='lg:flex lg:items-center lg:justify-between mb-3'>
                                                            <div className='w-[48%]'>
                                                                               <label className='block text-[14px]'>Title</label>
                                                                               <select name='position' className='w-full h-[50px] my-2 px-2 rounded-md text-black' onChange={(e) => setTitle(e.target.value)}>
                                                                                    <option>Set Title</option>
                                                                                    <option value="Mr">Mr</option>
                                                                                    <option value="Mrs">Mrs</option>
                                                                                    <option value="Miss">Miss</option>
                                                                              </select>
                                                            </div>
                                                            <div className='w-[48%]'>
                                                                  <label className='block text-[14px]'>SurName</label>
                                                                  <input type='text' name='surname' className='w-full h-[50px] my-2 px-5 text-black rounded-md'  placeholder='SurName'  onChange={(e) => setSurname(e.target.value)}/>
                                                            </div>
                                                </div>

                                                <div className='lg:flex lg:items-center lg:justify-between mb-3'>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>FirstName</label>
                                                                           <input type='text' name='firstname' className='w-full h-[50px] my-2 px-5 text-black rounded-md'  placeholder='First Name' onChange={(e) => setFirstname(e.target.value)}/>
                                                            </div>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>LastName</label>
                                                                           <input type='text' name='lastname' className='w-full h-[50px] my-2 px-5 text-black rounded-md'  placeholder='LastName'  onChange={(e) => setLastname(e.target.value)}/>
                                                            </div>
                                                </div>

                                                <div className='lg:flex lg:items-center lg:justify-between mb-3'>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>Email</label>
                                                                           <input type='email' name='email' placeholder='Email' className='w-full h-[50px] my-2 px-5 text-black rounded-md' onChange={(e) => setEmail(e.target.value)}/>
                                                            </div>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>Gender</label>
                                                                           <select name='gender' className='w-full h-[50px] my-2 px-2 text-black rounded-md'   onChange={(e) => setGender(e.target.value)}>
                                                                              <option>Select Gender</option>
                                                                              <option value='male'>Male</option>
                                                                              <option value='female'>Female</option>
                                                                        </select>
                                                            </div>
                                                </div>

                                                <div className='lg:flex lg:items-center lg:justify-between mb-3'>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>Contact</label>
                                                                           <input type='text' name='contact' className='w-full h-[50px] my-2 px-5 text-black rounded-md'  placeholder='Contact'  onChange={(e) => setContact(e.target.value)}/>
                                                            </div>
                                                            <div className='w-[48%]'>
                                                                        <label className='block text-[14px]'>DOB</label>
                                                                        <input type='date' name='dob' className='w-full h-[50px] my-2 px-5 text-black rounded-md' onChange={(e) => setDob(e.target.value)}/>
                                                            </div>
                                                </div>

                                                  <div className='lg:flex lg:items-center lg:justify-between mb-3'>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>State</label>
                                                                           <input type='text' name='state' placeholder='State' className='w-full h-[50px] my-2 px-5 text-black rounded-md' onChange={(e) => setState(e.target.value)}/>
                                                            </div>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>City</label>
                                                                           <input type='text' name='city' placeholder='City' className='w-full h-[50px] my-2 px-5 text-black rounded-md' onChange={(e) => setCity(e.target.value)}/>
                                                            </div>
                                                </div>

                                                <div className='lg:flex lg:items-center lg:justify-between mb-3'>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>Address</label>
                                                                           <input type='text' name='address' placeholder='Address' className='w-full h-[50px] my-2 px-5 text-black rounded-md' onChange={(e) => setAddress(e.target.value)}/>
                                                            </div>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>Position</label>
                                                                           <select name='position' className='w-full h-[50px] my-2 px-2 text-black rounded-md'  onChange={(e) => setPosition(e.target.value)}>
                                                                                    <option>Set Position</option>
                                                                                    <option value="principal ">Principal</option>
                                                                                    <option value="vice principal">Vice Principal</option>
                                                                                    <option value="director of studies">Director Of Studies</option>
                                                                                    <option value="human resource">Human Resource</option>
                                                                              </select>
                                                            </div>
                                                </div>

                                                <div className='lg:flex lg:items-center lg:justify-between mb-3'>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>Role</label>
                                                                           <select name='role' className='w-full h-[50px] my-2 px-2 text-black rounded-md'   onChange={(e) => setRole(e.target.value)}>
                                                                                    <option>Set Role</option>
                                                                                    <option value="admin">Admin</option>
                                                                                    <option value="c_teacher">C_Teacher</option>
                                                                                    <option value="s_teacher">S_Teacher</option>
                                                                              </select>
                                                            </div>
                                                            <div className='w-[48%]'>
                                                                  <label className='block text-[14px]'>Image</label>
                                                                  <input type='file' name='image' className='w-full h-[50px] my-2 px-5 text-black rounded-md bg-white py-3'/>
                                                            </div>
                                                </div>

                                                <button className=' bg-dark-purple text-white py-5 px-16 rounded-md mb-5' >Add Staff</button>
                                                {error && <div className='error'>{error}</div>}
        </form>
  </div>
  )
}

export default StaffForm