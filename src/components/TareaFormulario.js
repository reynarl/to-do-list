import React from 'react'
import '../styles/TareaFormulario.css'

const TareaFormulario = () => {
  return (
    <form className='tarea-formulario'>
      <input 
        type="text" 
        className="tarea-input"
        placeholder='Escribe una tarea'
        name='texto' 
      />
      <button className='tarea-boton'>Agregar</button>
    </form>
  )
}

export default TareaFormulario