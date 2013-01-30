// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {( function() {
			var noop = function() {
			};
			var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
			var length = methods.length;
			var console = window.console = {};
			while (length--) {
				console[methods[length]] = noop;
			}
		}());
}
// Improve css with jQuery

// Superfish for submenu
//jQuery('.sf-menu').superfish();
// HorizontalNav Dynamic menu
//jQuery('.full-width').horizontalNav();

jQuery("img.lazy").show().lazyload({ effect : "fadeIn" });