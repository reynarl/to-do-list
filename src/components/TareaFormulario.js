import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import '../styles/TareaFormulario.css'

const TareaFormulario = (props) => {

  const [input, setInput] = useState('')

  const manejarCambio = e =>{
    setInput(e.target.value)
  }

  const manejarEnvio = e =>{
    e.preventDefault()
    // Al enviar el formulario lo que hará será crear el objeto que rep´resentará la tarea nueva
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(tareaNueva)

  }

  return (
    <form onSubmit={manejarEnvio} className='tarea-formulario'>
      <input 
        type="text" 
        className="tarea-input"
        placeholder='Escribe una tarea'
        name='texto' 
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>Agregar</button>
    </form>
  )
}

export default TareaFormulario