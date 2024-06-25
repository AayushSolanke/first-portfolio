import React from 'react'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'




const Message = () => {
  return (
    <div className='w-screen h-screen'>
        <div className='w-[60vh] h-[screen] md:tracking-wider sm:tracking-wider flex'>
            <div className="mockup-phone mt-[12vh] cursor-pointer relative md:tracking-wider lg:tracking-wider z-10">
                <div className="camera"></div> 
                <div className="display -mb-[18vh]">
                    <div className="artboard artboard-demo phone-3 text-xl">
                        Hello World.{''}
                    </div>
                </div>
                <div className="mockup-code -top-[69vh] w-[10vh] ml-14 bg-black-100">
                    <pre data-prefix="1"><code>npm install happiness</code></pre> 
                    <pre data-prefix="2"><code>installing...</code></pre> 
                    <pre data-prefix="3" className="bg-warning text-warning-content"><code>Error!</code></pre>
                </div>
            </div>

           
        </div>

        
        
        
            
        
    </div>
  )
}

export default Message