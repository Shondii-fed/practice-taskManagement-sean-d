import { Link } from 'react-router'

const TaskList = ({taskData}) => {

    const display = taskData.map((task) => {
        return <Link to={`/task/${task.id}`} className='task-link'>{task.title}</Link>
    }) 
    
    return (
        <div>
            <h1>Task List</h1>
            <nav>
                {display}
            </nav>
        </div>
    )
}
export default TaskList;