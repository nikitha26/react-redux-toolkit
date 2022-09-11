const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numOfCakes:10
}

const cakeSlice = createSlice({
   name:'cake',
   initialState,
    reducers:{
        ordered: (state) => {     //Actions like ORDER_CAKE
        state.numOfCakes--
        },
        restocked:(state,action) => {       //Actions like RESTOKED_CAKE
            state.numOfCakes += action.payload
        }
    },
    // extraReducers:{
    //     ['cake/ordered']:(state,action) => {
    //         state.numofIceCreams--
    //     }
    // }

})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions