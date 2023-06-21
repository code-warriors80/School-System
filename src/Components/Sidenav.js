import React, {useState} from 'react'
import logo from '../image/1574619145-removebg-preview.png'
import { Link } from 'react-router-dom';

// icons
import home from '../icons/icons8-home-94.png'
import message from '../icons/icons8-message-94.png'
import staff from '../icons/icons8-users-94.png'
import classes from '../icons/icons8-school-building-94.png'
import student from '../icons/icons8-student-male-94.png'
import subject from '../icons/icons8-books-94.png'
import bank from '../icons/icons8-card-wallet-94.png'
import gear from '../icons/icons8-gear-94.png'
import review from '../icons/icons8-communicate-94.png'
import logout from '../icons/icons8-shutdown-94.png'
import arrow from '../icons/icons8-arrow-94 (1).png'

const Sidenav = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    {title: "Dashboard", src: <img src={home} alt='' className={`${!open ? 'w-7' : 'w-7'}`}/>, link: "/"},
    {title: "Inbox", src: <img src={message} alt='' className={`${!open ? 'w-7' : 'w-7'}`}/>},
    {title: "Staff", src: <img src={staff} alt='' className={`${!open ? 'w-7' : 'w-7'}`}/>, link: "/staff" , gap: true},
    {title: "Student", src: <img src={student} alt='' className={`${!open ? 'w-7' : 'w-9'}`}/>,link: "/student"},
    {title: "Class", src: <img src={classes} alt='' className={`${!open ? 'w-7' : 'w-7'}`}/>, link: "/class"},
    {title: "Subjects", src: <img src={subject} alt='' className={`${!open ? 'w-7' : 'w-7'}`}/>, link: "/"},
    {title: "Financial", src: <img src={bank} alt='' className={`${!open ? 'w-7' : 'w-7'}`}/>},
    {title: "Testimonials", src: <img src={review} alt='' className={`${!open ? 'w-7' : 'w-7'}`}/> , gap: true},
    {title: "Setting", src: <img src={gear} alt='' className={`${!open ? 'w-7' : 'w-7'}`}/>},
    {title: "Logout", src: <img src={logout} alt='' className={`${!open ? 'w-7' : 'w-7'}`}/>, gap: true},
    
  ]
  return (
    <div className={`${open ? 'w-72' : 'w-20'} p-5 pt-8 duration-300 h-screen bg-dark-purple relative`}>
        <div>
          <button className='absolute cursor-pointer -right-3 bg-white top-3 border-2 border-dark-purple p-2 rounded-full' onClick={() => setOpen(!open)}><img src={arrow} alt='' className={`${!open ? 'w-5' : 'rotate-180 w-5'}`} /></button>
        </div>

        <div className='flex items-center gap-x-4 items-center'>
          <img src={logo} alt='' className={`cursor-pointer duration-500 ${!open ? 'w-10' : 'w-14'}`}/>
          <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Jethro Model</h1>
        </div>

        <ul className='pt-6'>
          {Menus.map((menu, index) => (
            <li key={index} className={`text-gray-300 text-sm cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9"  :  "mt-2"}`}>
              <Link to={menu.link} className='flex items-center gap-x-4'>
                  <i>{menu.src}</i>
                  <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
              </Link>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Sidenav