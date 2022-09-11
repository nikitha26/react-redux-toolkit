const redux = require('redux')
const createStore = redux.legacy_createStore
const bindActionCreators = redux.bindActionCreators
const combineReducer = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware;

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';
function orderCake(){     //Action Creator
   return{     //return Action Obj
        type:CAKE_ORDERED,
        payload:1
    }
}
function restoke(qty) {
    return{
        type:CAKE_RESTOCKED,
        payload:qty
    }
}
function icecreamOrder(qty) {
    return{
        type:ICECREAM_ORDERED,
        payload:qty
    }
}
function icecreamRestoke(qty) {
    return{
        type:ICECREAM_RESTOCKED,
        payload:qty
    }
}
const cakeState = {   //In one object
    numofCakes:10,
}
const iceCreamState = {
    numofIcecreams:20
}

//Reducer --> take two(state and action) arguments and return new state
const cakeReducer = (state = cakeState,action) =>{
  switch (action.type) {
    case CAKE_ORDERED:
        return {
            ...state,
            numofCakes:state.numofCakes-1,
        }
        break;
    case CAKE_RESTOCKED:
        return {
            ...state,
            numofCakes:state.numofCakes + action.payload
        }
        break;
    default:
        return state;
        break;
  }
}
const iceCreamReducer = (state = iceCreamState,action) =>{
    switch (action.type) {
      case ICECREAM_ORDERED:
          return {
              ...state,
              numofIcecreams:state.numofIcecreams-1,
          }
          break;
      case ICECREAM_RESTOCKED:
          return {
              ...state,
              numofIcecreams:state.numofIcecreams + action.payload
          }
          break;
      default:
          return state;
          break;
    }
  }

const rootReducer = combineReducer({
    cake:cakeReducer,
    icecream:iceCreamReducer
})
const store = createStore(rootReducer,applyMiddleWare(logger))
console.log('IntialState', store.getState());

const unSubscribte = store.subscribe(() => {});

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restoke(5));
// store.dispatch(icecreamOrder());
const actions = bindActionCreators(
    {
        orderCake,restoke,icecreamOrder,icecreamRestoke
    }, 
    store.dispatch)   //Like container
actions.orderCake();
actions.restoke(2);
actions.icecreamOrder();
actions.icecreamRestoke(3)
unSubscribte()