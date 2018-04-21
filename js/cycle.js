var divs=document.querySelectorAll(".in-button>button");
var button=document.querySelectorAll('.in-button')[0];
console.log(button);
for(var i=0;i<divs.length;i++){
    button.onclick=function (ev) {
        var target=ev.target;
        if(!target.classList.contains('divs-active'))
        {
            var active=document.querySelectorAll(".in-button");
            for(var j=0;j<active[0].children.length;j++){
                active[0].children[j].classList.remove('divs-active');
            }
            target.classList.add('divs-active');
        }
    }
}