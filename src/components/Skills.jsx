import React from 'react';
import { DiReact, DiNodejs, DiNodejsSmall, DiMongodb, DiNpm } from "react-icons/di";
import { TbBrandFigma, TbBrandFirebase, TbBrandGithub, TbBrandTailwind, TbBrandBootstrap, TbBrandNpm, TbBrandVscode } from "react-icons/tb";




const Skills = () => {
  return (
    <div id="skills" className='mzx-w-7xl mx-auto'>
      <div className='flex justify-center items-center'>
        <DiReact className='mr-1 rounded-full text-cyan-500' size={50} />
        <DiReact className='mr-1 rounded-full text-cyan-500 w-24 h-24' />
        <DiNodejsSmall className='mr-1 rounded-full text-cyan-500 w-24 h-24' />
        <DiMongodb className='mr-1 rounded-full text-cyan-500 w-24 h-24' />
        <DiNpm className='mr-1 rounded-full text-cyan-500 w-24 h-24' />
        <TbBrandFigma className='mr-1 rounded-full text-cyan-500 w-24 h-24' />
        <TbBrandFirebase className='mr-1 rounded-full text-cyan-500 w-24 h-24' />
        <TbBrandGithub className='mr-1 rounded-full text-cyan-500 w-24 h-24' />
        <TbBrandTailwind className='mr-1 rounded-full text-cyan-500 w-24 h-24' />
        <TbBrandBootstrap className='mr-1 rounded-full text-cyan-500 w-24 h-24' />
        <TbBrandNpm className='mr-1 rounded-full text-cyan-500 w-24 h-24' />
        <TbBrandVscode className='mr-1 rounded-full text-cyan-500 w-24 h-24' />
        <DiNodejs className='mr-1 rounded-full text-cyan-500 w-24 h-24' />
      </div>
    </div>
  );
};

export default Skills;

