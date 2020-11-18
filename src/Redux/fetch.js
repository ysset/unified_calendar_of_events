import {
    fetchDataError
} from './Actions';

function fetchData(whatFetch, options) {
    return dispatch => {
        fetch(`http://hw.hitmarker.pro/api/${whatFetch}`, options)
            .then(res => res.json())
            .then(res => {

                return res;
            })
            .catch(error => {
                dispatch(fetchDataError(error));
            })
    }
}
export default fetchData;