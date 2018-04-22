$('.acc-icon>li').click(function () {
    $(this).siblings('.acc-icon>li').removeClass('img-active');  // 删除其他兄弟元素的样式
    $(this).addClass('img-active');
});
// var imgs=document.querySelectorAll(".acc-icon>li>div");
// for(var i=0;i<imgs.length;i++){
//     imgs[i].onclick=function (ev) {
//         console.log(ev.path);
//         if(!ev.path[1].classList.contains('img-active')){
//             var active=document.querySelectorAll(".acc-icon>li>div");
//             for(var j=0;j<active.length;j++){
//                 console.log(active[j]);
//                 active[j].classList.remove('img-active');
//             }
//             console.log(ev.path);
//             ev.path[1].classList.add('img-active');
//         }
//     }
// }