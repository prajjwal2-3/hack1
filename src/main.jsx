import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { router } from './App.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import store,{persistor} from './store.js'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(

 <Provider store={store}>
 <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
 </Provider>
  
)
