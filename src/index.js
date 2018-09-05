'use strict';


import './scss/main.scss';
require('./scripts/lib/prefixfree.min');
require('./scripts/jquery.scrollpath');
import {config} from './scripts/config';

$(document).ready(init);

function init() {
	let wrapper = $('.wrapper');
	let menu = $('ul.menu');
	for (let i=0; i<config.slides.length; i++) {
		let element = config.slides[i];
		let htmlItem = `
				<a href="${element.url || ''}" class="slides ${element.name}" style="top: ${element.position.top}px; left: ${element.position.left}px" target="_blank">
					${element.content}
				</a>`;
		let htmlMenu = `<li><a href="#${element.name}">${i+1}</a></li>`;
		wrapper.append(htmlItem);
		menu.append(htmlMenu);
	}


	if(wrapper.length) {
		$.fn.scrollPath("getPath")
		// Move to 'start' element
			.moveTo(400, 50, {name: "preseentation"})
			// Line to 'description' element
			.lineTo(400, 800, {name: "slide-1"})
			// Arc down and line to 'syntax'
			.arc(200, 1200, 400, -Math.PI/2, Math.PI/2, true)
			.lineTo(600, 1600, {
				callback: function() {
					$('.presenter-face').removeClass('victor');
					$('.presenter-face').addClass('agus');
				},
				name: "slide-2"
			})
			// Continue line to 'scrollbar'
			.lineTo(1750, 1600, {
				callback: function() {
					$('.presenter-face').removeClass('agus');
					$('.presenter-face').addClass('butti');
				},
				name: "slide-3"
			})
			// Arc up while rotating
			.arc(1800, 1000, 600, Math.PI/2, 0, true, {rotate: Math.PI/2 })
			// Line to 'rotations'
			.lineTo(2400, 750, {
				name: "slide-4",
				callback: function() {
					$('.presenter-face').removeClass('agus');
					$('.presenter-face').addClass('butti');
				},
			})
			// Rotate in place
			.rotate(3*Math.PI/2, {
				name: "slide-4-rotated",
				callback: function() {
					$('.presenter-face').removeClass('butti');
					$('.presenter-face').addClass('cappi');
				},
			})
			// Continue upwards to 'source'
			.lineTo(2400, -700, {
				name: "slide-5",
				callback: function() {
					$('.presenter-face').removeClass('cappi');
					$('.presenter-face').addClass('julia');
				}
			})
			// Small arc downwards
			.arc(2250, -700, 150, 0, -Math.PI/2, true)

			//Line to 'follow'
			.lineTo(1350, -850, {
				name: "slide-6",
				callback: function() {
					$('.presenter-face').removeClass('julia');
					$('.presenter-face').addClass('victor');
				}
			})
			// Arc and rotate back to the beginning.
			.arc(1300, 50, 900, -Math.PI/2, -Math.PI, true, {rotate: Math.PI*2, name: "slide-7"});

		// We're done with the path, let's initate the plugin on our wrapper element
		$(".wrapper").scrollPath({drawPath: true, wrapAround: true});

		// Add scrollTo on click on the navigation anchors
		$("nav").find("a").each(function() {
			let target = $(this).attr("href").replace("#", "");
			$(this).click(function(e) {
				e.preventDefault();

				// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
				// for extra easing functions like the one below
				$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
			});
		});
		$(".upside-down").on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			window.open('./templates/thanks.html');
		})
	}


	/* ===================================================================== */

	$(".settings .show-path").click(function(e) {
		e.preventDefault();
		$(".sp-canvas").toggle();
	}).toggle(function() {
		$(this).text("Hide Path");
	}, function() {
		$(this).text("Show Path");
	});

	$('.expectativa').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).removeClass('show');
		$('.realidad').addClass('show');
	});
	$('.realidad').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).removeClass('show');
		$('.expectativa').addClass('show');
	});
}


