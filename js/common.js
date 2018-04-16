var base = 75;
var curWidth = document.body.clientWidth;
//console.log(curWidth);
var curFontsize = curWidth / 750 * base;
//console.log(curFontsize);
document.querySelector('html').style.fontSize = curFontsize + 'px';
document.querySelector('body').style.fontSize = '24px';
