import { FC, useContext } from "react"
import { useToDo } from "../../context/todoContext"
import ToDoList from "../toDoList/toDoList"
import "./toDo.css"


interface TodoProps {
  task: {
      id: number,
      text: string,
      completed: boolean
  }
}
const ToDo: FC<TodoProps> = ({task}) => {
  
  const {deleteToDo, updateToDo} = useToDo();

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteToDo(task.id)
  }
 
  return (
    <div>
      <li onClick={()=> updateToDo(task.id) }>
        {task.completed ? "✅" : "❌"}
        {task.text}
        <button onClick={handleDelete} >Delete</button>
      </li>
    </div>
  )
}
  
  


export default ToDo