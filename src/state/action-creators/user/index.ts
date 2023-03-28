import { UserActionType } from "../../action-types"
import { Dispatch } from 'redux';
import { UserAction } from "../../actions/index";
import User from "../../../models/User";

export const addUser = (user: User) => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: UserActionType.ADD,
            payload: user
        })
    }
}