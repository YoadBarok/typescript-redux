import User from "../../../models/User"
import {UserActionType} from "../../action-types/index"

interface AddAction {
    type: UserActionType.ADD,
    payload: User
}


export type UserAction = AddAction;