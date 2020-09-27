'use strict'

let sdl2 = {
	require(name) {
		return require('./src/' + name)
    },
    get font() {
		return require('sdl2-ttf').class('ttf')
	},
	get image() {
		return require('sdl2-image').class('image')
	}
}

module.exports = sdl2