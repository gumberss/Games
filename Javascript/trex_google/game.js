var up = new KeyboardEvent('keydown', { keyCode: 38 })
var space = new KeyboardEvent('keydown', { keyCode: 32 })
var down = new KeyboardEvent('keydown', { keyCode: 40 })
var updown = new KeyboardEvent('keyup', { keyCode: 40 })


 var lastDown = false
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
	
	var oldObject = obstacles.find(x => x.xPos - trex.xPos < 0)

	if (nextObs) {
		if (nextObs.typeConfig.type === 'PTERODACTYL') {
			if (nextObs.yPos === 100) {
				lastDown = false
				document.dispatchEvent(updown)
				document.dispatchEvent(up)
				console.log('up', nextObs, trex)
			} else {
				lastDown = true
				document.dispatchEvent(down)
				console.log('down', nextObs, trex)
			}
		} else {
			lastDown =false
			document.dispatchEvent(updown)
			document.dispatchEvent(up)
			console.log('up', nextObs, trex)
		}
	}else{
		if(!oldObject && !lastDown ){
			
		lastDown = true
    document.dispatchEvent(down)
  }
}
}

setInterval(method, 15)
