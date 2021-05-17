import React, {useState, useEffect} from 'react'
import './Main.css'
import SearchBar from '../search_bar/SearchBar'
import AddTask from '../add_task/AddTask'
import ToDoList from '../to_do_list/ToDoList'

export default function Main() {
  const [list, setList] = useState([])

  const [displayAddTask, setDisplayAddTask] = useState(false)

  const [addTaskInput, setAddTaskInput] = useState({
    text: ''
  })
  const [searchInput, setSearchInput] = useState({
    text: ''
  })

  useEffect(() => {
    const getList = JSON.parse(window.localStorage.getItem('List'))
    if (getList !== null) {
      setList(
        getList
      )
    }
  }, [])

  const newTask = () => {
    setDisplayAddTask(!displayAddTask)
  }
  const updateLocalStorage = (arr) => {
    window.localStorage.removeItem('List')
    window.localStorage.setItem('List', JSON.stringify(arr))
  }
  const onNewTask = (e) => {
    e.preventDefault()
    if (list === null) {
      const newList = [addTaskInput.text]
      setList(
        newList
      )
      updateLocalStorage(newList)
    } else {
      const newList = [...list, addTaskInput.text]
      setList(
        newList
      )
      updateLocalStorage(newList)
    }
    setAddTaskInput({
      text: ''
    })
    setDisplayAddTask(false)
  }

  const editList = (id, str) => {
    const newList = [...list]
    newList[id] = str
    setList(
      newList
    )
    updateLocalStorage(newList)
  }
  const deleteTask = (id) => {
    const newList = [...list]
    const filter = newList.filter((ele, index) => index !== id)
    setList(
      filter
    )
    updateLocalStorage(newList)
  }
  return (
    <>
      <div className='main-container'>
        <SearchBar
          newTask={newTask}
          input={searchInput.text}
          setInput={setSearchInput}
          list={list}
          setList={setList}
        />
        {displayAddTask &&
          <>
          <AddTask
            input={addTaskInput.text}
            setInput={setAddTaskInput}
            onNewTask={onNewTask}
          />
          </>
        }
        <ToDoList
          list={list}
          editList={editList}
          deleteTask={deleteTask}
        />
      </div>
    </>
  )
}