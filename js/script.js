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


$(document).ready(function() {
    gallery_img_height();
});
$( window ).resize(function() {
    gallery_img_height();
});


function gallery_img_height() {
    var w = $('.jk-gallery-img').width();
    $('.jk-gallery-img').height(w);
}