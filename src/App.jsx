import { Routes, Route } from 'react-router'
import taskData from './data/taskData'
import TaskList from './component/TaskList'
import TaskDetail from './component/TaskDetail'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<TaskList taskData={taskData}/>} />
      <Route path="/task/:id" element={<TaskDetail taskData={taskData}/>} />
    </Routes>
    </>
  )
}

export default App
