import React from 'react'
import './ToDoList.css'
import Task from '../task/Task'

import { AnimatePresence, motion } from 'framer-motion'

export default function ToDoList(props) {
  const { list, editList, deleteTask, filteredList } = props
  
  return (
    <>
      {filteredList !== null ?
        <>
          <AnimatePresence>
          {filteredList.map((ele, id) => (
            <motion.div
              key={id}
              initial={{ y: '-25px', opacity: 0 }}
              animate={{ y: '0px', opacity: 1 }}
              transition={{duration: 0.5}}
              exit={{y: '-25px', opacity: 0}}
            >
              <Task
                task={ele}
                list={list}
                editList={editList}
                deleteTask={deleteTask}
              />
            </motion.div>            
          ))}
          </AnimatePresence>
        </>
        :
        null
      }
    </>
  )
}