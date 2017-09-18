const defaultState = {
    item: null
}

const details = (state = defaultState, action) => {

    switch (action.type) {
        case 'DETAILS_OPEN':
            return { ...state, item: action.payload.item };
        case 'DETAILS_CLOSE':
            return { ...state, item: null };
        default:
            return state
    }
}

export default details