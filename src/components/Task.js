import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/taskSlice/taskSlice';

const Task = ({task}) => {
    const dispatch=useDispatch()
     const [onUpdate, setOnUpdate] = useState(false);
     const [newTask, setNewTask] = useState(task);
     
    return (
        <div className={ `task ${task.isDone ? 'done' : 'notdone'}`}
        onClick={()  => dispatch(editTask({...newTask,isDone:!task.isDone})) }
         >
            {onUpdate ?
             <><input id='in' type={"text"} defaultValue={task.title} onChange={(e)=>setNewTask({...newTask,title:e.target.value})}/>
             <div>
             <button onClick={()=>{dispatch(editTask(newTask))
                
                setOnUpdate(false)
                }}>Confirm</button>
             <button onClick={()=>setOnUpdate(false)}>Cancel</button></div>
             </>
             :
            <> <h3>{task.title}</h3>
            <div>
            <button onClick={()=>setOnUpdate(true)}>Update</button>
            <button onClick={()=>dispatch(deleteTask(task))}>Delete</button></div></> }
        </div>
    );
}

export default Task;
