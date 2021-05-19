import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from 'framer-motion'

import './Task.css'

export default function Task(props) {
  const { task, list, editList, deleteTask } = props

  const [displayEditTask, setDisplayEditTask] = useState(false)
  const [editedTask, setEditedTask] = useState({
    text: ''
  })
  const getIdFromList = () => {
    const getId = list.indexOf(task)
    return getId
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setEditedTask({
      [name]: value
    })
  }
  const handleEditedTask = (e) => {
    e.preventDefault()
    editList(getIdFromList(), editedTask.text)
    setEditedTask({
      text: ''
    })
    setDisplayEditTask(false)
  }
  const handleDisplayingEditTask = () => {
    setDisplayEditTask(!displayEditTask)
    setEditedTask({
      text: ''
    })
  }
  const handleDeletedTask = (e) => {
    e.preventDefault()
    setEditedTask({
      text: ''
    })
    deleteTask(getIdFromList())
  }

  return (
    <>
      <div className='task-container'>
        <AnimatePresence>
            {displayEditTask ?
              <>
                <motion.div
                  initial={{ x: '-25px', opacity: 0 }}
                  animate={{ x: '0px', opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{x: '25px', opacity: 0}}
                >
                  <form
                    className='edit-task-container'
                    onSubmit={handleEditedTask}
                  >
                    <input
                      className='edit-task-input'
                      name='text'
                      value={editedTask.text}
                      placeholder='&#xF039; Edit task'
                      onChange={handleChange}
                      maxLength={25}
                    />
                    <button
                      className='edit-task-button'
                      style={{ opacity: `${editedTask.text.length === 0 ? '0.5' : '1'}` }}
                      disabled={editedTask.text.length === 0 ? true : false}
                    >
                      Save
                    </button>
                  </form>
              </motion.div>
            </>
            :
            <>
              <p className='task-text'>{ task }</p>
            </>
          }
        </AnimatePresence>
      <div className='task-icons-container'>
        <div>
          <FontAwesomeIcon
            icon={faPen}
            size='1x'
            onClick={handleDisplayingEditTask}
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faTrash}
            size='1x'
            onClick={handleDeletedTask}
          />
        </div>
        </div>
      </div>
    </>
  )
}