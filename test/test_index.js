'use strict'
const NS = require('../index');

let sdl2 = {
	require(name) {
		return NS.require(name);
	},
	class(name) {
		return require('./' + name)
	},
	get app() {
		return new (require('./app'))
	},
	get window() {
		return require('./window')
	},
	get clipboard() {
		return require('./clipboard')
	},
	get power() {
		return require('./power')
	},
	get mouse() {
		return require('./mouse')
	},
	get keyboard() {
		return require('./keyboard')
	},
	get font() {
		return NS.font;
	},
	get image() {
		return NS.image;
	},
}

module.exports = sdl2