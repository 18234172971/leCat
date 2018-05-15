$('.acc-icon>li').click(function () {
    $(this).siblings('.acc-icon>li').removeClass('img-active');  // 删除其他兄弟元素的样式
    $(this).addClass('img-active');
});
