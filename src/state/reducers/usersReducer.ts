import User from "../../models/User";
import { UserActionType } from "../action-types";
import { UserAction } from "../actions/index";

const initialState: User[] = [
    {
        name: "Yoad",
        email: "yoad@email.com"
    }
];

const reducer = (state: User[] = initialState, action: UserAction) => {
    switch(action.type) {
        case UserActionType.ADD:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default reducer;