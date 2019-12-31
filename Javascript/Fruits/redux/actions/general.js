export const SETUP = 'setup'

export function setup(newState) {
    return {
        type: SETUP,
        newState
    }
}