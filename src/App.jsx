import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import {useState,useEffect} from 'react'

function App() {


  return (
    <main className='bg-zinc-900 h-screen p-10'> {/*Puede ser cualquier etiqueta */}
      <div className="container mx-auto">
      <TaskForm/>{/*La funcion esta arriba de todo, puedo evitar pasarselo, el taskForm puede acceder a eso*/}
      <TaskList/>{/* Voy a pasar una propiedad tasks y el valor de esta propiedad va a ser {tasks, el arreglo de tareas}*/}
      </div>
    </main>
  )
}

export default App