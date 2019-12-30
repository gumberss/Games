import React from 'react'
import GameScreen from '../components/game-screen'
import ScoreScreen from '../components/score-screen'

class Index extends React.Component {
    render() {
        return (<div style={styles.mainPage}>
            <GameScreen />
            <ScoreScreen />
        </div>)
    }
}

const styles = {
   
    mainPage: {
        display: 'flex',
        justifyContent: 'center'
    },
    mainPageItens: {
        flex: 1
    }
}

export default Index;