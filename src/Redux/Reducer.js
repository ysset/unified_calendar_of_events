import {SEND_SINGLE_DAY_EVENTS_INFORMATION} from './Actions'

const initialState = {
    singleDayEvents: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SEND_SINGLE_DAY_EVENTS_INFORMATION:
            return {
                ...state,
                ...state.singleDayEvents,
                singleDayEvents: action.singleDayEvents
            }
        default:
            return state;
    }
}

export const getState = state => state