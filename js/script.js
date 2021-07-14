function f_search_box() {
    var t = $('.search_btn');
    if(t.hasClass('on')) {
        t.removeClass('on');
        $('.search_box').hide();
    } else {
        t.addClass('on');
        $('.search_box').show();
    }
}