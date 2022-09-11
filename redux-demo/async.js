const redux = require('redux');
const thunkMiddleWare = require('redux-thunk').default;
const axios = require('axios');
const createStore = redux.legacy_createStore;
const applyMiddleWare = redux.applyMiddleware;

const initialState = {
    loading:true,
    data:[],
    error:''
}

const FETCH_USERS_LIST = 'FETCH_USERS_LIST';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USER_FAILED = 'FETCH_USER_FAILED'

const fetchUsersRequest = () => {
    return {
        type:FETCH_USERS_LIST
    }
}
const fetchUsersSuceess = (users) => {
    return {
        type:FETCH_USERS_SUCCEEDED,
        payload:users
    }
}

const fetchUserFailure = (error) => {
    return {
        type:FETCH_USER_FAILED,
        payload:error
    }
}
//Reducer Function
const fetchReducer = (state = initialState,action) => {
    switch (action.type) {
        case FETCH_USERS_LIST:
            return{
                ...state,
                loading:true
            }
            break;
        case FETCH_USERS_SUCCEEDED:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
            break;
        case FETCH_USER_FAILED:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
            break;
        default:
            break;
    }
}

//Async Operations
const fetchUsers = () => {
    
    return function(dispatch){
        dispatch(fetchUsersRequest())
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then((res) => {
         const users = res.data.map((user) => user.id);
         dispatch(fetchUsersSuceess(users));
       }).catch((error) => {
        //Error message
        dispatch(fetchUserFailure(error.message))
       })
    }
}

const store = createStore(fetchReducer,applyMiddleWare(thunkMiddleWare))

store.subscribe(() => {console.log(store.getState())});
store.dispatch(fetchUsers())