import { updateNormalActions } from "../normalActionsReducer/updateNormalActions"

export const UpdateGame = () => {
    return (dispatch : Function) => {
        dispatch(updateNormalActions());
        setTimeout(() => dispatch(UpdateGame()), 100);
    }
}
