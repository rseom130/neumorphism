function f_search_box() {
    var mbtn = $('.menu_btn');
    var sbtn = $('.search_btn');
    if(sbtn.hasClass('on')) {
        sbtn.removeClass('on');
        $('.search_box').hide();
        $('#background_black').hide();
    } else {
        $('#background_black').show();
        sbtn.addClass('on');
        $('.search_box').show();
        mbtn.removeClass('on');
        $('.menu_box').hide();
    }
}

function f_menu_box() {
    var mbtn = $('.menu_btn');
    var sbtn = $('.search_btn');
    if(mbtn.hasClass('on')) {
        mbtn.removeClass('on');
        $('.menu_box').hide();
        $('#background_black').hide();
    } else {
        $('#background_black').show();
        mbtn.addClass('on');
        $('.menu_box').show();
        sbtn.removeClass('on');
        $('.search_box').hide();
    }
}

function f_close_box() {
    var mbtn = $('.menu_btn');
    var sbtn = $('.search_btn');
    sbtn.removeClass('on');
    $('.search_box').hide();
    mbtn.removeClass('on');
    $('.menu_box').hide();
    $('#background_black').hide();
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
