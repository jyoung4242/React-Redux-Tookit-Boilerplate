import { createSlice } from "@reduxjs/toolkit"

/**
 * a slice is an instance of a reducer, which includes
 * everything you need in one .js file
 * the action creators, the initial state, the export
 * since redux toolkit slices implement immer you don't
 * have to think about managing an immutable state
 * your initial states are defined at the top
 * and then you list out all the action callbacks
 *
 */

export const mainSlice = createSlice({
  name: "myState",
  initialState: {
    loadingFlag: false,
    generalNumber: 0,
    generalObject: [],
    numItems: 0,
  },
  reducers: {
    toggle_flag: (state) => {
      state.loadingFlag = !state.loadingFlag
    },
    update_number: (state, action) => {
      state.generalNumber = action.payload
    },
    append_array: (state, action) => {
      state.generalObject.push(action.payload)
      state.numItems = state.generalObject.length
    },
    delete_array: (state, action) => {
      state.generalObject = state.generalObject.filter((item) => item.ID !== action.payload)
      console.log(state.generalObject, action.payload)
      state.numItems = state.generalObject.length
    },
    update_array: (state, action) => {
      var object = action.payload
      var x = state.generalObject.findIndex((element) => element.ID === object.ID)
      state.generalObject[x].ID = object.ID
      state.generalObject[x].random1 = object.random1
      state.generalObject[x].random2 = object.random2
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggle_flag, update_number, append_array, delete_array, update_array } = mainSlice.actions

export default mainSlice.reducer
