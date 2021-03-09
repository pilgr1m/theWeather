const dataReceived = (newData) => {
    console.log(newData)
    return {
        type: "DATA_RECEIVED",
        payload: newData
    }
}
const dataError = (newError) => {
    return {
        type: "DATA_ERROR",
        error: newError
    }
}
const dataLoading = (newLoading) => {
    return {
        type: "DATA_LOADING",
        loading: newLoading

    }
}


export {
    dataReceived, dataError, dataLoading
}