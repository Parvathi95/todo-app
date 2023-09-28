import React, { useEffect, useState } from 'react'
import '../styles/todolist.css'

const Todolist = () => {
 const [todos,setTodos]=useState([]);
 const [newTodo,setNewTodo]=useState('');

 useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos').then((response)=>response.json()).then((data)=>setTodos(data));},[]);

    const addTodo=()=>{
        if(newTodo.trim()===''){
            return;
        }

        const newTodoItem={
            userId:1,
            id:todos.length+1,
            title:newTodo,
            completed:false,
        };

        fetch('https://jsonplaceholder.typicode.com/todos',{
            method:'POST',
            body:JSON.stringify(newTodoItem),
            headers:{
                'Content-Type':'application/json',
            },
        }).then((response)=>response.json())
        .then((data)=>{
            setTodos([data,...todos]);
            setNewTodo('');
        });
    };

    const toggleTodo=(id)=>{
        const updatedTodos=todos.map((todos)=>{
            if(todos.id===id){
                todos.completed=!todos.completed;
            }
            return todos;
    });

        fetch( `https://jsonplaceholder.typicode.com/todos/${id}`,{
            method:'PUT',
            body:JSON.stringify(updatedTodos.find((todos)=>todos.id===id)),
            headers:{
                'Content-Type':'application/json',
            },
        })
        .then((response)=>response.json())
        .then(()=>setTodos(updatedTodos));
    };

    const deleteTodo=(id)=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method:'DELETE',
    }).then(()=>{
        const updatedTodos=todos.filter((todos)=>todos.id !==id);
        setTodos(updatedTodos);
    });
    }
  return (
    <div className='container' id="todo">
        <h1>Todo List</h1>
        <div className='input-container'>
            <input type="text" placeholder='Enter Your Task' value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} className='todo-input'/>
            <button onClick={addTodo} className='add-button'>Add</button></div>  
            <ul className='todo-list'>
                {todos.map((todos)=>(
                    <li key={todos.id} className={`todo-item ${todos.completed?'completed':''}`}>
                        <input type='checkbox' checked={todos.completed} onChange={()=>toggleTodo(todos.id)}/>
                        <span className='todo-title' style={{textDecoration:todos.completed?'line-through':'none'}}>{todos.title}</span>
                        <button onClick={()=>deleteTodo(todos.id)} className='delete-button'>Delete</button>
                    </li>
                ))}
            </ul>   
    </div>
  )
}

export default Todolist