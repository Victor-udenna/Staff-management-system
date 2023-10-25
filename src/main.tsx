import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import './index.css'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import{ store, persistor} from "./Config/configstore.ts";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<Provider store={store}>
<PersistGate loading={false} persistor={persistor}>
<React.StrictMode>
    <App />
  </React.StrictMode>,
</PersistGate>
</Provider>
)
