export const SELECT_USERNAME = 'SELECT_USERNAME'

export function selectUserName({ userName }) {
    return {
        type: SELECT_USERNAME,
        userName
    }
}