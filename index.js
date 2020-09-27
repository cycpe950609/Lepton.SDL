
'use strict'

let sdl2 = {
	require(name) {
		return require('./src/' + name)
    },
     get SDL() {
         return require('./src/SDL')
     },
     get SDL_assert() {
         return require('./src/SDL_assert')
     },
     get SDL_atomic() {
         return require('./src/SDL_atomic')
     },
     get SDL_audio() {
         return require('./src/SDL_audio')
     },
     get SDL_bits() {
         return require('./src/SDL_bits')
     },
     get SDL_blendmode() {
         return require('./src/SDL_blendmode')
     },
     get SDL_clipboard() {
         return require('./src/SDL_clipboard')
     },
     get SDL_config() {
         return require('./src/SDL_config')
     },
     get SDL_config_macosx() {
         return require('./src/SDL_config_macosx')
     },
     get SDL_copying() {
         return require('./src/SDL_copying')
     },
     get SDL_cpuinfo() {
         return require('./src/SDL_cpuinfo')
     },
     get SDL_egl() {
         return require('./src/SDL_egl')
     },
     get SDL_endian() {
         return require('./src/SDL_endian')
     },
     get SDL_error() {
         return require('./src/SDL_error')
     },
     get SDL_events() {
         return require('./src/SDL_events')
     },
     get SDL_filesystem() {
         return require('./src/SDL_filesystem')
     },
     get SDL_gamecontroller() {
         return require('./src/SDL_gamecontroller')
     },
     get SDL_gesture() {
         return require('./src/SDL_gesture')
     },
     get SDL_haptic() {
         return require('./src/SDL_haptic')
     },
     get SDL_hints() {
         return require('./src/SDL_hints')
     },
     get SDL_joystick() {
         return require('./src/SDL_joystick')
     },
     get SDL_keyboard() {
         return require('./src/SDL_keyboard')
     },
     get SDL_keycode() {
         return require('./src/SDL_keycode')
     },
     get SDL_loadso() {
         return require('./src/SDL_loadso')
     },
     get SDL_log() {
         return require('./src/SDL_log')
     },
     get SDL_main() {
         return require('./src/SDL_main')
     },
     get SDL_messagebox() {
         return require('./src/SDL_messagebox')
     },
     get SDL_mouse() {
         return require('./src/SDL_mouse')
     },
     get SDL_mutex() {
         return require('./src/SDL_mutex')
     },
     get SDL_name() {
         return require('./src/SDL_name')
     },
     get SDL_opengl() {
         return require('./src/SDL_opengl')
     },
     get SDL_opengl_glext() {
         return require('./src/SDL_opengl_glext')
     },
     get SDL_opengles() {
         return require('./src/SDL_opengles')
     },
     get SDL_opengles2() {
         return require('./src/SDL_opengles2')
     },
     get SDL_opengles2_gl2() {
         return require('./src/SDL_opengles2_gl2')
     },
     get SDL_opengles2_gl2ext() {
         return require('./src/SDL_opengles2_gl2ext')
     },
     get SDL_opengles2_gl2platform() {
         return require('./src/SDL_opengles2_gl2platform')
     },
     get SDL_opengles2_khrplatform() {
         return require('./src/SDL_opengles2_khrplatform')
     },
     get SDL_pixels() {
         return require('./src/SDL_pixels')
     },
     get SDL_platform() {
         return require('./src/SDL_platform')
     },
     get SDL_power() {
         return require('./src/SDL_power')
     },
     get SDL_quit() {
         return require('./src/SDL_quit')
     },
     get SDL_rect() {
         return require('./src/SDL_rect')
     },
     get SDL_render() {
         return require('./src/SDL_render')
     },
     get SDL_revision() {
         return require('./src/SDL_revision')
     },
     get SDL_rwops() {
         return require('./src/SDL_rwops')
     },
     get SDL_scancode() {
         return require('./src/SDL_scancode')
     },
     get SDL_shape() {
         return require('./src/SDL_shape')
     },
     get SDL_stdinc() {
         return require('./src/SDL_stdinc')
     },
     get SDL_surface() {
         return require('./src/SDL_surface')
     },
     get SDL_system() {
         return require('./src/SDL_system')
     },
     get SDL_syswm() {
         return require('./src/SDL_syswm')
     },
     get SDL_test() {
         return require('./src/SDL_test')
     },
     get SDL_test_assert() {
         return require('./src/SDL_test_assert')
     },
     get SDL_test_common() {
         return require('./src/SDL_test_common')
     },
     get SDL_test_compare() {
         return require('./src/SDL_test_compare')
     },
     get SDL_test_crc32() {
         return require('./src/SDL_test_crc32')
     },
     get SDL_test_font() {
         return require('./src/SDL_test_font')
     },
     get SDL_test_fuzzer() {
         return require('./src/SDL_test_fuzzer')
     },
     get SDL_test_harness() {
         return require('./src/SDL_test_harness')
     },
     get SDL_test_images() {
         return require('./src/SDL_test_images')
     },
     get SDL_test_log() {
         return require('./src/SDL_test_log')
     },
     get SDL_test_md5() {
         return require('./src/SDL_test_md5')
     },
     get SDL_test_random() {
         return require('./src/SDL_test_random')
     },
     get SDL_thread() {
         return require('./src/SDL_thread')
     },
     get SDL_timer() {
         return require('./src/SDL_timer')
     },
     get SDL_touch() {
         return require('./src/SDL_touch')
     },
     get SDL_types() {
         return require('./src/SDL_types')
     },
     get SDL_version() {
         return require('./src/SDL_version')
     },
     get SDL_video() {
         return require('./src/SDL_video')
     },
     get begin_code() {
         return require('./src/begin_code')
     },
     get close_code() {
         return require('./src/close_code')
     },
     get undefined() {
         return require('./src/undefined')
     },

get font() {
    return require('sdl2-ttf').class('ttf')
},
get image() {
    return require('sdl2-image').class('image')
}
}

module.exports = sdl2