const incrementCounterAction = () => {
    return {
        type: 'INCREMENT'
    }
}

const decrementCounterAction = () => {
    return {
        type: 'DECREMENT'
    }
}

export {
    incrementCounterAction,
    decrementCounterAction
}