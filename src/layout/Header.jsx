import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import hamburger from '../assets/images/hamburger.svg'
import cross from '../assets/images/cross.svg'

export default function Header() {
  const [navShow, setNavShow] = useState(false)
  const headerLink = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/' },
    { title: 'Projects', link: '/' },
    { title: 'Contact', link: '/' },
  ]
  return (
    <>
      <nav className="flex items-center justify-between py-[25px] pl-[50px] pr-[40px] bg-white shadow-sm fixed w-full top-0 left-0 z-10">
        <h3 className="">Abinash Rai</h3>

        <ul className="flex gap-4 [&>li]:font-medium [&>li>a]: bg-white md:hidden">
          {headerLink.map((item) => (
            <li className="bg-white">
              <Link to={item.link} className="hover:text-blue-200 bg-white">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          className="bg-transparent w-6 hidden md:block"
          onClick={() => setNavShow(true)}
        >
          <img src={hamburger} alt="" className="" />
        </span>
      </nav>
      <div
        aria-current={navShow}
        className=" justify-center items-center h-screen w-full fixed  top-0 bg-white transition-[left] ease-in-out duration-500 hidden md:left-[-100%] md:flex md:aria-[current=true]:left-0 z-10 min-h-screen"
      >
        <span
          className="absolute right-6 top-6 bg-transparent w-6"
          onClick={() => setNavShow(false)}
        >
          <img src={cross} alt="" className="bg-transparent" />
        </span>
        <ul className="  [&>li]:font-medium [&>li>a]:text-lg bg-white ">
          {headerLink.map((item) => (
            <li className="bg-white mb-4">
              <Link to={item.link} className="hover:text-blue-200 bg-white">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
