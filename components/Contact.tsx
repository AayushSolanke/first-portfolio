import React from 'react'
import { GlobeDemo } from './ui/GridGlobe'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'

const Projects = () => {
  return (
    <div className='w-full h-screen' id='contact'>
      <div className='max-w-[95vw] md:max-w-xl lg:max-w-[60vw] flex flex-col items-center justify-center -mt-5'>
            <TextGenerateEffect
                className='text-center md:tracking-wider text-xl md:text-lg lg:text-xl lg:ml-[32vh] z-[4]' 
                words=" Let's Connect"
            />
            <div className='z-[3] lg:ml-[32vh]'>
              <a href='https://ibb.co/fMX0Jhr' target='__blank'>
                <MagicButton
                  title="WhatsApp"
                  icon={''}
                  position='right'
                />
              </a>
              <a href='https://in.linkedin.com/in/aayush-solanke-730904274?original_referer=https%3A%2F%2Fwww.google.com%2F' target='__blank'>
                <MagicButton
                  title="LinkedIn"
                  icon={''}
                  position='right'
                />
              </a>
              <MagicButton
                title="E-mail"
                icon={''}
                position='right'
              />
              <MagicButton
                title="Telegram"
                icon={''}
                position='right'
              />
            </div> 
                  

      </div>

      <div className='w-full h-full pb-2'>
      <GlobeDemo />

      </div>
      
      

    </div>
    
  )
}

export default Projects