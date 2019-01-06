import axios from "axios";
import { getRedirectPath } from '../util/util';

//常量
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const LOAD_DATA = 'LOAD_DATA';
const ERROR_MSG = 'ERROR_MSG';
const initState = {
    redirectTo:'',
    msg:'',
    user:'',
    type:''
}


function errorMsg(msg){
    return {type:ERROR_MSG,msg:msg }
}


function authSuccess(data){
    return {type:AUTH_SUCCESS,payload:data}
}



 
//reducer
export function user(state = initState,action){
    switch(action.type){
        case AUTH_SUCCESS:
        return {...state,msg:'',redirectTo:getRedirectPath(action.payload),...action.payload}
        
        case LOAD_DATA:
        return {...state,...action.payload}
        case ERROR_MSG:
        return { ...state,isAuth:false,msg:action.msg }
        default:
        return state;
        

    }
   

}

//用户登录
export function login({user,pwd}){
    if(!user || !pwd){
        return errorMsg('用户名或密码必须输入');

    }

    return dispatch => {
        axios.post('/user/login',{user,pwd})
             .then(res => {
                 if(res.status == 200 && res.data.code ==0){
                     dispatch(authSuccess(res.data.data))
                 } else {
                     dispatch(errorMsg(res.data.msg));

                 }
             })
    }
}

//用户注册
export function register({user,pwd,repeatpwd,type}){
    if(!user || !pwd || !type){
        return errorMsg('用户名密码必须输入')

    }

    if(pwd!==repeatpwd) {
        return errorMsg('密码和确认密码不同');

    }

    return dispatch => {
        axios.post('/user/register',{user,pwd,type})
         .then(res => {
             if(res.status == 200 && res.data.code ==0){
                dispatch(authSuccess({user,pwd,type}));


             } else {
                dispatch(errorMsg(res.data.msg));

             }
         })

    }

    
}

export function loadData(userinfo){

    return { msg:LOAD_DATA,payload:userinfo,type:'' }
 }


 export function update(data){
    return dispatch => {
        axios.post('/user/update',data)
             .then(res=> {
                 if(res.status == 200 && res.data.code ==0){
                    dispatch(authSuccess(res.data.data));
                 } else {
                    dispatch(errorMsg(res.data.msg));
                 }
             }) 
    }
 }

