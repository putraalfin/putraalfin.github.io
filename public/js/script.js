const nav = document.querySelectorAll('.nav-link');
nav.forEach(n => {
    n.addEventListener('mouseenter',function() {
        n.style.backgroundColor = "#eaeaea";
        n.style.color = "gray";
        n.style.borderRadius = "5px";
    });
    n.addEventListener('mouseleave',function() {
        n.style.backgroundColor = "inherit";
        n.style.color = "#fff";
    })
});

$('.navbar-brand').on('mouseenter',() => {
    $('.navbar-brand').css({"color":"#fff"});
});


$('.page-scroll').on('click',function(e) {
    var href = $(this).attr('href');
    console.log(href)
    if(href === "#Home") {
        $(window).scrollTop(0);
    }else if(href === "#BaseURL") {
        $(window).scrollTop(440);
    }else if(href === "#QueryTable") {
        $(window).scrollTop(640);
    }else if(href === "#Example") {
        $(window).scrollTop(1110);
    }else if(href === "#Footer") {
        $(window).scrollTop(1500);
    }
    e.preventDefault();    
});

$('#to-top').on('click',function() {
    $(window).scrollTop(0);
})