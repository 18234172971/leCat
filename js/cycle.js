var divs=document.querySelectorAll(".in-button>input");
for(var i=0;i<divs.length;i++){
    divs[i].touchend=function (ev) {
        alert(1);
        console.log(ev.path[0].classList.contains('divs-active'));
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