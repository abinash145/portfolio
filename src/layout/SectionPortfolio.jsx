import React from 'react'
import makkuse from '../assets/images/makkusé.png'
import gurkhasFinance from '../assets/images/gurkhasFInance.png'
import { Github } from '../assets/icon'
export default function SectionPortfolio() {
  const portfolioData = [
    {
      title: 'Makkuse',
      description:
        'Makkuse is an online website for most delectavke Gundpak, Pustakari, etc made from the freshest khuwa that arrives from the hish altitudes of Kavre, Nepal.',
      tech: ['React', 'SCSS'],
      img: makkuse,
      link: 'https://www.makkuse.com/',
    },
    {
      title: 'Gurkha Finance',
      description:
        'Gurkha is an online website for most  delectavke Gundpak, Pustakari, etc made from the freshest khuwa that arrives from the hish altitudes of Kavre, Nepal.',
      tech: ['React', 'SCSS'],
      img: gurkhasFinance,
      link: 'https://www.gurkhasfinance.com.np/',
    },
  ]
  return (
    <section id="project" className="">
      <div className="container">
        <h4 className="mb-2 ">Portfolio</h4>
        <h3 className="mb-[60px] ">Some of the project I have done</h3>
        {portfolioData.map((item, index) => (
          <div
            className={`bg-white flex p-5 rounded-xl lg:flex-col lg:items-center  shadow-[0_0_10px_rgba(0,0,0,0.1)] mb-[50px] ${
              index % 2 != 0 && 'flex-row-reverse'
            }`}
          >
            <a
              href={item.link}
              target="_blank"
              className="w-[530px] max-w-full h-[360px] overflow-hidden  rounded-xl "
            >
              <img
                src={item.img}
                alt=""
                className="transition-[transform] hover:translate-y-[-77%] translate-y-0 duration-[10000ms]"
              />
            </a>
            <div className="flex justify-center grow ">
              <div className="w-[300px] pt-4">
                <h4 className="mb-2 text-center text-[#2d2e32]">
                  {item.title}
                </h4>
                <p className="mb-6 text-center">{item.description}</p>
                <div className="flex justify-center gap-2 mb-[30px]">
                  {item.tech.map((tech) => (
                    <span className=" px-4 py-2 font-bold text-base  shadow-[0_0_10px_rgba(0,0,0,0.1)]  ">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6 justify-center item">
                  <div className="flex gap-1 items-end">
                    <p>Code</p>
                    <Github />
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    className="flex gap-1 items-end"
                  >
                    <p>Live Demo</p>
                    <Github />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
