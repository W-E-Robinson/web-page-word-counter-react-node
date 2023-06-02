import {
    FETCH_WORD_COUNT_REQUEST,
    FETCH_WORD_COUNT_SUCCESS,
    FETCH_WORD_COUNT_FAILURE,
} from "../../actions/wordCount/actionTypes";
import {
    WordCountActions,
    WordCountState,
} from "../../actions/wordCount/types";

export const initialState: WordCountState = {
    pending: false,
    error: undefined,
    wordCountsInfo: [],
};

export const wordCountReducer = (state = initialState, action: WordCountActions) => {
    switch (action.type) {
        case FETCH_WORD_COUNT_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case FETCH_WORD_COUNT_SUCCESS:
            return {
                ...state,
                pending: false,
                error: null,
                wordCountsInfo: [action.payload.webPageInfo, ...state.wordCountsInfo],
            };
        case FETCH_WORD_COUNT_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload.error,
            };
        default:
            return {
                ...state,
            };
    }
};
