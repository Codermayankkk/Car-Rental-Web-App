import { actionTypes } from "../actionTypes"

const initialState = {
    loading: false,
    status: "",
    message: "",
    data:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case actionTypes.USER_GET_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case actionTypes.USER_GET_SUCCESS:
            return{
                ...state,
                loading: false,
                data: action?.data,
                message: action?.message,
                status: action?.status,
            }
        case actionTypes.USER_GET_FAILURE:
            return{
                ...state,
                loading: false,
                message: action?.message,
                status: action?.status,
            }
        case actionTypes.USER_GET_RESET:
            return initialState  
        default:
            return state;  
    }
}
