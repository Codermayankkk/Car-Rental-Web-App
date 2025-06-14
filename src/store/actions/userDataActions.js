import { actionTypes } from "../actionTypes";
import { AxiosService } from "../service";

export const userData = (payload, callback) => {
        // console.log(payload); --> to check payload data
        return async (dispatch) => {
            dispatch({ type: actionTypes.USER_GET_REQUEST });
            try{
                const response = await AxiosService({
                    method: "get",
                    base_url: "https://jsonplaceholder.typicode.com",
                    endPoint: "/posts/1/comments",
                    payload: payload,
                    isAuth: false,
                })
                // console.log(response); --> check response of API
                dispatch({ type: actionTypes.USER_GET_SUCCESS,
                    status: response?.status,
                    data: response?.data,
                    message: "Successfull",
                 });
                 if(callback){
                    callback(
                        response?.status,
                        response?.data,
                        // response?.message,
                    )
                }
            }catch(error){
                dispatch({ type: actionTypes.USER_GET_FAILURE,
                    status: error?.response?.status,
                    message: "Failed"
                 });
            }
        }
}
export const userDataReset = () => {dispatch({ type:  actionTypes.USER_GET_RESET})}