import React from 'react'
import aboutme from '../assets/images/aboutMe.jpg'
import frontEnd from '../assets/images/frontEndDev.svg'
import laptopBoy from '../assets/images/laptopAvatar.png'

export default function SectionAbout() {
  return (
    <section className="bg-white">
      <div className="container bg-white ">
        <div className="flex lg:flex-col lg:items-center lg:gap-8">
          <div className="w-[50%] relative pr-14 lg:pr-[initial] lg:grow lg:w-[initial] bg-white ">
            <img src={aboutme} alt="" className="max-w-[490px] rounded-lg" />
            <div className="w-[190px] h-[190px] absolute bottom-[-70px] rounded-[50%] overflow-hidden right-0 translate-y-[50%] animate-rotated lg:hidden ">
              <img src={frontEnd} alt="" className="   bg-white w-full" />
            </div>
            <img
              src={laptopBoy}
              alt=""
              className="w-[60px] h-[60px] absolute right-[13%]  bottom-[36px] translate-y-[50%] lg:hidden"
            />
          </div>
          <div className="w-[50%] lg:grow lg:w-[initial] bg-white ">
            <h4 className="mb-2">ABOUT ME</h4>
            <h3 className="mb-4">
              A dedicated Front-end Developer based in Kathmandu, Nepal
            </h3>
            <p>
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
