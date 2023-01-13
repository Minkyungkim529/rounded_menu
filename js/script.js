$(function(){
    $(".heart").click(function(){
        $(this).addClass('heart_hide').siblings().removeClass('heart_hide');
    });
});
//하트 찜하기 버튼

$(function(){
    $(".off").click(function(){
        $(this).removeClass('off').addClass("on").siblings('.on').removeClass('on').addClass('off');
    });
});
$(function(){
    $(".on").click(function(){
        $(this).removeClass('on').addClass("off").siblings('.off').removeClass('off').addClass('on');
    });
});
//hot, iced버튼 토글