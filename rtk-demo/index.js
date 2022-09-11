const store = require('./app/store'); //importing store
const cakeActions = require('./features/cake/cakeSlice').cakeActions //importing reducers and actions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions;
const fetchUsers = require('./features/users/userSlice').fetchUsers;

console.log('InitialState',store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('UpdatedState',store.getState())
})  //it will take from reducer function

//dispatching
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// //Icecram dispatchers
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(3))

store.dispatch(fetchUsers())
// unsubscribe();