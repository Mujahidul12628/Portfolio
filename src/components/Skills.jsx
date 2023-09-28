import React from 'react';
import { DiReact, DiNodejs, DiNodejsSmall, DiMongodb, DiNpm, DiIllustrator, DiPhotoshop, DiJavascript1 } from "react-icons/di";
import { TbBrandFigma, TbBrandFirebase, TbBrandGithub, TbBrandTailwind, TbBrandBootstrap, TbBrandNpm, TbBrandVscode } from "react-icons/tb";
import { SiAdobexd, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMongodb, SiExpress } from "react-icons/si";





const Skills = () => {
  return (
    <div id="skills" className='mx-auto max-w-7xl'>
      <div className='flex items-center justify-center mb-5 md:mb-8'>
        <h3 className="text-4xl font-semibold">
          <span className="text-cyan-500">Skill</span>
        </h3>
      </div>
      <div className='grid justify-between grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 item-center md:mx-8' >

        <div className='px-8 py-4 mx-auto border-2 rounded-md sm:px-12 sm:py-4 md:px-16 md:py-5 border-cyan-500'>
          <DiReact className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
          <div className='flex items-center justify-center mt-2'>
            React JS
          </div>

        </div>

        <div className='px-8 py-4 mx-auto border-2 rounded-md sm:px-12 sm:py-4 md:px-16 md:py-5 border-cyan-500'>
          <DiJavascript1 className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
          <div className='flex items-center justify-center mt-2'>
            Javascript
          </div>
        </div>


        <div className='px-8 py-4 mx-auto border-2 rounded-md sm:px-12 sm:py-4 md:px-16 md:py-5 border-cyan-500'>
          <TbBrandBootstrap className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
          <div className='flex items-center justify-center mt-2'>
            Bootstrap
          </div>

        </div>
        <div className='px-8 py-4 mx-auto border-2 rounded-md sm:px-12 sm:py-4 md:px-16 md:py-5 border-cyan-500'>
          <TbBrandTailwind className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
          <div className='flex items-center justify-center mt-2'>
            Tailwind
          </div>

        </div>

        <div className='px-8 py-4 mx-auto border-2 rounded-md sm:px-12 sm:py-4 md:px-16 md:py-5 border-cyan-500'>
          <DiNodejsSmall className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
          <div className='flex items-center justify-center mt-2'>
            Node JS
          </div>

        </div>

        <div className='px-8 py-4 mx-auto border-2 rounded-md sm:px-12 sm:py-4 md:px-16 md:py-5 border-cyan-500'>
          <SiExpress className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
          <div className='flex items-center justify-center mt-2'>
            Express
          </div>

        </div>
        <div className='px-8 py-4 mx-auto border-2 rounded-md sm:px-12 sm:py-4 md:px-16 md:py-5 border-cyan-500'>
          <BiLogoMongodb className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
          <div className='flex items-center justify-center mt-2'>
            Mongodb
          </div>

        </div>
        <div className='px-8 py-4 mx-auto border-2 rounded-md sm:px-12 sm:py-4 md:px-16 md:py-5 border-cyan-500'>
          <TbBrandGithub className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
          <div className='flex items-center justify-center mt-2'>
            Github
          </div>
        </div>
        <div className='px-8 py-4 mx-auto border-2 rounded-md sm:px-12 sm:py-4 md:px-16 md:py-5 border-cyan-500'>
          <TbBrandFirebase className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
          <div className='flex items-center justify-center mt-2'>
            Firebase
          </div>
        </div>
        <div className='px-8 py-4 mx-auto border-2 rounded-md sm:px-12 sm:py-4 md:px-16 md:py-5 border-cyan-500'>
          <TbBrandFigma className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
          <div className='flex items-center justify-center mt-2'>
            Figma
          </div>
        </div>
        <div className='px-8 py-4 mx-auto border-2 rounded-md sm:px-12 sm:py-4 md:px-16 md:py-5 border-cyan-500'>
          <DiPhotoshop className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
          <div className='flex items-center justify-center mt-2'>
            Photoshop
          </div>
        </div>

        <div className='px-8 py-4 mx-auto border-2 rounded-md sm:px-12 sm:py-4 md:px-16 md:py-5 border-cyan-500'>
          <DiIllustrator className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
          <div className='flex items-center justify-center mt-2'>
            Illustrator
          </div>
        </div>




        {/* <SiAdobexd className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
        <SiAdobephotoshop className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
        <SiAdobeillustrator className='w-24 h-24 mr-1 rounded-full text-cyan-500' />

        <DiIllustrator className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
        <SiAdobexd className='w-24 h-24 mr-1 ' />
        <DiMongodb className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
        <DiNpm className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
        <TbBrandFigma className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
        <TbBrandFirebase className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
        <TbBrandGithub className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
        <TbBrandTailwind className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
        <TbBrandBootstrap className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
        <TbBrandNpm className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
        <TbBrandVscode className='w-24 h-24 mr-1 rounded-full text-cyan-500' />
        <DiNodejs className='w-24 h-24 mr-1 rounded-full text-cyan-500' /> */}
      </div>
    </div>
  );
};

export default Skills;

