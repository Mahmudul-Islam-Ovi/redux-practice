import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCESS } from "../constants/todosConstans";

const initialState = {
    isLoading : false,
    todos : [],
    errors : null

}

const todosReducer = (state = initialState, action) => {

  switch(action.type) {
    case GET_TODOS_REQUEST: 
    return{
        ...state,
        isLoading : true,
    }
    case GET_TODOS_SUCESS: 
    return{
       
        isLoading : false,
        todos : action.payload,
        errors : null
    }
    case GET_TODOS_FAILED: 
    return{
        isLoading : false,
        todos : [],
        errors :  action.payload
    }

    default :
    return state ;
  }

};

export default todosReducer;