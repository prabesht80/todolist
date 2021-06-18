import React,{useState, useEffect} from 'react'
import "./Form.css"


export default function EditForm({ updateTodo, values, setEditing}) {

    //passing existing value to hooks
    const [editValue, setEditValue] = useState(values)

    useEffect(() => {
        setEditValue(editValue);
    }, [editValue])

    const handleChange = event => {
        const { name, value } = event.target;
    
        setEditValue({ ...editValue, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        updateTodo(editValue.id,editValue);
    }

    

    return (
        <div className="form-container">
                <h2 className="text">Edit</h2>
                <form className="form" onSubmit={handleSubmit} >
                    <input type="text" name="heading" placeholder="heading.." value={editValue.heading}  onChange={handleChange}/>
                    <textarea name="todo" placeholder="todo..." rows="6" cols="20" value={editValue.todo}  onChange={handleChange}></textarea>
                    <input type="Date" name="date" value={editValue.date} onChange={handleChange}  />
                    <button type="submit">Edit</button>
                    <button className="cancel" onClick={() => setEditing(false)}>Cancel</button>
                </form>
        </div>
    )
}
