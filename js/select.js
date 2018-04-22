// var texiao=document.querySelectorAll(".texiao");
// for(var i=0;i<texiao.length;i++){
//     console.log(texiao[i].classList);
//     if(!(texiao[i].classList==="texiaos")){
//         texiao[i].onclick=function (ev) {
//             console.log(ev);
//             var spans = document.querySelectorAll('.texiao');
//             for (var j = 0; j < spans.length; j++) {
//                 spans[j].classList.remove('texiaos');
//             }
//             ev.path[0].classList.add('texiaos');
//         }
//     }
//
// }
$('.texiao').click(function () {
    $(this).siblings('.texiao').removeClass('texiaos');  // 删除其他兄弟元素的样式
    $(this).addClass('texiaos');
});