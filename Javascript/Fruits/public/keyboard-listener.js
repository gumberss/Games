export default function createKeyboardListener(document) {

    const state = {
        observers: [],
        playerId: null
    }

    function registerPlayerId(playerId) {
        state.playerId = playerId
    }

    function subscribe(observerFunction) {
        state.observers.push(observerFunction)
        return () => state.observers = state.observers.filter(x => x != observerFunction)
    }

    function notifyAll(command) {
        console.log(`Notifying ${state.observers.length} observers`)

        for (const observerFunction of state.observers) {
            observerFunction(command)
        }
    }

    function handleKeyDown(event) {
        notifyAll({ playerId: state.playerId, keyPressed: event.key })
    }

    document.addEventListener('keydown', handleKeyDown)

    function handleKeyDown(event){
        const keyPressed = event.key

        const command = {
            type: 'move-player',
            playerId: state.playerId,
            keyPressed
        }
        
        notifyAll(command)
    }

    return {
        subscribe,
        registerPlayerId
    }
}