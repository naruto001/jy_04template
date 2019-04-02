(function(){
	var html = document.documentElement;
	var wHtml = html.getBoundingClientRect().width;
	html.style.fontSize = wHtml/15 + "px";
})()