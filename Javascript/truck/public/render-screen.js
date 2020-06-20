export default function renderScreen(context, canvas) {
	renderTruck(context, canvas, truck)
}

const truck = {
	bodyWork: {
		height: 3,
		width: 5,
	},
	cabin: {
		height: 2,
		width: 2,
	},
	wheels: [
		{
			x: 1,
			y: 0,
			size: 1,
		},
		{
			x: 5,
			y: 0,
			size: 1,
		},
	],
}

function renderTruck(context, canvas, truck) {
	const { bodyWork, cabin, wheels } = truck

  const biggerWheel = wheels.sort((x, y) => x - y)[0]

	const floorSize = 1
  const startTruckPositionX = 1
  const startWheelsPositionY = canvas.height - floorSize
  const startTruckPositionY = startWheelsPositionY - biggerWheel.size
  const startCabinPositionY = startTruckPositionY - cabin.height
  const startBodyWorkPositionY = startTruckPositionY - bodyWork.height

  context.fillStyle = '#f44236'

	context.fillRect(
		startTruckPositionX,
		startBodyWorkPositionY,
		bodyWork.width,
		bodyWork.height
	)

	context.fillStyle = '#009687'
	context.fillRect(6, startCabinPositionY, cabin.width, cabin.height)

	context.fillStyle = '#000000'

	wheels.forEach(wheel => {
		context.fillRect(
			startTruckPositionX + wheel.x,
			startWheelsPositionY - 1,
			1,
			wheel.size
		)
	})

	context.fillStyle = '#964b00'
	context.fillRect(0, canvas.height - 1, canvas.width, 1)
}
