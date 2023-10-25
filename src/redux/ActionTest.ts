const redux = require('redux');
const createstore = redux.createstore()
const applyMidleware = redux.applyMidleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const initialstate = {
    loading: false,
    users: [],
    error: "",
}

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

const fetchUserRequest =()=>{
    return {
        type: FETCH_USER_REQUEST
    }
};

const fetchUserSuccess =(users: any)=>{
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
};

const fetchUserFailure =(error: any)=>{
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
};

const reducer = (state = initialstate, action: any) =>{
    switch(action.type){
        case FETCH_USER_REQUEST: 
        return {
            ...state,
            loading: true
        }

        case FETCH_USER_SUCCESS:
            return {
            loading: false,
            users: action.payload,
            error: ""
            }

       case FETCH_USER_FAILURE: 
       return {
        loading: false,
        users: [],
        error: action.payload
       }     
    } 
};

const fetchUser = () =>{
    return (dispatch: any)=>{
        dispatch(fetchUserRequest)
  axios.get('https://jsonplaceholder.typicode.com/users/1/posts').then( (response: any)=>{
    const user = response.data.map((data: any)=> data.id)
  dispatch(fetchUserSuccess(user))
  }).catch((error: any)=>{
  dispatch(fetchUserFailure(error.message))
  })
    }
}

const store = createstore(reducer, applyMidleware(thunkMiddleware));
store.subscribe(()=> {console.log(store.getState())})
store.dispatch(fetchUser)
alert(store)