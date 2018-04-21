var divs=document.querySelectorAll(".in-button>button");
var button=document.querySelectorAll('.in-button')[0];
console.log(button);
for(var i=0;i<divs.length;i++){
    button.onclick=function (ev) {
        if(!ev.path[0].classList.contains('divs-active'))
        {
            var active=document.querySelectorAll(".in-button");
            for(var j=0;j<active[0].children.length;j++){
                active[0].children[j].classList.remove('divs-active');
            }
            ev.path[0].classList.add('divs-active');
        }
    }
}