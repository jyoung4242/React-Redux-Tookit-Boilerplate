import { configureStore } from "@reduxjs/toolkit"
import mainReducer from "./mainState"

export default configureStore({
  reducer: {
    myState: mainReducer,
  },
})

/*
This is the tookit verison of congiguring the store...
you can have one single reducer here, or list out multiple if you
want to split them up, which is not a bad idea

import mainReducer from "./mainState" is importing the reducer from mainState.js
************************************************
if you want more than one, below is how you list them out and import them
************************************************

import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './usersReducer'
import postsReducer from './postsReducer'

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
})

export default store


*/
