export const CHANGE_SCORE = 'change-score'
export const ADD_SCORE = 'add-score'

export function changeScore({ playerId }) {
    return {
        type: CHANGE_SCORE,
        playerId
    }
}

export function addScore({ playerId, playerName }) {
    return {
        type: ADD_SCORE,
        playerId,
        playerName,
        fruits: 0
    }
}