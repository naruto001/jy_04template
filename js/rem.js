// (function(){
// 	var html = document.documentElement;
// 	var wHtml = html.getBoundingClientRect().width;
// 	html.style.fontSize = wHtml/15 + "px";
// })()
document.addEventListener('DOMContentLoaded',function(){
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    function resize() {
        var html = document.documentElement;
        if(html.clientWidth > 320){
            if(html.clientWidth < 640){
              html.style.fontSize = ~~(html.clientWidth / 20) + 'px'
            }else{
                html.style.fontSize = '32px'
            }
        }else{
            html.style.fontSize = '16px'
        }
    };
    resize()
    window.addEventListener(resizeEvt, resize, false)
})