import {  useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  if(progress < 100)
  return (
   <>
   <div className=" w-full z-500 h-screen fixed inset-0 flex flex-col justify-center items-center bg-[#0f0520] text-white">
    <div className="spinner z-500">       
    </div>
    <p className="mt-4 font-bold">{ parseInt(progress) }%</p>
   </div>
   <div className=" fixed left-0 z-500 bottom-0 h-2 w-full bg-[#ffffff35]">
    <main className=" relative inset-0 h-full bg-[#8B2FFF] transition-transform" style={{width:`${progress}%`}}></main>
   </div>
   </>
  );
}
export default Loader;