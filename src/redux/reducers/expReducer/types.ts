export const INCREMENT_EXPERIENCE = "INCREMENT_EXPERIENCE";
export const DECREMENT_EXPERIENCE = "DECREMENT_EXPERIENCE";

export interface ExpState {
    amount: bigint
}

export interface IncrementExperience {
    type: typeof INCREMENT_EXPERIENCE,
    payload: bigint,
}

export interface DecrementExperience {
    type: typeof DECREMENT_EXPERIENCE,
    payload: bigint,
}

export const IncrementExperienceAction = (payload: bigint) : IncrementExperience => {
   return {
       type: INCREMENT_EXPERIENCE,
       payload
   } 
}

export const DecrementExperienceAction = (payload: bigint) : DecrementExperience => {
   return {
       type: DECREMENT_EXPERIENCE,
       payload
   } 
}
