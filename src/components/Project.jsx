import React from 'react';

import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
// import project4 from "../assets/images/project-6.jpg";



const Project = () => {

  return (
    <section id="projects" className='mx-auto max-w-7xl  sm:px-0'>
      <div className='flex items-center justify-center mx-auto py-12 text-4xl font-bold text-cyan-500'>
        Projects
      </div>
      <div className='flex justify-end item-center'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mx-2  md:mx-8'>
          <div className=''>
            <div className="">
              <img
                src={project2}
                alt=""
                className={`w-full shadowed `}
              />
              <div className='px-2 back-color'>
                <div className='pt-4 pb-2 text-md md:text-lg text-cyan-500'>
                  Savoury Bite <span>(Food Website)</span>
                </div>
                <div className='text-xs text-justify '>
                  It's a travel website. Users can choose favored spots, securing discounts via special deals. Express has been implemented for getting the data from the server side.
                </div>
                <div className='flex flex-wrap items-center py-2 text-sm'>
                  <span> Technology:</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>React JS</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>Tailwind</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>Countup</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>Swiper JS</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>Node JS</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>Express</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>Firebase</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>Vercel</span>
                </div>
                <div className='pt-3 pb-5'>
                  <div className='flex item-center justify-start'>
                    <a href="https://trek-vibes.web.app/" target="_blank" class='px-5 py-1 text-sm sm:text-xs md:text-sm lg:text-md mr-3 rounded-sm hover:border-2 hover:border-cyan-500 bg-cyan-600 hover:bg-cyan-800'>
                      <span>Live</span>
                    </a>
                    <a href="https://github.com/Mujahidul12628/Travel" target="_blank" className='px-3 py-1 text-xs xs:text-sm sm:text-xs md:text-sm lg:text-md  mr-3 border rounded-sm border-cyan-500 hover:bg-cyan-600'>
                      <span>Github-Client</span>
                    </a>
                    <a href="https://github.com/Mujahidul12628/Travel-Server" target="_blank" className='px-3 py-1 text-xs xs:text-sm sm:text-xs md:text-sm lg:text-md border rounded-sm border-cyan-500 hover:bg-cyan-600'>
                      <span>Github-Server</span>
                    </a>
                  </div>
                </div>




              </div>

            </div>

          </div>
          <div className=''>
            <div className="">
              <img
                src={project1}
                alt=""
                className={`w-full shadowed `}
              />
              <div className='px-2 back-color'>
                <div className='pt-4 pb-2 text-md md:text-lg text-cyan-500'>
                  Savoury Bite <span>(Food Website)</span>
                </div>
                <div className='text-xs text-justify '>

                  Firebase authentication has been integrated for login and registration. Implement Protected Routes, Chef recipes section can't be accessed without logging.
                </div>
                <div className='flex flex-wrap items-center py-2 text-sm'>
                  <span> Technology:</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>React JS</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>Tailwind</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>Daisy UI</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>Toastyfy</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>Nodemon</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>Express</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>Firebase</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>Vercel</span>

                </div>
                <div className='pt-3 pb-5'>
                  <div className='flex item-center justify-start'>
                    <a href="https://savoury-bite.web.app/" target="_blank" class='px-5 py-1 text-sm sm:text-xs md:text-sm lg:text-md mr-3 rounded-sm hover:border-2 hover:border-cyan-500 bg-cyan-600 hover:bg-cyan-800'>
                      <span>Live</span>
                    </a>
                    <a href="https://github.com/Mujahidul12628/savoury-bite" target="_blank" className='px-3 py-1 text-xs xs:text-sm sm:text-xs md:text-sm lg:text-md  mr-3 border rounded-sm border-cyan-500 hover:bg-cyan-600'>
                      <span>Github-Client</span>
                    </a>
                    <a href="https://github.com/Mujahidul12628/savoury-bite-server" target="_blank" className='px-3 py-1 text-xs xs:text-sm sm:text-xs md:text-sm lg:text-md border rounded-sm border-cyan-500 hover:bg-cyan-600'>
                      <span>Github-Server</span>
                    </a>
                  </div>
                </div>




              </div>

            </div>

          </div>
          <div className=''>
            <div className="">
              <img
                src={project3}
                alt=""
                className={`w-full shadowed `}
              />
              <div className='px-2 back-color'>
                <div className='pt-4 pb-2 text-md md:text-lg text-cyan-500'>
                  Toys Galaxy <span>(Toys Website)</span>
                </div>
                <div className='text-xs text-justify '>
                  Google & Email/password-based authentication system integrated. React tab implemented for selecting different categories of toys details.
                </div>
                <div className='flex flex-wrap items-center py-2 text-sm'>
                  <span> Technology:</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>React JS</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>Tailwind</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>React Spring</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>React Tab</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>Nodemon</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>Express</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>Firebase</span>
                  <span className='px-2 py-1 mx-2 my-1 text-xs rounded-sm tech-box'>Vercel</span>
                </div>
                <div className='pt-3 pb-5'>
                  <div className='flex item-center justify-start'>
                    <a href="https://toys-galaxy-9f997.web.app/" target="_blank" class='px-5 py-1 text-sm sm:text-xs md:text-sm lg:text-md mr-3 rounded-sm hover:border-2 hover:border-cyan-500 bg-cyan-600 hover:bg-cyan-800'>
                      <span>Live</span>
                    </a>
                    <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-Mujahidul12628" target="_blank" className='px-3 py-1 text-xs xs:text-sm sm:text-xs md:text-sm lg:text-md  mr-3 border rounded-sm border-cyan-500 hover:bg-cyan-600'>
                      <span>Github-Client</span>
                    </a>
                    <a href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-Mujahidul12628" target="_blank" className='px-3 py-1 text-xs xs:text-sm sm:text-xs md:text-sm lg:text-md border rounded-sm border-cyan-500 hover:bg-cyan-600'>
                      <span>Github-Server</span>
                    </a>
                  </div>
                </div>




              </div>

            </div>

          </div>





        </div>
      </div>
    </section>
  );
};

export default Project;