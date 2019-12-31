export const FRUIT_TAKED = 'fruit-taked'
export const ADD_FRUIT = 'add-fruit'


export function fruitTaked({ playerId, fruitId }) {
    return {
        type: FRUIT_TAKED,
        playerId,
        fruitId
    }
}

export function fruitAdded({ fruitId, fruitX, fruitY }) {
    return {
        type: ADD_FRUIT,
        fruitId,
        fruitX,
        fruitY
    }
}