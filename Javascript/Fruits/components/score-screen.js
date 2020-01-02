import React from 'react'
import { connect } from 'react-redux'

import colors from '../default/colors'
import text from '../default/text'

import PlayerScore from './player-score'

class ScoreScreen extends React.Component {

    render() {

        const { scoreIds } = this.props
        return (<div style={styles.scoreContainer}>
            <label style={styles.scoreTitle}> {text.SCORE} </label>

            {scoreIds.map((id, index) => <PlayerScore key={id} playerId={id} position={index} />)}

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

const mapStateToProps = ({ score }) => ({
    scoreIds: Object.keys(score)
        .sort((left, right) => score[right].fruits - score[left].fruits),
})

const mapDispatchToProps = dispatch => ({
    gameAction: store => dispatch(store),
})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreScreen)