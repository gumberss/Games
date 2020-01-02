export const CHANGE_SCORE = 'change-score'
export const ADD_SCORE = 'add-score'

export function changeScore({ playerId }){
    return {
        type: CHANGE_SCORE,
        playerId
    }
}

export function addScore(command){
    return {
        type: ADD_SCORE,
        ...command
    }
}