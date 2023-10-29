export const SAVE_CHAT = "SAVE_CHAT";

export const CLEAR_CHAT = "CLEAR_CHAT";

export interface saveChat {
    type: typeof SAVE_CHAT
    data: object;
}

export interface clearChat {
    type: typeof CLEAR_CHAT
}

export type ChatDispatchType = saveChat | clearChat;