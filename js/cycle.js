$('.in-button>div').touchstart(function () {
   $(this).siblings('.in-button>div').removeClass('divs-active');  // 删除其他兄弟元素的样式
    $(this).addClass('divs-active');
 });
