import React from 'react'

export default function SearchBar(props) {
  const { newTask, input, setInput } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput({
      [name]: value
    })
  }
  
  return (
    <>
      <div>
        <input
          placeholder='search task'
          type='text'
          name='text'
          value={input}
          onChange={handleChange}
        />
        <button onClick={newTask}>add task</button>
      </div>
    </>
  )
}