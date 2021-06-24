import React, { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggle_flag, update_number, append_array, delete_array, update_array } from "../redux/mainState"

/*
Dispatches.js is the left div of the wrapper page
its intentions are to house all the user interface elements 
that are tied to different "dispatches" for the redux
reducer

first you inport your useSelector, useDispatch hooks from react-redux
import { useSelector, useDispatch } from "react-redux"

then you import your action callbacks from your slice
import { toggle_flag, update_number, append_array, delete_array, update_array } from "../redux/mainState"

in your function you define your hooks
const dispatch = useDispatch()
const { numItems } = useSelector((state) => state.myState)

useSelector, provides access to the state variables, here were just bringing in numItems
useDispatch provides access to the callbacks so you can pass new values into state
then you can simply access those callbacks as function calls of dispatch, and you pass in the callback
as an arguement, plus any payload
dispatch(update_number(num))

*/

function Dispatches() {
  const dispatch = useDispatch()
  const { numItems } = useSelector((state) => state.myState)
  var toggle
  const inpRef1 = useRef(null)
  const inpRef2 = useRef(null)

  /*
  handleClick
  passes a true/false to props dispatch
  to set boolean value in state
  */
  function handleClick() {
    toggle = !toggle
    dispatch(toggle_flag())
  }

  /*
  handleChange
  passes an integer to props dispatch
  to set numeric value in state
  */
  function handleChange(event) {
    var num = event.target.value
    dispatch(update_number(num))
  }

  /*
  handleAppend
  button press event that set's up an object
  to be passed to dispatch to append to 
  an array in state
  data is dummy data
  */
  function handleAppend() {
    var num = numItems
    var num2 = Math.random()
    var num3 = Math.random()
    dispatch(
      append_array({
        ID: num,
        random1: num2,
        random2: num3,
      })
    )
  }

  /*
  handleEdit
  button press event that set's up an index number
  to dispatch to edit the array of data at that
  index in state
  data is dummy data
  */
  function handleEdit() {
    var num2 = Math.random()
    var num3 = Math.random()
    var num1 = parseInt(inpRef1.current.value)
    dispatch(
      update_array({
        ID: num1,
        random1: num2,
        random2: num3,
      })
    )
  }

  /*
  handleDelete
  button press event that set's up an index number
  to dispatch to delete the element of an array of data at that
  index in state  
  */
  function handleDelete() {
    dispatch(delete_array(parseInt(inpRef2.current.value)))
  }

  //JSX
  return (
    <div className="dispatches">
      <h1>Dispatches</h1>
      <div>
        <button onClick={handleClick} className="buttons" id="button1">
          Click me to Toggle State
        </button>
      </div>
      <div>
        <input onChange={(e) => handleChange(e)} type="number" defaultValue="0" />
      </div>
      <div>
        <div>
          <span>ARRAY management</span>
        </div>

        <button onClick={handleAppend}>Append</button>

        <div>
          <label>index to edit</label>
          <input ref={inpRef1} min="0" defaultValue="0" type="number" />
          <button onClick={handleEdit}>Edit</button>
        </div>

        <div>
          <label>index to delete</label>
          <input ref={inpRef2} min="0" defaultValue="0" type="number" />
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Dispatches
