import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext) // de todos los datos solo quiero la funcion {creteTask}--los llamo del objeto que esta en taskContext.Provider
                                               // ahora value es un objeto con todos los valores: tasks, creteTasks, delete...

/*
  const valor = useContext(TaskContext) // Que contexto vamos a llamar --- Dersde TaskCard ya tengo acceso al contexto
                                        // Ahora puedo extraer el valor de x (valor)
  console.log(valor)
*/

  const handleSubmite = (e) => {
    e.preventDefault();//---> Evento que cancela el comportamiento por defecto
    console.log(title, description);
    createTask({ // cuando el taskForm se ejecute, le voy a pasar un objeto con titulo y una descripcion
      title,     // title va a guardar lo que tenga title, title:title = title
      description,
    });
    setTitle("");// una vez ejecute el handleSubmite(Guardar) establece el setTitle en vacio
    setDescription("");
  };

  return (
    <div className=" max-w-md mx-auto">
        <form onSubmit={handleSubmite} className="bg-slate-800 p-10 mb-4">
          <h1 className=" text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}//El valor del text area sera igua a lo que tenga title (setTitle)
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2 "
        />

        <textarea
          placeholder="Escribe la descripcion dela tarea"
          onChange={(e) => setDescription(e.target.value)}// Cuando se ejecute el evento onChange, recibe un objeto (e), establece un setDescription y guarda (e.target.value (lo escrito en textarea))
          value = {description} //El valor del text area sera igua a lo que tenga description (setDescription) 
          className="bg-slate-300 p-3 w-full mb-2"
        />

        <button
        className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-400 rounded-md"
        >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
