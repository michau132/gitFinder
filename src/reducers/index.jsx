
const initialState = {
    user: '',
    userRepo: []
}
 const reducer = (state = initialState, action) => {

    if (action.type === "ADD_USER") {
        state = {...state, user: action.payload};
        return state;
    } else if (action.type === "ADD_REPO") {
        state = {...state, userRepo: action.payload}
        return state
    }
    return state;
}
export default reducer