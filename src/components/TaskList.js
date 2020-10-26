import React from 'react';
import Task from './Task'

const TaskList = (props) => {
    
    const activeTasks = props.tasks.filter(task => task.active).map(task => <Task key={task.id} task={task} delete={props.delete} done={props.done}/>)
    const doneTasks = props.tasks.filter(task => !task.active).map(task => <Task key={task.id} task={task} delete={props.delete} done={props.done}/>)
    const countOfVisibleDoneTasks = 5; /// zrobić to kontrolowanym przez użytkownika
    return (  
        <div className="task__list">
            <div className="activeTask">
                <h2>Zadania do zrobienia</h2>
                {activeTasks.length > 0 ? activeTasks: <p>nie ma nic do zrobienia</p>}       
                
            </div>

            <hr/>

            <div className="doneTasks">
                <h2>Zadania zrobione: {doneTasks.length}</h2>
                <span>{doneTasks.length > 5 && `wyświetlonych jest ${countOfVisibleDoneTasks} ostatnio wykonanych zadań`}</span>
                {doneTasks.slice(0, countOfVisibleDoneTasks)}     
            </div>


        </div>
    );
}
 
export default TaskList;