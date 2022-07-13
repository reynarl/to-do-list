import React from 'react'
import TareaFormulario from './TareaFormulario'
import '../styles/ListaDeTareas.css'

const ListaDeTareas = () => {
  return (
    <>
      <TareaFormulario/>
      <div className='tareas-lista-contenedor'>
        Lista de tareas
      </div>
    </>
  )
}

export default ListaDeTareas