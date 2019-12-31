import React from 'react'
import colors from '../default/colors'
import text from '../default/text'

import PlayerScore from './player-score'

export default class ScoreScreen extends React.Component {

    render() {
        return (<div style={styles.scoreContainer}>
            <label style={styles.scoreTitle}> {text.SCORE} </label>
            <PlayerScore player={{
                name: 'batman',
                score: 123,
                position: 'first'
            }} />

            <PlayerScore player={{
                name: 'batman',
                score: 123,
                position: 'second'
            }} />

            <PlayerScore player={{
                name: 'batman',
                score: 123,
                position: 'third'
            }} />

            <PlayerScore player={{
                name: 'batman',
                score: 123,
            }} />


          
        </div>)
    }
}

const styles = {
    scoreContainer: {
        border: '2px solid ' + colors.GRAY,
        width: '300px',
        maxHeight: '500px',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll'
    },
    scoreTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom: '10px',
        paddingTop: '10px',
        borderBottom: '1px solid ' + colors.GRAY,
        boxShadow: '0 0 10px 3px rgba(211, 211, 211, 0.3) inset',
    }
}