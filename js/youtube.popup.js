$.fn.YouTubePopup.defaults = {
	'youtubeId': '',
	'title': '',
	'useYouTubeTitle': true,
	'idAttribute': 'rel',
	'cssClass': '',
	'draggable': false,
	'modal': true,
	'width': 640,
	'height': 480,
	'hideTitleBar': false,
	'clickOutsideClose': false,
	'overlayOpacity': 0.5,
	'autohide': 2,
	'autoplay': 1,
	'color': 'red',
	'color1': 'FFFFFF',
	'color2': 'FFFFFF',
	'controls': 1,
	'fullscreen': 1,
	'loop': 0,
	'hd': 1,
	'showinfo': 0,
	'theme': 'light',
	'showBorder': true
};
$(function () {
	$.fn.YouTubePopup.defaults.fullscreen = 0;
	$.fn.YouTubePopup.defaults.color1 = 'CCCCCC';
});
$("img.youtube").YouTubePopup({ idAttribute: '4eYSpIz2FjU' });