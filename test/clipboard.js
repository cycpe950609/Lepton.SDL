'use strict'
const NS = require('../index');
const EventEmitter = require('events')

const SDL_clipboard = NS.require('SDL_clipboard')

class clipboard extends EventEmitter {
	constructor() {
		super()
	}
	get hasText() {
		return !!SDL_clipboard.SDL_HasClipboardText()
	}

	get text() {
		return SDL_clipboard.SDL_GetClipboardText()
	}
	set text(value) {
		SDL_clipboard.SDL_SetClipboardText(value.toString())
	}
}

module.exports = new clipboard