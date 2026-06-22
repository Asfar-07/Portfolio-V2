import React from 'react'
import Image from 'next/image'

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

function Plants_1(){

  return (
    <main className="size-full">
      <div>
        <Image  src="/images/hero/ground-elements/plant_1.png"
          alt="plants1" fill  sizes="(max-width: 768px) 60vw, 100px"/>
      </div>
    </main>
  );
}

export { FireFly, FireFlyMoving, Plants_1}
