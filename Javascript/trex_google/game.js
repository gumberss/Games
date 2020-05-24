var up = new KeyboardEvent('keydown', { keyCode: 38 })
var space = new KeyboardEvent('keydown', { keyCode: 32 })
var down = new KeyboardEvent('keydown', { keyCode: 40 })
var updown = new KeyboardEvent('keyup', { keyCode: 40 })

var method = function () {
	var gameSpeed = this.window.Runner.instance_.currentSpeed

	var trex = {
		height: this.window.Runner.instance_.tRex.config.HEIGHT,
		xPos: this.window.Runner.instance_.tRex.xPos,
	}

	var obstacles = this.window.Runner.instance_.horizon.obstacles

	var nextObs = obstacles.find(
		x => x.xPos - trex.xPos > 0 && x.xPos - trex.xPos < 20 * gameSpeed
	)

	if (nextObs) {
		if (nextObs.typeConfig.type === 'PTERODACTYL') {
			if (nextObs.yPos === 100) {
				document.dispatchEvent(updown)
				document.dispatchEvent(up)
				console.log('up', nextObs, trex)
			} else {
				document.dispatchEvent(down)
				console.log('down', nextObs, trex)
			}
		} else {
			document.dispatchEvent(updown)
			document.dispatchEvent(up)
			console.log('up', nextObs, trex)
		}
	}else{
    document.dispatchEvent(down)
  }
}

setInterval(method, 15)
