import React from 'react'

import './AddTask.css'

export default function AddTask(props) {
  const { input, setInput, onNewTask } = props
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setInput({
      [name]: value
    })
  }

  return (
    <>
      <div className='input-container newtask-container'>
        <form onSubmit={onNewTask}>
          <input
            className='input-display'
            placeholder='add task'
            name='text'
            value={input}
            onChange={handleChange}
          />
          <button className='input-button'>save</button>
        </form>
      </div>
    </>
  )
}