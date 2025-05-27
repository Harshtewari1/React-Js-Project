import { Fragment } from "react";
import { ToastContainer, toast } from 'react-toastify';


const Read = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;

    const DeleteHandler = (id) => {
        const filterTodo = todos.filter((todo) => todo.id != id);
        toast.error('Delete Task Successfully!');
        settodos(filterTodo);
        
    }

    const renderTodos = todos.map(todo => {
        return (
            <li className="p-5 bg-gray-900 rounded flex justify-between items-center mt-4"
                key={todo.id}>
                <spam className='text-xl font-thin '>
                    {todo.title}
                </spam>
                <button className="font-thin p-2 cursor-pointer text-red-400" onClick={() => { DeleteHandler(todo.id) }
                }>Delete</button>
                <ToastContainer />
            </li>
        );
    })
    return (
        <div className="w-[40%] p-10">
            <h1 className='text-5xl font-thin mb-10'><spam className="text-orange-400 text-6xl">Pending</spam> Todos</h1>
            <ol>{renderTodos}</ol>
        </div>
    )
}

export default Read