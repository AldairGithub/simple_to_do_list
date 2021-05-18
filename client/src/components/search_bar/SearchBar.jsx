import React from 'react'

import './SearchBar.css'

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
      <div className='input-container'>
        <input
          className='input-display'
          placeholder='search task'
          type='text'
          name='text'
          value={input}
          onChange={handleChange}
          maxLength={25}
        />
        <button
          className='input-button'
          onClick={newTask}
        >
          add task
        </button>
      </div>
    </>
  )
}