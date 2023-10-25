export const SAVE_DATA = "SAVE_DATA";
export const DATA_CLEAR = 'DATA_CLEAR';

export interface saveData  {
type: typeof SAVE_DATA
data: object;
}

export interface clearData {
    type: typeof DATA_CLEAR
}

export type DataDispatchType = saveData | clearData;