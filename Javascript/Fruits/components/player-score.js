import React from 'react'
import { connect } from 'react-redux'

class PlayerScore extends React.Component {

    render() {

        const { score, position } = this.props
        
        const changesScoreStyle = styles[position] || {}

        const scoreStyle = { ...styles.defaultPlayerStyle, ...changesScoreStyle }

        return (<div style={scoreStyle}>
            <p>
                Jogador: {score.id}
                <br />
                Pontuação: {score.fruits}
            </p>
        </div>)
    }

}

const styles = {
    defaultPlayerStyle: {
        paddingLeft: '10px',
        borderRadius: '3px',
        boxShadow: '0 0 10px 3px rgba(211, 211, 211, 0.3) inset',
    },
    0: {
        backgroundColor: 'rgba(255, 255, 0, 0.4)',
        boxShadow: '0 0 10px 3px rgba(255, 255, 0, 0.3) inset',
    },
    1: {
        backgroundColor: 'rgba(211, 211, 211, 0.4)',
        boxShadow: '0 0 10px 3px rgba(211, 211, 211, 1) inset',
    },
    2: {
        backgroundColor: 'rgba(205, 127, 50, 0.4)',
        boxShadow: '0 0 10px 3px rgba(205, 127, 50, 0.3) inset',
    }
}

const mapStateToProps = ({ score }, { playerId }) => ({
    score: score[playerId]
})

export default connect(mapStateToProps)(PlayerScore)