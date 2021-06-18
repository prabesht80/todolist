import React, {useState} from 'react'
import './Result.css'
import Form from './Form'
import EditForm from './EditForm'


const initialValues = {
    id: "",
    heading: "",
    todo: "",
    date: "",
    createdDate: new Date().toLocaleDateString("en-US"),
    isComplete: false,
};

export default function Result() {
    const [todos, setTodos] = useState([]);
    const [values, setValues] = useState(initialValues);
    const [editing, setEditing] = useState(false);

    // adding todo form chage
    const handleChange = (e) => {
        setValues('');
        const {name, value} = e.target;
        setValues({
        ...values,
        [name] : value,
        id: Math.floor(Math.random() * 10000),
        });
    };
    
    //form submission 
    const handleSubmit = (e) => {
        e.preventDefault();
        setValues(initialValues);
        let oldFormData = todos;
        oldFormData.push(values);
        setTodos([...oldFormData]);
    }
    
    //delete handling of list
    const handleDelete = (id) => {
        const remove = [...todos].filter(todo => todo.id !== id);
        setTodos(remove);
    }   

    //complition of todo
    const completeTodo = index => {
        const newTodos = [...todos]
        newTodos[index].isComplete = true;
        setTodos(newTodos);
    }

    //edit todo button 
    const editRow = (todo) => {
        setEditing(true);
        setValues({ id: todo.id, heading: todo.heading, todo: todo.todo, date: todo.date })
    }

    //update after editing todo
    const updateTodo = (id, updatedTodo) => {
		setEditing(false);
		setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)))
        setValues(initialValues);
	}

    return (
        <div className="container">
            <div className="form-wrapper">
                { editing ? (
                    <EditForm editing={editing} setEditing={setEditing} values={values} updateTodo={updateTodo}/> 
                ) : (
                    <Form  handleChange={handleChange} handleSubmit={handleSubmit} values={values}/>
                ) }
            </div>
            <div className="output-wrapper">
                <h2 className="text">Your List</h2>
                {todos.map((todo, index) => {
                    return (
                        <div className="list" key={todo.id} style={{
                            background:todo.isComplete ? "green" : ""
                        }}>
                            <h3 style={{
                            textDecoration:todo.isComplete ? "line-through" : ""
                        }}>{todo.heading} </h3> 
                            <p style={{
                            textDecoration:todo.isComplete ? "line-through" : ""
                        }}>{todo.todo}</p>
                            <p className="date">{todo.date}</p>
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                            <button onClick={() => completeTodo(index)}>complete</button>
                            <button onClick={() => editRow(todo)} >Edit</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
