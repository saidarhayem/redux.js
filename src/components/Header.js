import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice/taskSlice";
function Header() {

const [newTask,setNewTask]=useState ({title:""});
const dispatch= useDispatch()
    return (
      <div className="header">
        <input value={newTask.title} type="text" placeholder="TYPE"  onChange={(e)=>setNewTask({...newTask,title:e.target.value})}/>
        <button onClick={()=>{
          dispatch(addTask(({...newTask,isDone:false,id:Math.floor(Math.random()*1000000)})))
          setNewTask({title:""})
          }}>ADD</button>
      </div>
  );
  }
  
  export default Header;
  