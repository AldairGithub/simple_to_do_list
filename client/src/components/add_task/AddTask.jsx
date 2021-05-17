import React from 'react'

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
      <div>
        <form onSubmit={onNewTask}>
          <input
            placeholder='add task'
            name='text'
            value={input}
            onChange={handleChange}
          />
          <button>save</button>
        </form>
      </div>
    </>
  )
}