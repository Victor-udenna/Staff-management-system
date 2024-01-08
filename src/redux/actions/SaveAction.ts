import { Dispatch } from 'redux'
import {
  SaveAuthDispatchType,
  SAVE_AUTH,
  CLEAR_AUTH,
} from './SaveAuthActionType'

export const saveAuth = (data: object) => async (dispatch: Dispatch<SaveAuthDispatchType>) => {
    dispatch({
      type: SAVE_AUTH,
      data,
    })
  }

export const clearChat = () => async (dispatch: Dispatch<SaveAuthDispatchType>) => {
    dispatch({
      type: CLEAR_AUTH,
    })
  }
