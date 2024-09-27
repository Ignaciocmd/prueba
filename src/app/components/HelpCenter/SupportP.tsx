import React from 'react'

export default function SupportP() {
  return (
    
    <div className='bg-white/60 w-full  justify-center flex items-center rounded-lg max-w-[800px] shadow-lg p-3'>
      <div className='w-full h-full flex justify-between items-center'>
        {/*text */}
        <div className='flex space-x-2'>
          <h2 className='font-bold'>¿Quieres recibir soporte personalizado?</h2>  
          <p className='font-extralight'>Inicia sesion con tu cuenta</p> 
        </div> 
        {/*Button*/}
          <button className='bg-green-500 text-white p-3 rounded-full w-[148px] justify-center items-center flex'> Inicia sesion</button>
      </div>
    </div>
  )
}
