import axios from "axios";
import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCESS } from "../constants/todosConstans";

export const getAllTodos = () => async (dispatch) => {
    dispatch({ type: GET_TODOS_REQUEST });
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch({ type: GET_TODOS_SUCESS, payload: res.data });
    }
    catch (err) {
        dispatch({ type: GET_TODOS_FAILED, payload: err.message });
    }
}