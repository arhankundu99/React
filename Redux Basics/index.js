const redux = require('redux');

// reducer function which will be called by redux library whenever an action is dispached or THE STORE is created for the first time.
// that is why, we have to initialise the state with the initial value.
const counterReducer = (state = {count: 0}, action) => {
    if(action.type === 'INCREMENT')
        return {
            count: state.count + 1
        }
    
    if(action.type === 'DECREMENT')
        return {
            count: state.count - 1
        }
    
    return state;
}

// create the store using the reducer
const store = redux.createStore(counterReducer);



// subscribe to the store. Whenever the data in the store changes, the method which has subscribed to the store will get notified.
store.subscribe(() => {
    // print the current state
    console.log(store.getState());
})

// dispatch an action.
store.dispatch({
    type: 'INCREMENT'
})


