export default (state, action) => {
    console.log("action", action);
    console.log("state", state);
    switch (action.type) {
        case 'EDIT_TITLE':
            return {
                // ...state,
                flightNumber: action.flightNumber
            }
        default:
            return state;
    }
} 