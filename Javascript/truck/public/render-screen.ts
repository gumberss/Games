import { Truck } from './models/truck'
import { Obstacle } from './models/obstacle'
import { Game } from './models/Game'
import { ObjPosition } from './models/position'

export default function renderScreen(
	context: CanvasRenderingContext2D,
	canvas: HTMLCanvasElement
) {
	context.fillStyle = 'white'
	context.clearRect(0, 0, 1000, 1000) //fix it later

	const game = { truck, obstacles }
	renderTruck(context, canvas, game)
	renderObstacles(context, canvas, game)

	context.fillStyle = '#964b00'
	context.fillRect(0, canvas.height - 1, canvas.width, 1)
}

const truck: Truck = {
	bodyWork: {
		position: {
			height: 3,
			width: 5,
			x: 1,
			y: 55,
		},
	},
	cabin: {
		position: {
			height: 2,
			width: 2,
			x: 6,
			y: 56,
		},
	},
	wheels: [
		{
			position: {
				height: 1,
				width: 1,
				x: 2,
				y: 58,
			},
		},
		{
			position: {
				height: 1,
				width: 1,
				x: 5,
				y: 58,
			},
		},
	],
}

const obstacles: Obstacle[] = [
	{
		position: {
			height: 3,
			width: 1,
			x: 100,
			y: 56,
		},
	},
]

function renderTruck(
	context: CanvasRenderingContext2D,
	canvas: HTMLCanvasElement,
	game: Game
) {
	const truck = game.truck

	const { bodyWork, cabin, wheels } = truck

	const floorSize = 1

	fill(context, bodyWork.position, '#f44236')
	fill(context, cabin.position, '#009687')
	wheels.forEach(wheel => fill(context, wheel.position, '#000000'))

	
}

function fill(
	context: CanvasRenderingContext2D,
	position: ObjPosition,
	color: string
) {
	context.fillStyle = color

	context.fillRect(position.x, position.y, position.width, position.height)
}

function renderObstacles(
	context: CanvasRenderingContext2D,
	canvas: HTMLCanvasElement,
	game: Game
) {
	obstacles.forEach(obs => {
		fill(context, obs.position, '#66F666')
	})
}
