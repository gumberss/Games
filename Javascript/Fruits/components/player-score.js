export default (props) => {

    const { player } = props

    const changesScoreStyle = styles[player.position] || {}

    const scoreStyle = {...styles.defaultPlayerStyle, ...changesScoreStyle}

    return (<div style = {scoreStyle}>
        <p>
            Jogador: {player.name}
            <br />
            Pontuação: {player.score}
        </p>
    </div>)
}

const styles = {
    defaultPlayerStyle: {
        paddingLeft: '10px',
        borderRadius: '3px',
        boxShadow: '0 0 10px 3px rgba(211, 211, 211, 0.3) inset',
    },
    first: {
        backgroundColor: 'rgba(255, 255, 0, 0.4)',
        boxShadow: '0 0 10px 3px rgba(255, 255, 0, 0.3) inset',
    },
    second: {
        backgroundColor: 'rgba(211, 211, 211, 0.4)',
        boxShadow: '0 0 10px 3px rgba(211, 211, 211, 1) inset',
    },
    third: {
        backgroundColor: 'rgba(205, 127, 50, 0.4)',
        boxShadow: '0 0 10px 3px rgba(205, 127, 50, 0.3) inset',
    }
}
