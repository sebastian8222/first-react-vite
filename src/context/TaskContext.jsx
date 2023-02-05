import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext(); // TaskContext almacena los datos

export function TaskContextProvider(props) {
  // Componente que engloba al resto de componenetes
  const [tasks, setTasks] = useState([]); //Es un arreglo vacio, pero cuando carga el componente (useEffect) le voy a asignar estas tareas

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        //Copio todos los elemntos y le anado una tarea nueva title, id...
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    // le paso el id de la tarea
    setTasks(tasks.filter((task) => task.id !== taskId)); //de tasks vamos autilizar un filter y por cada tarea (task) que recorra
  }                                                       // compara si la tarea en su propiedad id(task.id) es distinto del taskId que le estan enviado

    useEffect(() => {
        setTasks(data)//---> Cuando cargue el componente TaskContextProvider es creado establece en el arreglo de tareas([tasks, setTasks]) el valor (tasks=data)
    }, [])//--> esto se va a ejecutar cuando cargue el componente TaskList


  return (
    <TaskContext.Provider value={{
        tasks,
        createTask,
        deleteTask

    }}>{/*Guardamos el valor de tasks,createTask, deleteTask dentro del componente provider(el que los contiene a todos) */}
      {props.children}
    </TaskContext.Provider>
  );
}
