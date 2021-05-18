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
            placeholder='&#xF067; Add task'
            name='text'
            value={input}
            onChange={handleChange}
          />
          <button
            className='input-button'
            style={{ opacity: `${input.length === 0 ? '0.5' : '1'}` }}
            disabled={input.length === 0 ? true : false}
          >
            save
          </button>
        </form>
      </div>
    </>
  )
}