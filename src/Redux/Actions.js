export const SEND_THEME_INFORMATION = 'SEND_THEME_INFORMATION';
export const SEND_SINGLE_DAY_EVENTS_INFORMATION = 'SEND_SINGLE_DAY_EVENTS_INFORMATION';
export const FETCH_DATA_ERROR = 'FETCH_PRODUCTS_ERROR';

export function sendThemeInformation(data) {
    return {
        type: SEND_THEME_INFORMATION,
        data: data
    }
}

export function sendSingleDayEventsInformation(data) {
    console.log(data)
    return {
        type: SEND_SINGLE_DAY_EVENTS_INFORMATION,
        singleDayEvents: data
    }
}

export function fetchDataError(error) {
    return {
        type: FETCH_DATA_ERROR,
        error: error
    }
}