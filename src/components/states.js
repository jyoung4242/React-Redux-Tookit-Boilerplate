import React, { useRef, useEffect } from "react"
import { useSelector } from "react-redux"

/*
states.js is the right div of the wrapper page
its intentions are to house all the indicator elements 
that are tied to different states in the redux
reducer

first you inport your useSelector hook from react-redux
import { useSelector } from "react-redux"

we don't have any dispatch callbacks in this component, being an indicator state

useSelector, provides access to the state variables, here were just bringing in 
{generalObject, generalNumber, loadingFlag} as state variables

then you can "use" these as normal variables in your code (readonly)

*/

function StateIndicators() {
  const { generalObject, generalNumber, loadingFlag } = useSelector((state) => state.myState)
  const chkboxRef = useRef(null)

  useEffect(() => {
    chkboxRef.current.checked = loadingFlag
  }, [loadingFlag])

  //JSX
  return (
    <div className="indicators">
      <h1>State Indicators</h1>
      <div>
        <input ref={chkboxRef} type="checkbox" id="scales" name="scales" />
        <label htmlFor="scales">Boolean Flag</label>
      </div>
      {/*This is tying the redux state to the innerHtml of an element on the DOM */}
      <div>
        <label htmlFor="">{generalNumber}</label>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Item #</th>
              <th>Number 1</th>
              <th>Number 2</th>
            </tr>
          </thead>
          <tbody>
            {/*This is iterating over an array in the redux store and creating a table entry for each element */}
            {generalObject.map((obj, index) => (
              <tr key={obj.ID}>
                <td>{obj.ID}</td>
                <td>{Math.floor(obj.random1 * 100)}</td>
                <td>{Math.floor(obj.random2 * 100)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StateIndicators
