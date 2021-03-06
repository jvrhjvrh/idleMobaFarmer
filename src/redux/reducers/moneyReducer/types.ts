export const INCREMENT_MONEY = "INCREMENT_MONEY";
export const DECREMENT_MONEY = "DECREMENT_MONEY";

export interface MoneyState {
    amount: bigint
}

export interface IncrementMoney{
    type: typeof INCREMENT_MONEY,
    payload: bigint
}

export interface DecrementMoney{
    type: typeof DECREMENT_MONEY,
    payload: bigint
}

export const IncrementMoneyAction = (payload: bigint) : IncrementMoney => {
    return {
        type: INCREMENT_MONEY,
        payload
    }
}

export const DecrementMoneyAction = (payload: bigint) : DecrementMoney => {
    return {
        type: DECREMENT_MONEY,
        payload
    }
}
