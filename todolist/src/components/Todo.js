import React from 'react'
import './Todo.css'

const Todo = () => {
    return (
        <div>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption>Add your list here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder = "Add Items"/>
                        <i className="fa fa-plus add-btn"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo
