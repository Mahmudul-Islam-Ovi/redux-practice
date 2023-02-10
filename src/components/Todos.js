import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from './Services/action/todosActions';

const Todos = () => {
    const {isLoading,todos,errors} = useSelector(state =>state);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getAllTodos())
    },[dispatch])
    return (
        <div>
            <h1>Todos app </h1>
            {isLoading && <h3>Loading.....</h3>}
            {errors && <h3>{errors.message}</h3>}
            <div>
                {
                    todos?.map((todo) =>{
                        return <div key={todo.id}>
                           <h4> id : {todo.id}</h4>
                           <h4> title : {todo.title}</h4>
                        </div>
                        
                    })
                }
            </div>
        </div>
    );
};

export default Todos;