import React from 'react'
import "./Form.css"

export default function Form({handleSubmit, values, handleChange}) {

    return (
        <div className="form-container">
                <h2 className="text">TODO Entry</h2>
                <form className="form" onSubmit={handleSubmit} >
                    <input type="text" name="heading" placeholder="heading.." value={values.heading}  onChange={handleChange}/>
                    <textarea name="todo" placeholder="todo..." rows="6" cols="20" value={values.todo}  onChange={handleChange}></textarea>
                    <input type="Date" name="date" value={values.date} onChange={handleChange}  />
                    <button type="submit">Submit</button>
                </form>
        </div>
    )
}
