export const SAVE_AUTH = "SAVE_AUTH";

export const CLEAR_DATA = "CLEAR_DATA";

export const CLEAR_AUTH = "CLEAR_AUTH";

export interface saveAuth {
    type: typeof SAVE_AUTH,
    data: object
}


export interface clearAuth {
    type: typeof CLEAR_AUTH
}

export type SaveAuthDispatchType = saveAuth | clearAuth;