import React from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
export default function Chat() {
  return (
    <section className="w-full flex items-center justify-center max-w-[700px] bg-white p-3 rounded-xl shadow-lg">
 
      {/*Contenedor principal : Section*/}
      <div className="w-full flex items-center flex-col justify-center">
        <div className="w-full flex justify-between items-center font-low">
          <div className="w-full">
            <h2> Chat provider </h2>
          </div>
          <div className="w-full flex justify-end items-center">
            <RestartAltIcon />
            <p>Reset conversation </p>
          </div>
        </div>
        <div className="w-full justify-center flex h-[500px] items-center "> 
          <h3 className="w-[500px] text-2xl font-bold">¡Hola y bievenido a nuestra pagina web! Estamos aqui para ayudarte a navegar en nuestra plataforma y facilitar tu experiencia.Navega por nuestras secciones, conoce nuestros productos y servicios. Porfavor, ingresa cualquier pregunta que tengas sobre nosotros en la seccion de abajo.</h3>
        </div> 
        <div className="w-full flex justify-center items-center space-x-3"> 
          <input className="w-full bg-gray-700 rounded-lg text-white p-3  " placeholder="Enter your question "/ > 
          <button 
          className="w-[148px] bg-blue-600 h-10 rounded-full text-white font-semibold">Send</button>
        </div>
      </div>
    </section>
  );
}
