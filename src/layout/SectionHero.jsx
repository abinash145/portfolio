import React from 'react'
import { Linkedin, Github, linkedin } from '../assets/icon'
import html from '../assets/images/html.svg'
import sass from '../assets/images/sass.svg'
import react from '../assets/images/react.svg'
import tailwind from '../assets/images/tailwind.svg'
import js from '../assets/images/js.svg'
import css from '../assets/images/css.svg'
export default function SectionHero() {
  const techStackImage = [html, css, sass, js, react, tailwind]
  return (
    <section className="mt-20 min-h-screen flex items-center">
      <div className="container">
        <div className="content max-w-[752px] m-auto">
          <div className="flex justify-center smd:flex-col-reverse smd:items-center">
            <div className="max-w-[27rem] smd:text-center">
              <h1 className="text-5xl font-bold my-4 ">
                Front-End React Developer
              </h1>
              <p className="mb-4">
                Hi, I'm Abinash Rai. A passionate Front-end React Developer
                based in Lalitpur, Kathmandu.
              </p>
              <div className="flex items-center gap-2 smd:justify-center">
                <div className="text-blue-200">
                  <div className="text-blue-200">{linkedin}</div>
                </div>
                <div className="">
                  <Github />
                </div>
              </div>
            </div>
            <div
              id="profileImage"
              className="w-[20rem] h-[20rem] profileImage "
            >
              {/* <img src={profile} alt="" className="" /> */}
            </div>
          </div>
          <div className="flex items-center my-20 smd:flex-col ">
            <h2 className="pr-4 border-r-2 mr-8 smd:border-r-0 smd:border-b-2 smd:pr-[initial] smd:pb-2  smd:mb-4">
              Tech Stack
            </h2>
            <div>
              <ul className="flex gap-5 flex-wrap justify-center">
                {techStackImage.map((img) => (
                  <li className="w-[65px] h-[65px] px-4 rounded-[50%] overflow-hidden flex justify-center items-center bg-white">
                    <img src={img} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
