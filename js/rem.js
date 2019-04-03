// (function(){
// 	var html = document.documentElement;
// 	var wHtml = html.getBoundingClientRect().width;
// 	html.style.fontSize = wHtml/15 + "px";
// })()
document.addEventListener('DOMContentLoaded',function(){
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    function resize() {
        var html = document.documentElement;
        if(html.clientWidth > 375){
            if(html.clientWidth < 750){
              html.style.fontSize = (html.clientWidth / 15) + 'px';
            }else{
                html.style.fontSize = '50px';
            }
        }else{
            html.style.fontSize = '25px';
        }
    };
    resize();
    window.addEventListener(resizeEvt, resize, false);
})