import React from 'react'
import GamePage from '../components/game-page'

class Index extends React.Component {
    render() {
        return (<GamePage/>)
    }
}

const styles = {
    canvas: {
        height: '500px',
        width: '500px',
        'border': '1px solid #CCC',
        'image-rendering': 'pixelated',
        //'image-rendering': 'crisp-edges',
        //'image-rendering': '-moz-crisp-edges'

    }
}

export default Index;