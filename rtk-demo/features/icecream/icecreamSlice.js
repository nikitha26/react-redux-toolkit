const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numofIceCreams : 20
}

const icecreamSlice = createSlice({
   name:'icecream',
   initialState,
   reducers:{
     ordered: (state) => {
        state.numofIceCreams--
     },
     restocked:(state,action) => {      
        state.numofIceCreams += action.payload
    }
   },
   // extraReducers:{
   //    ['cake/ordered']:(state,action) => {
   //        state.numofIceCreams--
   //    }
   // }
   //When cake ordered icecream decrement by 1 (because we are giving free when cak order icecream free)
   extraReducers: (builder) => {      
      builder.addCase(cakeActions.ordered,(state) => {    //With build method --> Extra Reducers
          state.numofIceCreams--
      })
   }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions