import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './App'
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()


const store = configureStore()

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store} >
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)

registerServiceWorker()

