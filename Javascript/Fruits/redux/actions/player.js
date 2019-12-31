export const SELECT_USERNAME = 'SELECT_USERNAME'

export function selectUserName({ userName }, type) {
    return {
        type: SELECT_USERNAME,
        userName
    }
}