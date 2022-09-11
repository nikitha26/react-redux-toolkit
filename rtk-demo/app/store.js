const configureStroe = require('@reduxjs/toolkit').configureStore;
const { getDefaultMiddleware } = require('@reduxjs/toolkit');
const reduxLogger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeSlice');
const icecreamReducer = require('../features/icecream/icecreamSlice');

const userReducer = require('../features/users/userSlice');

// const logger = reduxLogger.createLogger()

const store = configureStroe({
    reducer:{           //Here we can attach multiple reducers
        cake:cakeReducer,
        icecream:icecreamReducer,
        user:userReducer
    },
    // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store;