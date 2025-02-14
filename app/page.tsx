
import Hero from "@/components/Hero";
import Message from "@/components/Message";
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import { Fa1, Fa2, Fa3 } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w=full">
        <FloatingNav navItems={[
          {name: 'Home', link: '#home', icon: <FaHome />},
          {name: 'Skills', link: '#skills', icon: <Fa1 />},
          {name: 'Projects', link: '#projects', icon: <Fa2 />},
          {name: 'Contact', link: '#contact', icon: <Fa3 />},

        ]}/>
        <Hero />
        <Skills />
        <Grid />
        <Contact />
        
        
      </div>
    </main>
  );
}
