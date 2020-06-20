import { useEffect, useRef } from 'react'
import renderScreen from '../public/render-screen'

export default function Home() {
	const canvasRef = useRef<HTMLCanvasElement>()

	useEffect(() => {
		const canvas = canvasRef.current!

		const context = canvas.getContext('2d')!

		canvas.width = 120
		canvas.height = 60

		context!.fillStyle = 'white'
		//context.clearRect(0, 0, game.state.screen.width, game.state.screen.height)
		//renderScreen(context, canvas)
		tick(canvas, context, {}, requestAnimationFrame)
	})

	return (
		<canvas
			id="screen"
			//@ts-ignore
			ref={canvasRef}
			style={{
				height: '500px',
				width: '1000px',
				border: '1px solid #ccc',
				imageRendering: 'pixelated',
			}}
		></canvas>
	)
}

const tick = (
	canvas: HTMLCanvasElement,
	context: CanvasRenderingContext2D,
	game: any,
	requestAnimationFrame: any
) => {
	requestAnimationFrame(() => {
		renderScreen(context, canvas)

		tick(canvas, context, game, requestAnimationFrame)
	})
}
