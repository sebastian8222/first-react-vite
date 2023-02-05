import TaskCard from './TaskCard'
import { useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskList() { //Desde props quiero extraer tasks
  
  const {tasks} = useContext(TaskContext)//los llamo del objeto en taskContext.provider
  
  if(tasks.length === 0){
    return <h1 className="text-white text-3xl font-bold text-center"
    >NO HAY TAREAS AUN</h1>
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (                                            // deleteTask no es necesario nombrarlo ya que TaskCard puede acceder a el
        <TaskCard key = {task.id} task={task}/> //---> cada vez que se genere un taskCard va a anadir un Key: valor que se le tiene que anadir al elemento que esta recorriendo
      ))}                                        {/*Pasa un prop task y el valor va as er la tarea que se este recorriendo en ese momento
                                                    por cada vez que se recorra el arreglo va a generar un componente TaskCard y le va apasar una tarea */}
    </div>
  );
}

export default TaskList;
