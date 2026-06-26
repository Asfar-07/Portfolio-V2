import React, {useEffect} from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import "@/styles/groundElement.css"

function FireFly({className}){
  return(
    <div className={`firefly-fixed absolute ${className}`}></div>
  )
}

function FireFlyMoving({className}){
  return(
    <div className={`firefly absolute  animate-[fireflyMove_60s_linear_infinite,fireflyBlink_2s_ease-in-out_infinite] ${className}`}></div>
  )
}

function Controller(){
    useEffect(() => {
    const lights = document.querySelectorAll(".light-glow");

    const handleMouseMove = (e) => {
      lights.forEach((light) => {
        const rect = light.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

        const maxDistance = 400;
        const intensity = Math.max(0, 1  - distance / maxDistance);

        gsap.to(light, {
          scale: 1 + intensity,
          opacity: 0.3 + intensity * 0.7,
          duration: 0.2,
          overwrite: true,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
}

function Plant_1({dust= true}){

  return (
    <main className="size-full">
      <div className="planet1_light light-glow absolute rounded-t-full bg-[#0BE1FB] blur-[3px] z-20"></div>
      {dust && (
        <div className=" absolute w-[32%] h-[12%] top-[12%] left-[38%] z-900">
          {[...Array(2)].map((_, index) => (
            <span
              key={index}
              className="dust w-0.75 h-0.75"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      )}
      <div className="size-full">
        <Image
          src="/images/hero/ground-elements/plant_1.webp"
          alt="plants1"
          fill
          sizes="(max-width: 768px) 60vw, 100px"
        />
      </div>
    </main>
  );
}

function Plant_2({dust= true}){

  return (
    <main className="size-full">
      <div className="planet2_light light-glow absolute rounded-t-full bg-[#0235FF] blur-[4px] z-20"></div>
      {dust && (
        <div className=" absolute w-[32%] h-[12%] top-[14%] left-[28%] z-900">
          {[...Array(2)].map((_, index) => (
            <span
              key={index}
              className="dust w-0.75 h-0.75"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      )}
      <div className="size-full">
        <Image
          src="/images/hero/ground-elements/plant_2.webp"
          alt="plants2"
          fill
          sizes="(max-width: 768px) 60vw, 100px"
        />
      </div>
    </main>
  );
}

function Crystal_1({dust= true}) {
  return (
    <main className="size-full">
      <div className="light-glow absolute w-[10%] h-[10%] top-[35%] left-[52%] z-20 bg-[#00bfff] blur-[6px]"></div>
      {dust && (
        <div className="absolute w-[35%] h-[10%] top-[46%] left-[42%] z-900">
          {[...Array(8)].map((_, index) => (
            <span
              key={index}
              className="dust w-0.5 h-0.5"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      )}
      <div className="size-full">
        <Image
          src="/images/hero/ground-elements/crystalGroup_1.webp"
          alt="plants2"
          fill
          sizes="(max-width: 768px) 60vw, 100px"
        />
      </div>
    </main>
  );
}

function Crystal_2({dust= true}){
  return (
    <main className="size-full">
      <div className="light-glow absolute w-[3%] h-[3%] top-[58%] left-[45%] rounded-full bg-[#00bfff] blur-[2px] z-20"></div>
      <div className="light-glow absolute w-[3.5%] h-[3.5%] top-[58%] left-[75%] rounded-full bg-[#00bfff] blur-[2px] z-20"></div>
      {dust && (
        <div className="absolute w-[55%] h-[10%] top-[50%] left-[23%] z-900">
          {[...Array(10)].map((_, index) => (
            <span
              key={index}
              className="dust w-0.5 h-0.5"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      )}
      <div className="size-full">
        <Image
          src="/images/hero/ground-elements/crystalGroup_2.webp"
          alt="plants2"
          fill
          sizes="(max-width: 768px) 60vw, 100px"
        />
      </div>
    </main>
  );
}

function Crystal_3({dust= true}){
  return (
    <main className="size-full">
      <div className="light-glow absolute w-[20%] h-[6%] top-[52%] left-[44%] bg-[#00bfff] blur-[10px] z-20"></div>
      {dust && (
        <div className="absolute w-[30%] h-[10%] top-[50%] left-[45%] z-900">
          {[...Array(4)].map((_, index) => (
            <span
              key={index}
              className="dust w-0.5 h-0.5 "
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      )}
      <div className="size-full">
        <Image
          src="/images/hero/ground-elements/crystalGroup_3.webp"
          alt="plants2"
          fill
          sizes="(max-width: 768px) 60vw, 100px"
        />
      </div>
    </main>
  );
}
export { FireFly, FireFlyMoving, Plant_1, Plant_2, Crystal_1, Crystal_2, Crystal_3, Controller}
