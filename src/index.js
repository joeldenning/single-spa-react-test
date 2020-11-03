import singleSpaReact from 'single-spa-react'
import Parcel from 'single-spa-react/parcel'
import React from 'react'
import ReactDOM from 'react-dom'
import { mountRootParcel } from 'single-spa'

console.log('here')
const container = document.createElement('div')
document.body.appendChild(container)

const parcelConfig = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Button,
  errorBoundary() {
    return "Error"
  }
})

ReactDOM.render(React.createElement(App), container)

function App(props) {
  return React.createElement(Parcel, {config: parcelConfig, mountParcel: mountRootParcel})
}

function Button(props) {
  return React.createElement('button', null, "The button")
}
