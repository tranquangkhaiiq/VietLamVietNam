// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by $AppName$ $AppVersion$
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
(function(){var a;window.ws_caption_fade=function(c,b,f,d){var e=c.noDelay?0:(c.duration/2-c.captionDuration/3)/2;if(e<0){e=0}b.stop(1,1).delay(e).fadeOut(c.captionDuration/3);if(d){if(a){clearTimeout(a)}a=setTimeout(function(){b.stop(1,1).html(d);b.fadeIn(c.captionDuration,function(){if(this.filters){this.style.removeAttribute("filter")}})},c.noDelay?0:(c.duration/2+e))}}}());