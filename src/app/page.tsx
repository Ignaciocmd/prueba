import Image from 'next/image';
import SupportP from '@/app/components/HelpCenter/SupportP'
import Chat from '@/app/components/HelpCenter/Chat' 
import SuscribeChat from '@/app/components/HelpCenter/SuscribeChat';
import Background from '@/app/imgs/istockphoto-893537120-1024x1024.jpg'

export default function Home() {
  return (
    <div className="w-full h-full relative flex flex-col justify-center items-center ">
      {/* Background Image */}
      <div className='absolute inset-0 -z-10 h-full'>
        <Image src={Background} alt='Background Help Center' layout='fill' objectFit='cover' quality={100} priority={true}/>
      </div>
      {/* Gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-white/30 to-white/80'></div>
      {/* Content */}
      <div className='relative z-10 w-full flex flex-col items-center justify-center max-w-[1100px] h-full pt-20 space-y-7'>
        <h1 className='text-4xl font-bold text-center text-blue-800'>Bienvenidos al Help Center, por favor hace una pregunta para comenzar!</h1>
          <SupportP/> 
          <Chat/>  
          <div className='font-bold'> 
          <SuscribeChat/>

          </div>
      </div>
    </div>
  );
}
