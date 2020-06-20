import Head from 'next/head'
import { useEffect, useRef } from 'react'
import renderScreen from '../public/render-screen'

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>()

	useEffect(() => {

		const canvas = canvasRef.current!;
		
		const context = canvas.getContext("2d") 

    canvas.width = 80
    canvas.height = 40

    context!.fillStyle = 'white'
    //context.clearRect(0, 0, game.state.screen.width, game.state.screen.height)
    renderScreen(context, canvas)
  })

	//@ts-ignore
	return <canvas id="screen" ref={canvasRef} style={{
		height: '500px',
		width: '1000px',
		border: '1px solid #ccc',
		imageRendering: 'pixelated',
	}}></canvas>


}


