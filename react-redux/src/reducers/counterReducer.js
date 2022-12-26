const initialState = {
    counter: 0
}

// REDUCER FUNCTION OF COUNTER.
// REMEMBER THAT REDUCER FUNCTIONS MUST BE PURE FUNCTIONS (NO HTTP REQUESTS, SAVING TO LOCAL STORAGE ETC)
const counterReducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT'){
        return {
            counter: state.counter + 1
        }
    }

    if(action.type === 'DECREMENT'){
        return {
            counter: state.counter - 1
        }
    }
    return state;
}

export default counterReducer;