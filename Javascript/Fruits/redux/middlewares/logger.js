const logger = store => next => action => {
    console.group()
    console.log("Action: ", action)
    var returnData = next(action)
    console.log('New state: ', store.getState())
    console.groupEnd()

    return returnData
}

export default logger