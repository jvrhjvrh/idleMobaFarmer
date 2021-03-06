import { Dispatch } from "react";

export const UPDATE_NORMAL_ACTIONS = "UPDATE_NORMAL_ACTIONS";

export interface UpdateNormalActionsAction {
    type: typeof UPDATE_NORMAL_ACTIONS,
    payload: NormalAction[]
}

export const updateNormalActionsAction = (payload: NormalAction[]) : UpdateNormalActionsAction => {
    return {
        type: UPDATE_NORMAL_ACTIONS,
        payload
    }
}

export interface NormalAction {
    time: bigint,
    currentTime: bigint,
    completeAction: any,
    name: string,
    active: boolean
    completedTimes: bigint,
}

export interface NormalActionsState {
    normalActions: NormalAction[]
}
