import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import store from "./redux/configureStore"
import { Provider } from "react-redux"

/*
This is where you can import the store and the provide for the redux toolkit
import store from "./redux/configureStore"
import { Provider } from "react-redux"

Then you can wrap your <App/> in the provider
*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
