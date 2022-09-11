const { default: produce } = require('immer');
const redux = require('redux')
const produc = require('immer').produce
const createStore = redux.legacy_createStore
const STREET_UPDATE = 'STREET_UPDATE';
const initialState = {
    name:'john',
    address:{
        country:'India',
        city:'hyderabad',
        street:'Old City',
        hNo:{
          no:'1/2/23'
        }
    }
}

const street = (street) => {
    return{
        type:STREET_UPDATE,
        payload:street
    }
}

const reducer = (state = initialState,action) => {
    switch (action.type) {
        case STREET_UPDATE:
            // return {
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street:action.payload
            //     }
            // }
            return produce(state, (draft) => {
                draft.address.hNo.no = action.payload
            })
            break;
        default:
          return state;
        break;
    }        
}

const store = createStore(reducer)
console.log('IntialState', store.getState());

const unSubscribte = store.subscribe(() => 
   console.log( store.getState())
);
store.dispatch(street('123/45'))