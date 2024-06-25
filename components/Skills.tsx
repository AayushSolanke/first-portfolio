import React from 'react'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const Skills = () => {
  return (
    <div className="container mx-auto gap-x-5 scroll-smooth" id='skills'>

        
        <div className='absolute z-[0] w-[40%] h-[35%] top-[40%] -left-[30%] pink__gradient'></div>
        <div className='absolute z-[1] w-[80%] h-[80%] top-[50%] rounded-full -left-[40%] white__gradient'></div>
        
        <div className='max-w-[95vw] md:max-w-xl lg:max-w-[60vw] flex flex-col items-center justify-center -mt-5'>
            <TextGenerateEffect
                className='text-center md:tracking-wider text-xl md:text-lg lg:text-xl lg:ml-[32vh] z-[4]' 
                words=' Skills'
            />

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 lg:-ml-[15vh] gap-x-[20vh]">
            <div className='h-full z-[4] w-full -ml-1'>
                <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6  bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] right-0">
                    <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                    React
                    </CardItem>
                    <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                    "Turning complexity into simplicity with React proficiency."
                    </CardItem>
                    <CardItem translateZ="100" className="w-full ">
                    <Image
                        src="/logo-react.svg"
                        height="1000"
                        width="1000"
                        className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl mt-4"
                        alt="thumbnail"
                    />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-s font-normal dark:text-white"
                    >
                        Hover over this card 👀
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        ❤️
                    </CardItem>
                    </div>
                </CardBody>
                </CardContainer>
            </div>

            <div className='h-full z-[4] w-full -ml-1 -mt-10'>
                <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]">
                    <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                    JavaScript
                    </CardItem>
                    <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                    "JavaScript enthusiast crafting dynamic web experiences."
                    </CardItem>
                    <CardItem translateZ="100" className="w-full ">
                    <Image
                        src="/logo-javascript.svg"
                        height="1000"
                        width="1000"
                        className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl mt-4"
                        alt="thumbnail"
                    />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-s font-normal dark:text-white"
                    >
                        Hover over this card 👀
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        ❤️
                    </CardItem>
                    </div>
                </CardBody>
                </CardContainer>
            </div>

            
            <div className='h-full z-[4] w-full lg:-ml-1'>
                <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[88.5vh] rounded-xl p-6 bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]">
                    <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                    Next.js
                    </CardItem>
                    <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                    "Creating high-performance, SEO-friendly web applications with Next.js."
                    </CardItem>
                    <CardItem translateZ="100" className="w-full ">
                    <Image
                        src="/logo-nextjs.svg"
                        height="1000"
                        width="1000"
                        className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl mt-4"
                        alt="thumbnail"
                    />
                    <Image
                        src="/logo-nextjs.svg"
                        height="1000"
                        width="1000"
                        className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl mt-4"
                        alt="thumbnail"
                    />
                    <Image
                        src="/logo-nextjs.svg"
                        height="1000"
                        width="1000"
                        className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl mt-4"
                        alt="thumbnail"
                    />
                    <Image
                        src="/logo-nextjs.svg"
                        height="1000"
                        width="1000"
                        className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl lg:mt-4 lg:pb-8"
                        alt="thumbnail"
                    />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-s font-normal dark:text-white"
                    >
                        Hover over this card 👀
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        ❤️
                    </CardItem>
                    </div>
                </CardBody>
                </CardContainer>
            </div>

            <div className='h-full z-[4] w-full -ml-1 lg:-mt-[15vh]'>
                <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6 bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] right-0 h-[88.5vh]">
                    <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                    Tailwind CSS
                    </CardItem>
                    <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                    "Creating elegant and highly customizable web designs with Tailwind CSS expertise."
                    </CardItem>
                    <CardItem translateZ="100" className="w-full ">
                    <Image
                        src="/logo-tailwind.svg"
                        height="1000"
                        width="1000"
                        className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl mt-[14vh]"
                        alt="thumbnail"
                    />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-s font-normal dark:text-white mt-[9.3vh]"
                    >
                        Hover over this card 👀
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold mt-[9.3vh]"
                    >
                        ❤️
                    </CardItem>
                    </div>
                </CardBody>
                </CardContainer>
            </div>

            <div className='h-full z-[4] w-full -ml-1 lg:-mt-[20vh]'>
                <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6 bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] h-[88.5vh]">
                    <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                    Python
                    </CardItem>
                    <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                    "Developing robust and efficient applications with Python, the versatile programming language."
                    </CardItem>
                    <CardItem translateZ="100" className="w-full ">
                    <Image
                        src="/logo-python.png"
                        height="1000"
                        width="1000"
                        className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl mt-8 p-5"
                        alt="thumbnail"
                    />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-s font-normal dark:text-white -mt-[5vh]"
                    >
                        Hover over this card 👀
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold -mt-[5vh]"
                    >
                        ❤️
                    </CardItem>
                    </div>
                </CardBody>
                </CardContainer>
            </div>

            
            <div className='h-full z-[4] w-full -ml-1 lg:-mt-[15vh]'>
                <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[89vh] rounded-xl p-6 bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]">
                    <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                    Figma
                    </CardItem>
                    <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                    "Combining creativity and precision in Figma to deliver beautiful and functional UI/UX designs."
                    </CardItem>
                    <CardItem translateZ="100" className="w-full ">
                    <Image
                        src="/logo-figma.svg"
                        height="1000"
                        width="1000"
                        className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl -mt-8 p-20 -pb-20"
                        alt="thumbnail"
                    />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-s font-normal dark:text-white -mt-[15vh]"
                    >
                        Hover over this card 👀
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold -mt-[15vh]"
                    >
                        ❤️
                    </CardItem>
                    </div>
                </CardBody>
                </CardContainer>
            </div>

            <div className='max-w-[95vw] md:max-w-xl lg:max-w-[60vw] flex flex-col items-center justify-center -mt-5'>
                <TextGenerateEffect
                    className='text-center md:tracking-wider text-xl md:text-lg lg:text-xl lg:ml-[144vh] z-[4]' 
                    words=' Upcoming Projects'
                />

            </div>



        </div>
    </div>
  )
}

export default Skills