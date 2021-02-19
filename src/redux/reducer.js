const initialState = {
    data: {},
    unit: "",
    city: "",
    error: false,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "DATA_LOADED":
            return {
                data: action.payload,
                loading: true
            }
        case "DATA_ERROR":
            return {
                ...state, error: true
            }
        case "DATA_REQUEST":
            return {
                ...state, loading: true
            }
        case "SET_UNIT":
            return {
                ...state, unit: ""
            }
        case "SET_CITY":
            return {
                ...state, city: ""
            }
        default:
            return state
    }
}

export default reducer