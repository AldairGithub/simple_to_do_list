import React from 'react'
import './ToDoList.css'
import Task from '../task/Task'

export default function ToDoList(props) {
  const {list} = props
  // const list = ['love yourself', 'do laundry', 'change tires']
  return (
    <>
      <div className='todolist-container'>
        {list.map((ele, id) => (
          <>
            <div key={id}>
              <Task task={ele}/>
            </div>
          </>
        ))}
      </div>
    </>
  )
}