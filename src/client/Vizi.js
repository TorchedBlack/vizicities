/* globals window, _ */
(function() {
	"use strict";

	var VIZI = {
		VERSION: 1.0,
		DEBUG: false
	};

	// Output ASCII logo
	console.log("═════════════════════════════════════════════════════════════\r\n\r\n██╗   ██╗██╗███████╗██╗ ██████╗██╗████████╗██╗███████╗███████╗\r\n██║   ██║██║╚══███╔╝██║██╔════╝██║╚══██╔══╝██║██╔════╝██╔════╝\r\n██║   ██║██║  ███╔╝ ██║██║     ██║   ██║   ██║█████╗  ███████╗\r\n╚██╗ ██╔╝██║ ███╔╝  ██║██║     ██║   ██║   ██║██╔══╝  ╚════██║\r\n ╚████╔╝ ██║███████╗██║╚██████╗██║   ██║   ██║███████╗███████║\r\n  ╚═══╝  ╚═╝╚══════╝╚═╝ ╚═════╝╚═╝   ╚═╝   ╚═╝╚══════╝╚══════╝\r\n\r\n═══════════════════════════ 0.1.0 ═══════════════════════════");

	// List any constants or helper functions here, like:
	// https://github.com/mrdoob/three.js/blob/master/src/Three.js

	// Expose VIZI to the window
	window.VIZI = VIZI;
}());