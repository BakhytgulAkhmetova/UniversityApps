import * as actions from './actions';

export const getFormatsRequest = () => {
    return { type: actions.GET_FORMAT_LIST_REQUEST };
};


export const getFormatsSuccess = (payload) => {
    return {
        type: actions.GET_FORMAT_LIST_SUCCESS,
        payload
    };
};

export const getFormatsFailure = (payload) => {
    return {
        type: actions.GET_FORMAT_LIST_FAILURE,
        payload
    };
};