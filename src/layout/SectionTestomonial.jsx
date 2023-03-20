import React from 'react'
import sisir from '../assets/images/sisir.jpg'
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
  return (
    <section className="bg-white" id="testomonial">
      <div className="container">
        <div className="bg-white p-5">
          <h4 class="mb-2 ">Testomonial</h4>
          <h3 class="mb-[60px] "> What people think about me</h3>

          <div className="flex justify-between flex-wrap gap-5">
            {testomonialData.map((item) => (
              <div className="shadow-[0_0_10px_rgba(0,0,0,0.1)]   p-5  basis-[40%] grow rounded-lg md:max-w-full">
                <div className="flex gap-2 mb-4">
                  <div className="w-12 h-12 rounded-[50%] overflow-hidden">
                    <img src={sisir} alt="" />
                  </div>
                  <div className="">
                    <h4 class=" text-[#2d2e32]">Sisir Joshi</h4>
                    <p className="">Senior Back-End Developer</p>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora quae ipsam aperiam est ratione deserunt accusamus
                  dolorem nobis omnis repellat doloremque unde sapiente nesciunt
                  porro fugiat, perferendis odit explicabo amet!
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
