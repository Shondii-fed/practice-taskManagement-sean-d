import { useParams, Link } from "react-router";

const TaskDetail = ({taskData}) => {

    const { id } = useParams();

    const task = taskData.find((task) => task.id === Number(id))

    if (!task) {
        return (
            <p>Invalid Task ID!</p>
        )
    }
    
    return (
        <>
            <Link to={`/`} className='home-link'>Home</Link>
            <h1>Task Detail</h1>
            <h2>{task.title}</h2>
            <ul>                
                <li>
                    {task.description}
                </li>
            </ul>
        </>
    );
};
export default TaskDetail;