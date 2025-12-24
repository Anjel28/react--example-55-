import React, { useReducer, useState } from 'react';



    
const TodoApp: React.FC = () => {
    const [state, dispatch] = useReducer(todoReducer ,[]);
    const [input, setInput] = useState(' ');


    const handleAdd = () => {
       if(input.trim()){
        dispatch({type: 'add', payload: input});
        setInput(' ');
       }
    }

    return(
        <div>
          <h2>Todo List</h2>
          <input  value={input}
          onChange={e => setInput(e.target.value)}
          placeholder ="Enter todo"/>
          <button onClick={handleAdd}>Add</button>
          <button onClick={() => dispatch({type: 'clear'})}>Clear All</button>
          <ul>
            {state.map(todo => (
                   <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => dispatch({type: 'remove', payload: todo.id})}>
                        Remove
                    </button>
                </li>
            ))}
          </ul>

        </div>
    )
}

export default TodoApp;