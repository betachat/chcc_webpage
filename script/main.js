$(document).ready(function(){
    $('#opening').audioPlayer();

    $(".menu-item-wrapper").click(function(){
        var target = $(this).attr("data-href");

    })


    baron({
        root: 'body',
        scroller: '#wrapper',
        bar: '.main__bar',
        scrollingCls: '_scrolling',
        draggingCls: '_dragging',
        direction: 'h'
    })

    baron({
        root: 'body',
        scroller: '#wrapper',
        bar: '.baron__bar',
        scrollingCls: '_scrolling',
        draggingCls: '_dragging'
    })
})