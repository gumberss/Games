import React from 'react'
import colors from '../default/colors'
import text from '../default/text'

export default class ScoreScreen extends React.Component {


    render() {
        return (<div style={styles.scoreContainer}>
            <label style={styles.scoreTitle}> {text.SCORE} </label>
            <div>
                <p>
                    Jogador:
                    <br/>
                    Pontuação:
                </p>
            </div>

        </div>)
    }
}



const styles = {
    scoreContainer: {
        border: '2px solid ' + colors.GRAY,
        width: '300px',
        display: 'flex',
        flexDirection: 'column'
    },
    scoreTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom: '10px',
        paddingTop: '10px',
        borderBottom: '1px solid ' + colors.GRAY
    }
}