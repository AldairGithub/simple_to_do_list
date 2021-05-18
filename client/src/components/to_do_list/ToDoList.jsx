import React from 'react'
import './ToDoList.css'
import Task from '../task/Task'

export default function ToDoList(props) {
  const { list, editList, deleteTask, filteredList } = props
  
  return (
    <>
      {filteredList !== null ?
        <>
          {filteredList.map((ele, id) => (
            
              <div key={id}>
                <Task
                  task={ele}
                  list={list}
                  editList={editList}
                  deleteTask={deleteTask}
                />
              </div>
            
          ))}
        </>
        :
        null
      }
    </>
  )
}