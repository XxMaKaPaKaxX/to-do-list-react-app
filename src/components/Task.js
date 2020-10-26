import React from 'react';
import './Task.css';

const Task = (props) => {
    const { text, date, id, important, active, finishDate } = props.task
    const importantClass = important ? "important" : undefined
    if (active) {
        return (  
            <div className={importantClass}>
                <p>
                    <strong>{text}</strong>
                    <span> - do </span>
                    <span> {date} </span>
                    <button onClick={() => props.done(id)}>Zostało zrobione</button>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        );
    } else  {
        const normalisedFinishDate = new Date(finishDate).toLocaleString();
        return (  
            <div>
                <p>
                    <strong>{text}</strong>                    
                    <em>(zrobić do {date})</em>
                    <br/>
                    <span> -potwierdzene wykonania </span> 
                    <span> {normalisedFinishDate} </span>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        );
    }
}
 
export default Task;