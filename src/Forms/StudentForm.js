import React from 'react'
<<<<<<< HEAD
import { FaTimes } from 'react-icons/fa'
=======
import close from '../icons/icons8-close-94.png'
>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d

const StudentForm = ({setModel}) => {
  return (
    <div className='fixed w-[66%] p-5 bg-light-gray h-[90vh]'>
        <div className='flex items-center justify-between'>
            <h1 className='text-[20px]'>Add Student</h1>
<<<<<<< HEAD
            <button className='text-[20px]' onClick={() => setModel(false)}><FaTimes /></button>
=======
            <button className='text-[20px]' onClick={() => setModel(false)}><img src={close} alt='' className='w-5' /></button>
>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d
        </div>
  </div>
  )
}

export default StudentForm