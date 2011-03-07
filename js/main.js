var foo = true;
$(document).ready(function() {
	$('#screen').bind('mouseenter', function() {
		if(foo) {
			var wordz = 'contact me on twitter'.split('');
			var ctr=0;
			var cursor = $('#screen .cursor');
			cursor.html('').css('background-color', 'transparent').css('-webkit-animation-name', 'none').removeClass('cursor');
			var id = setTimeout(function() {
				var inner = cursor.html();
				cursor.html(inner+wordz[ctr]);
				var id2 = setTimeout(arguments.callee, 100);
				ctr++;
				if(ctr>wordz.length) {
					cursor.html('<a href="http://www.twitter.com/marco1313">' + inner + '</a><span class="cursor">..</span>');
					cursor.css('-webkit-animation-name', 'pulse');
					clearTimeout(id2);
				}
			}, 100);
		}
		foo=false;
	});
});

