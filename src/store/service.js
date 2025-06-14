import axios from "axios";

export const AxiosService = async ({ method, base_url, endPoint, payload, ContentType, responseType, isAuth }) => {

    // const state = store.getState();
    // let accessToken = state.sessionReducer?.accessToken;
 
    // const getHeader = (isAuth) => {
    //     return isAuth ? {
    //         'Content-Type': ContentType ? ContentType : 'application/json',
    //         Authorization: `Bearer ${accessToken}`,
    //     }
    //     : {'Content-Type': ContentType ? ContentType : 'application/json' };
    // };

    // console.log('====================================');
    // console.log("calling AxiosService: ",
    //     {
    //         "method": method,
    //         "url": base_url + endPoint,
    //         "body": payload,
    //         "ContentType": ContentType ? ContentType : 'application/json',
    //         "isAuth": isAuth,
    //         "token": accessToken,
    //     }
    // );
    // console.log('====================================');

    try {
        const response = await axios({
            method: method,
            url: base_url + endPoint,
            data: method === 'get' ? undefined : payload,
            responseType: responseType ? responseType : ""
        });
        return response;
    } catch (error) {
        console.log("error :", error);
        throw error;
    }
};