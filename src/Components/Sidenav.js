import React, {useState} from 'react'
import logo from '../image/1574619145-removebg-preview.png'
import { FaArrowLeft, FaBook,  FaChalkboardTeacher, FaUserGraduate, FaUsers } from 'react-icons/fa'
import { BsBank2, BsGear, BsPatchCheck, BsSpeedometer2, BsBoxArrowRight, BsMessenger } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Sidenav = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    {title: "Dashboard", src: <BsSpeedometer2 />, link: "/"},
    {title: "Inbox", src: <BsMessenger />},
    {title: "Staff", src: <FaUsers />, link: "/staff" , gap: true},
    {title: "Student", src: <FaUserGraduate />, link: "/student"},
    {title: "Class", src: <FaChalkboardTeacher />, link: "/class"},
    {title: "Subjects", src: <FaBook />, link: "/"},
    {title: "Financial", src: <BsBank2 />},
    {title: "Testimonials", src: <BsPatchCheck /> , gap: true},
    {title: "Setting", src: <BsGear />},
    {title: "Logout", src: <BsBoxArrowRight /> , gap: true},
  ]
  return (
    <div className={`${open ? 'w-72' : 'w-20'} p-5 pt-8 duration-300 h-screen bg-dark-purple relative`}>
        <div>
          <button className='absolute cursor-pointer -right-3 bg-white top-3 border-2 border-dark-purple p-2 rounded-full' onClick={() => setOpen(!open)}><FaArrowLeft className={`${!open && 'rotate-180'}`}/></button>
        </div>

        <div className='flex items-center gap-x-4 items-center'>
          <img src={logo} alt='' className={`cursor-pointer duration-500 ${!open ? 'w-10' : 'w-14'}`}/>
          <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Jethro Model</h1>
        </div>

        <ul className='pt-6'>
          {Menus.map((menu, index) => (
            <li key={index} className={`text-gray-300 text-sm cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9"  :  "mt-2"}`}>
              <Link to={menu.link} className='flex items-center gap-x-4'>
                  <i className="text-2xl">{menu.src}</i>
                  <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
              </Link>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Sidenav