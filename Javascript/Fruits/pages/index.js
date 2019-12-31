import React from 'react'
import GameScreen from '../components/game-screen'
import ScoreScreen from '../components/score-screen'
import { connect } from 'react-redux'

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

const mapStateToProps = ({ fruits, players }) => ({
    fruits,
    players
})

export default connect(mapStateToProps, null)(Index)