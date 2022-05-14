import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function ToDo() {
    const [inputText, setInputText] = useState("")
    const [tasksArray, setTasksArray] = useState(JSON.parse(localStorage.getItem('array')) || [])

    localStorage.setItem('array', JSON.stringify(tasksArray))

    function textChange(event) {
        const { value } = event.target
        const text = value.charAt(0).toUpperCase() + value.slice(1)
        setInputText(text)
    }

    function taskAdded(event) {
        event.preventDefault()
        if (inputText.length > 0) {
            const newTask = {
                name: [inputText],
                value: false
            }

            setInputText("")
            setTasksArray(prevTasks => [...prevTasks, newTask])
        } else {
            alert("Task Content is Empty")
        }
    }

    function editTaskCompleted(task) {
        setTasksArray(prevTasks => {
            return (
                prevTasks.map((t) => {
                    if (t.name === task.name) {
                        return({name: t.name, value: !t.value})
                    }
                    return(t)
                })
            )
        })
    }

    function removeFromArray(task) {
        setTasksArray(prevTasks => prevTasks.filter(t => t.name !== task.name))
    }

    function clearArray() {
        setTasksArray([])
    }

    const tasksElements = tasksArray.map(task => {
        const { name, value } = task
        
        return (
            <div className="todo--task" key={uuidv4()}>
                <label>
                    <input type="checkbox" name={name} value={value} className="todo--task-checkbox" checked={value} onChange={()=>editTaskCompleted(task)}/>
                    {name}
                    <img src={require("../images/trash.png")} className="todo--task-remove" onClick={() => removeFromArray(task)} />
                </label>
            </div>
        )
    })

    return (
        <div className="todo">
            <form onSubmit={taskAdded}>
                <h3 className="todo--header">What do you need to do?</h3>
                <input type="text" className="todo--input" name="text" autoComplete="off" value={inputText} onChange={textChange} />
                <button className="todo--add" >Add</button>
            </form>
            <div className="todo--container">
                {tasksElements}
            </div>
            <button className="todo--clear" onClick={clearArray}>Clear List</button>
        </div>
    )
}
