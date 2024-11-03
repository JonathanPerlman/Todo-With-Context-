import React, {  useState } from "react"
import { useToDo } from "../../context/todoContext"
import "./form.css"

const Form = () => {

  const [inputValue, setInputValue] = useState("");
  
  const {addToDo} = useToDo();
  
  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    if(inputValue){
      addToDo(inputValue);
      setInputValue("");
    }
  }

  return (
    <form onSubmit={handleForm}>
      <p>To-Do-List</p>
      <input type="text" placeholder="Enter your task" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button>Add</button>
    </form>
  )
}

export default Form