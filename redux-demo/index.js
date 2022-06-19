const redux = require('redux')
const createStore = redux.legacy_createStore


const CAKE_ORDERED = 'CAKE_ORDERED';

function orderCake(){     //Action Creator
   return{     //return Action Obj
        type:CAKE_ORDERED,
        quanity:1
    }
}

const intialState = {   //In one object
    numofCakes:10,
}

//Reducer --> take two(state and action) arguments and return new state
const reducer = (state = intialState,action) =>{
  switch (action.type) {
    case CAKE_ORDERED:
        return {
            numofCakes:state.numofCakes-1,
        }
        break;
  
    default:
        return state;
        break;
  }
}

const store = createStore(reducer)
console.log('IntialState', store.getState());

