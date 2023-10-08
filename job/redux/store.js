const { configureStore } = require("@reduxjs/toolkit");
import Reducer from './reducer'



const store=configureStore({
    reducer:{
        app:Reducer
    }
})


export default store