import { createStore } from 'redux';

const initialState = 10;

const INCREASE_TIME_BY = 'INCREASE_TIME_BY';
const RESET_TIMER = 'RESET_TIMER';

export const increaseTimeBy = time => {
    return {
        type: INCREASE_TIME_BY,
        time
    };
};

export const resetTimer = time => {
    return {
        type: RESET_TIMER
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_TIME_BY:
            return state + action.time;
        case RESET_TIMER:
            return 0;
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
