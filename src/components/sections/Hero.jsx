import React from 'react'
import Image from 'next/image';
import '../../styles/hero.css'

export default function Hero() {
  return (
    <div className="home w-full h-dvh text-(--p-font) relative z-3">
      <main className="h-full m-auto relative  z-3  w-[88%] max-w-350 min-w-100 text-(--p-font) max-sm:min-w-full" style={{margin:"auto"}}>
        <aside className='h-full flex flex-col gap-5 justify-center max-md:items-center'>
          <h1 className=' font-bold m-0 max-md:text-center w-full'>HI, I'M <br></br> <span className=' ml-[10%] max-md:m-0'>ASFAR</span></h1>
            <span className='font-bold text-2xl max-sm:text-xl'>Full Stack Developer</span>
            <p className='w-[60%]  min-w-130 max-w-4xl text-justify max-sm:min-w-[90%]'>I create user-focused web applications that merge performance and simplicity through thoughtful design. Every project I build reflects a passion for modern development and meaningful user experiences.</p>
            <div className='flex gap-5'>
              <button className='btn bg-(--s-bg-deep) font-bold'>View My Work</button>
              <button className='btn border border(--cyan-mark) font-bold'>Download CV</button>
            </div>
        </aside>
      </main>
      <Hero_Ground />
    </div>
  );
}
function Hero_Ground(){
  return(
    <>
     <section className="hero-ground flex justify-baseline absolute -bottom-8 w-full h-90 ">
      <Image src="/images/Front_Ground.webp"  alt="Ground Image" fill className='ground-img w-full h-full ' priority/>
        <div className='set-rocks w-[50%] relative overflow-hidden max-md:w-full'>
          <Image src="/images/Rocks_Left.png" alt="Rocks Image" width={500} height={500} className='rocks-img absolute bottom-0 left-0 w-[80%]  min-w-[380px] h-52 max-md:w-[90%] max-sm::h-45' priority/>
        </div>
        <div className='set-rocks r-right w-[50%] relative overflow-hidden max-md:hidden'>
          <Image src="/images/Frame_6.png" alt="Rocks Image" width={500} height={500} className='rocks-img absolute bottom-0 right-0 w-[80%] min-w-[380px] h-56 max-md:w-[90%] max-sm::h-45' priority/>
        </div>
      </section>
      <section className='ground-blur z-20  h-80 absolute bottom-0 w-full overflow-hidden'>
        <div className=' h-40  bg-(--p-bg-deep) blur-sm'></div>
      </section>
    </>
  )
}
