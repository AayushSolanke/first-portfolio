import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'


const Hero = () => {
  return (
    <div className="pb-20 pt-36 mt-9 h-screen" id='home'>
        <div>
            <div>
                <Spotlight
                className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                fill="white"
                />
                <Spotlight
                className="h-[80vh] w-[50vw] top-10 left-full"
                fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            
        </div>

        <div 
             className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.02] bg-grid-black-100/[0.1]
             absolute top-0 left-0 flex items-center justify-center"
             >
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
              bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] h-screen" />
        </div>

        <div className='flex justify-center relative -mt-[20vh] z-10 h-screen'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-s text-center text-blue-100 max-w-80'>
                <p>Hey there Devs<span> 👋 </span> </p> 
                </h2>
                <TextGenerateEffect
                  className='text-center md:tracking-wider mb-5 text-sm md:text-lg lg:text-xl' 
                  words=' Aayush Solanke'
                />
                <p className='text-center md:tracking-wider mb-5 text-sm md:text-lg lg:text-xl -mt-2 '>
                    Welcome's you to his Portfolio Website

                </p>
                <a href='#projects'>
                    <MagicButton
                      title="My Projects"
                      icon={<FaLocationArrow />}
                      position='right'
                    />
                </a>
            </div>
        </div>
    </div>    
  )
}

export default Hero

