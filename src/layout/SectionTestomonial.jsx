import React from 'react'
import sisir from '../assets/images/sisir.jpg'
import Slider from 'react-slick'
import { LeftArrow, RightArrow } from '../assets/icon'
export default function SectionTestomonial() {
  const testomonialData = [
    {
      name: 'Sisir Joshi',
      img: sisir,
      post: 'Senior Back-End Developer',
      detail:
        '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quae ipsam aperiam est ratione deserunt accusamus dolorem nobis omnis repellat doloremque unde sapiente nesciunt porro fugiat, perferendis odit explicabo amet!',
    },
    {
      name: 'Sisir Joshi',
      img: sisir,
      post: 'Senior Back-End Developer',
      detail:
        '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quae ipsam aperiam est ratione deserunt accusamus dolorem nobis omnis repellat doloremque unde sapiente nesciunt porro fugiat, perferendis odit explicabo amet!',
    },
    {
      name: 'Sisir Joshi',
      img: sisir,
      post: 'Senior Back-End Developer',
      detail:
        '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quae ipsam aperiam est ratione deserunt accusamus dolorem nobis omnis repellat doloremque unde sapiente nesciunt porro fugiat, perferendis odit explicabo amet!',
    },
    {
      name: 'Sisir Joshi',
      img: sisir,
      post: 'Senior Back-End Developer',
      detail:
        '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quae ipsam aperiam est ratione deserunt accusamus dolorem nobis omnis repellat doloremque unde sapiente nesciunt porro fugiat, perferendis odit explicabo amet!',
    },
  ]
  const settings = {
    dots: true,
    // arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: (
      <RightArrow propStyle="absolute top-[50%] right-[-40px] translate-y-[-50%] cursor-pointer" />
    ),
    prevArrow: (
      <LeftArrow propStyle="absolute top-[50%] left-[-40px] translate-y-[-50%] cursor-pointer" />
    ),
    responsive: [
      {
        breakpoint: 500,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section className="bg-white " id="testomonial">
      <div className="container">
        <div className="bg-white p-5">
          <h4 class="mb-2 ">Testomonial</h4>
          <h3 class="mb-[60px] "> What people think about me</h3>
          <Slider {...settings} className="[&>.slick-list]:m-[-16px] ">
            {testomonialData.map((item) => (
              <div className="px-4 py-4">
                <div className="shadow-[0_0_10px_rgba(0,0,0,0.1)] p-5  rounded-lg md:max-w-full">
                  <div className="flex gap-2 mb-4 lg:flex-col lg:items-center">
                    <div className="w-12 h-12 rounded-[50%] overflow-hidden">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="">
                      <h4 class=" text-[#2d2e32]">{item.name}</h4>
                      <p className="">{item.post}</p>
                    </div>
                  </div>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </Slider>
          {/* <div className="flex justify-between flex-wrap gap-5"></div> */}
        </div>
      </div>
    </section>
  )
}
