import { createStore, applyMiddleware } from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { rootReducer } from '../redux/reducers/reducer'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['employeeReducer'],
}

// const {persistReducer} = require('redux-persist');
const persistedReducer = persistReducer<any>(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)
export type RootStore = ReturnType<typeof rootReducer>
export type ReduxState = ReturnType<typeof rootReducer>
export type TypedDispatch = ThunkDispatch<ReduxState, any, any>
