import { BankActionType } from "../../action-types"
import { Dispatch } from 'redux';
import { BankAction } from "../../actions/index";

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<BankAction>) => {
        dispatch({
            type: BankActionType.DEPOSIT,
            payload: amount
        })
    }
}

export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch<BankAction>) => {
        dispatch({
            type: BankActionType.WITHDRAW,
            payload: amount
        })
    }
}

export const bankrupt = () => {
    return (dispatch: Dispatch<BankAction>) => {
        dispatch({
            type: BankActionType.BANKRUPT
        })
    }
}