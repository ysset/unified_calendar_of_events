import {SEND_SINGLE_DAY_EVENTS_INFORMATION, SET_IS_AUTH} from './Actions'

const initialState = {
    singleDayEvents: [],
    userData: {
        userEmail: 'EKS@gmail.com',
        password: '00000000',
        fullName: 'Lutskii Daniil',
        userPhone: '8(914)-000-0000'
    },
    isAuth: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }

        case SEND_SINGLE_DAY_EVENTS_INFORMATION:
            return {
                ...state,
                ...state.singleDayEvents,
                singleDayEvents: action.singleDayEvents
            }
        default:
            return state
    }
}

export const getState = state => state