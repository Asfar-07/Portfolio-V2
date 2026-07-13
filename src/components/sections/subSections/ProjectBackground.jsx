import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function ProjectBackground({bgImage, mainImage}) {

  const containerRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(circleRef.current, {
        x,
        y,
        duration: 0.2,
        xPercent: -50,
        yPercent: -50,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
  
  return (
    <section className="absolute min-h-[600px] inset-0 w-full h-screen overflow-hidden">
      <div ref={bgImage} className="masked-section w-full  h-[125%] ">
        <div className=" absolute inset-0 bg-[#663e97] z-10"></div>
        <div ref={containerRef} className=" relative size-full  z-15">
          <div ref={circleRef} className="w-75 h-75 absolute top-0 left-0">
            <div className="mouse-child size-full rounded-full pointer-events-none bg-[#00eeff] blur-[14px]"></div>
            {/* <div className=" absolute inset-0 rounded-full overflow-hidden">
              {[...Array(400)].map((_, i) => (
                <span
                  key={i}
                  className="project-dust"
                  style={{
                    "--dust-left": `${Math.random() * 100}%`,
                    "--dust-top": `${Math.random() * 100}%`,
                    "--dust-size": `2px`,
                    "--dust-duration": `${6 + Math.random() * 6}s`,
                    "--dust-delay": `${Math.random() * 6}s`,
                    "--dust-move-x": `${-25 + Math.random() * 50}px`,
                    "--dust-move-y": `${-25 + Math.random() * 50}px`,
                  }}
                />
              ))}
            </div> */}
          </div>
        </div>
        <div
          ref={mainImage}
          className="for-bg-image absolute size-full left-0 top-[0%] h-[100%] z-20"
        >
          <Image
            src="/images/project-elements/background.webp"
            alt="project background"
            sizes="(max-width: 768px) 100vw, 1000px"
            fill
            priority
            className=" object-fill"
          />
        </div>
        <div className=" absolute w-full h-[20%] left-0 bottom-0 z-25 max-sm:h-[16%]">
          <div className=" absolute left-[34%] bottom-[45%] w-[6%] h-[25%] z-25">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className="dust-custom w-1 h-1 bg-[#ff00ea]"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
          <div className=" absolute left-[0%] bottom-[45%] w-[6%] h-[25%] z-25">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className="dust-custom w-1 h-1 bg-[#ff00ea]"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
          <div className=" absolute left-[95%] bottom-[45%] w-[6%] h-[25%] z-25">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className="dust-custom w-1 h-1 bg-[#ff00ea]"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          <div className=" absolute left-[50%] bottom-[5%] w-[6%] h-[25%] z-25">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className="dust w-1 h-1 bg-[#ff00ea]"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
          <div className=" absolute left-[84%] bottom-[58%] w-[6%] h-[25%] z-25">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className="dust w-1 h-1 bg-[#ff00ea]"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
          <Image
            src="/images/project-elements/backgroundBottom.webp"
            alt="project background"
            sizes="(max-width: 768px) 100vw, 1000px"
            fill
            className="object-fill max-sm:object-cover"
          />
        </div>
      </div>
    </section>
  );
}
