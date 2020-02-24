import {
    GET_ALL_USERS
} from './../actions/types';

export default function (state = {}, action) {
    switch (action.type) {

        /*-------------------------------------------
        |--- @Get All Users
        -------------------------------------------*/
        case GET_ALL_USERS:
            return {
                ...state,
                getAllUsers: action.payload
            }

        /*-------------------------------------------
        |--- @default Case
        -------------------------------------------*/
        default:
            return state;
    }
}