import React, {useState} from 'react'

import close from '../icons/icons8-close-94.png'

import { useStaffsContext } from '../hooks/useStaffsContext'

const StaffForm = ({setModel}) => {
      const [title, setTitle] = useState('');
      const [surname, setSurname] = useState('')
      const [firstname, setFirstname] = useState('')
      const [lastname, setLastname] = useState('')
      const [email, setEmail] = useState('')
      const [gender, setGender] = useState('')
      const [contact, setContact] = useState('')
      const [address, setAddress] = useState('')
      const [state, setState] = useState('')
      const [city, setCity] = useState('')
      const [position, setPosition] = useState('')
      const [role, setRole] = useState('')
      const [error, setError] = useState(null)
      const [emptyField, setEmptyField] = useState([])
      const [dispatch] = useStaffsContext()

      const handleSubmit = async (e) => {
            e.preventDefault()

            const staffs = {title, surname, firstname, lastname, email, gender, contact, address, state, city, position, role}

            const response = fetch('/addStaff', {
                  method: 'POST',
                  body: JSON.stringify(staffs),
                  headers: {
                        'Content_Type': 'application/json'
                  }
            })
            const json = await response.json()

            if(!response.ok)
            {
                  setError(json.error)
                  setEmptyField(json.emptyField)
            }
            if(response.ok){
                  setTitle('')
                  setSurname('')
                  setFirstname('')
                  setLastname('')
                  setEmail('')
                  setGender('')
                  setContact('')
                  setAddress('')
                  setState('')
                  setCity('')
                  setPosition('')
                  setRole('')
                  setError(null)
                  setEmptyField([])
                  console.log('new workout added', json);
                  dispatch({type: 'CREATE_STAFF', payload: json})
            }
      }


  return (
    <div className='scroll fixed w-[66%] p-5 bg-light-gray h-[92vh] overflow-scroll'>
        <div className='flex items-center justify-between'>
            <h1 className='text-[20px]'>Add Staff</h1>
            <button className='text-[20px]' onClick={() => setModel(false)}><img src={close} alt='' className='w-5' /></button>
        </div>

        <form className='mt-10 mx-auto' onSubmit={handleSubmit}>
                                                <div className='lg:flex lg:items-center lg:justify-between mb-3'>
                                                            <div className='w-[48%]'>
                                                                               <label className='block text-[14px]'>Title</label>
                                                                               <select name='position' className='w-full h-[50px] my-2 px-2 rounded-md text-black' onChange={(e) => setTitle(e.target.value)}>
                                                                                    <option>Set Title</option>
                                                                                    <option value="principal ">Mr</option>
                                                                                    <option value="vice principal">Mrs</option>
                                                                                    <option value="director of studies">Miss</option>
                                                                              </select>
                                                            </div>
                                                            <div className='w-[48%]'>
                                                                  <label className='block text-[14px]'>SurName</label>
                                                                  <input type='text' name='surname' placeholder='SurName'  className={emptyField.includes(`surname w-full h-[50px] border-2 border-solid border-red-500 my-2 px-2 rounded-md text-black`) ? 'error' : 'w-full h-[50px] my-2 px-2 rounded-md text-black'} onChange={(e) => setSurname(e.target.value)}/>
                                                            </div>
                                                </div>

                                                <div className='lg:flex lg:items-center lg:justify-between mb-3'>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>FirstName</label>
                                                                           <input type='text' name='firstname' placeholder='First Name' className={emptyField.includes(`firstname w-full h-[50px] border-2 border-solid border-red-500 my-2 px-2 rounded-md text-black`) ? 'error' : 'w-full h-[50px] my-2 px-2 rounded-md text-black'} onChange={(e) => setFirstname(e.target.value)}/>
                                                            </div>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>LastName</label>
                                                                           <input type='text' name='lastname' placeholder='LastName' className={emptyField.includes(`lastname w-full h-[50px] border-2 border-solid border-red-500 my-2 px-2 rounded-md text-black`) ? 'error' : 'w-full h-[50px] my-2 px-2 rounded-md text-black'} onChange={(e) => setLastname(e.target.value)}/>
                                                            </div>
                                                </div>

                                                <div className='lg:flex lg:items-center lg:justify-between mb-3'>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>Email</label>
                                                                           <input type='email' name='email' placeholder='Email' className='w-full h-[50px] my-2 px-5 text-black rounded-md' onChange={(e) => setEmail(e.target.value)}/>
                                                            </div>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>Gender</label>
                                                                           <select name='gender' className={emptyField.includes(`gender w-full h-[50px] my-2 px-2 rounded-md text-black`) ? 'error' : 'w-full h-[50px] my-2 px-2 rounded-md text-black'} onChange={(e) => setGender(e.target.value)}>
                                                                              <option>Select Gender</option>
                                                                              <option value='male'>Male</option>
                                                                              <option value='female'>Female</option>
                                                                        </select>
                                                            </div>
                                                </div>

                                                <div className='lg:flex lg:items-center lg:justify-between mb-3'>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>Contact</label>
                                                                           <input type='text' name='contact' placeholder='Contact' className={emptyField.includes(`contact w-full h-[50px] border-2 border-solid border-red-500 my-2 px-2 rounded-md text-black`) ? 'error' : 'w-full h-[50px] my-2 px-2 rounded-md text-black'} onChange={(e) => setContact(e.target.value)}/>
                                                            </div>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>Address</label>
                                                                           <input type='text' name='address' placeholder='Address' className='w-full h-[50px] my-2 px-5 text-black rounded-md' onChange={(e) => setAddress(e.target.value)}/>
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
                                                                           <label className='block text-[14px]'>Position</label>
                                                                           <select name='position' className={emptyField.includes(`position w-full h-[50px] my-2 px-2 rounded-md text-black`) ? 'error' : 'w-full h-[50px] my-2 px-2 rounded-md text-black'} onChange={(e) => setPosition(e.target.value)}>
                                                                                    <option>Set Position</option>
                                                                                    <option value="principal ">Principal</option>
                                                                                    <option value="vice principal">Vice Principal</option>
                                                                                    <option value="director of studies">Director Of Studies</option>
                                                                                    <option value="human resource">Human Resource</option>
                                                                              </select>
                                                            </div>
                                                            <div className='w-[48%]'>
                                                                           <label className='block text-[14px]'>Role</label>
                                                                           <select name='position' className={emptyField.includes(`role w-full h-[50px] my-2 px-2 rounded-md text-black`) ? 'error' : 'w-full h-[50px] my-2 px-2 rounded-md text-black'} onChange={(e) => setRole(e.target.value)}>
                                                                                    <option>Set Role</option>
                                                                                    <option value="">Admin</option>
                                                                                    <option value="">C_Teacher</option>
                                                                                    <option value="">S_Teacher</option>
                                                                              </select>
                                                            </div>
                                                </div>

                                                <button className=' bg-dark-purple text-white py-5 px-16 rounded-md mb-5' >Add Staff</button>
                                                {error && <div className='error'>{error}</div>}
        </form>
  </div>
  )
}

export default StaffForm