import React, {useState} from 'react' 
import { addTodo, deleteTodo, removeTodo} from '../actions/index'
import './Todo.css'

const Todo = () => {
    const [inputData, setInputData] = useState('')
    return (
        <div>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption>Add your list here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder = "Add Items"
                        value = {inputData}
                        onChange = {(event) => setInputData(event.target.value)}
                        />
                        <i className="fa fa-plus add-btn"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo
