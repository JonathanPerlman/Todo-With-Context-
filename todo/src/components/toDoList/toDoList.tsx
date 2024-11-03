import { useContext } from "react"
import {  useToDo } from "../../context/todoContext"
import ToDo from "../toDo/toDo"
import "./toDoList.css"


const ToDoList = () => {

    const {todos} = useToDo()
    
  return (
    <div>
        {todos.map((task)=>{
        return <ToDo key={task.id} task={task}/>})}
    </div>
  )
}

export default ToDoList