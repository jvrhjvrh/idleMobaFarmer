import { NormalAction, updateNormalActionsAction } from "../../reducers/normalActionsReducer/types"

export const updateNormalActions = () => {
    return (dispatch : Function, state : Function) => {
        const {normalActionsReducer} = state();
        let runActions : Function[] = [];
        //Go through all normal actions and update their values, add functions to call if
        //current time is larger than max time
        const newNormalActionState = normalActionsReducer.normalActions.map((x : NormalAction) => {
            const { active, currentTime, time, completeAction, completedTimes } = x;
            if(!active){
               return x; 
            }

            let newCurrentTime = currentTime + BigInt(1);
            let newCompletedTimes = completedTimes;

            if( newCurrentTime >= time ) {
                newCurrentTime = BigInt(0);
                newCompletedTimes++;
                runActions.push(completeAction)
            }
            return {
                ...x,
                currentTime: newCurrentTime,
                completedTimes: newCompletedTimes,
            }
        });

        dispatch(updateNormalActionsAction(newNormalActionState));
        runActions.forEach(x => dispatch(x))
    }
}
