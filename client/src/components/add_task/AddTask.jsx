import React from 'react'
import { motion } from 'framer-motion'

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
      <motion.div
        className='input-container newtask-container'
        // start of div, position
        initial={{ translateY: "0px", opacity: 0 }}
        // move div on the y axis (vertically) while changing opacity
        animate={{ translateY: "55px", opacity: 1 }}
        // how long it takes for animation to finish
        transition={{ duration: 1 }}
        // when div is removed from tree
        exit={{translateY: "0px", opacity: 0}}
      >
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
      </motion.div>
    </>
  )
}