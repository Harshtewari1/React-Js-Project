import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify';

const Create = (props) => {
    const todos = props.todos;
    const setTodos = props.settodos;

    
    const [title, settitle] = useState("")



    const SubmitHandler = (e) => {
        e.preventDefault();
        const newTodo = {
            id: nanoid(),
            title,
            isCompleted: false,
        };

        let copyiesTodo = [...todos];
        copyiesTodo.push(newTodo);
        setTodos(copyiesTodo);
        toast.success('Add Task Successfully!');
        settitle("")

    }
    

    return (
        <div className=' w-[60%] p-10 '>
            <h1 className='text-5xl font-thin mb-10'>Set <spam className="text-red-400" >Reminder</spam>  For  <br />Tasks</h1>
            <form onSubmit={SubmitHandler}>
                <input
                    className='border-b w-full text-2xl font-thin p-2 outline-0'
                    type='text'
                    placeholder='title'
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                />
                <br />
                <button className='text-xl px-10 py-2 border rounded mt-5 '>Add </button>
                <ToastContainer />
            </form>
        </div>
    )
}

export default Create