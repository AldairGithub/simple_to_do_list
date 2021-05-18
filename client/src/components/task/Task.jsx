import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

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
        <div>
        {displayEditTask ?
          <>
            <form onSubmit={handleEditedTask}>
              <input
                name='text'
                value={editedTask.text}
                placeholder='edit task'
                onChange={handleChange}
                maxLength={25}
              />
              <button>Save</button>
            </form>
          </>
          :
          <>
            <p>{ task }</p>
          </>
        }
      </div>
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