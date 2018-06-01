show_box = false;

$(document).ready(function(){
    $('#opening').audioPlayer();

    $(".menu-item-wrapper").click(function(){
        var target = $(this).attr("data-href");
        $("#wrapper").animate({scrollTop:$("#" + target + "").offset().top}, 
        {
            duration: 2500,
            easing: "easeInBounce"
        })

    })
    //baron('#wrapper');

    
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

    $("#wrapper").scroll(function(){
        console.log("scrolling");
        if($(".audioplayer").position().top < 0 && !show_box){            
            show_box = true;
            $("#hidden_box").animate({
                opacity: ".8"
            }, 900);
            console.log("show");  

        }
        else if($(".audioplayer").position().top > 0 && show_box){
            show_box = false;
            $("#hidden_box").animate({
                opacity: "0"
            }, 900);
            console.log("hide"); 

        }
    })
    
})