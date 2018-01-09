// off-canvas open and close
$(".open-panel").on('click', function(){
    $("html").toggleClass("openNav");
    $(this).toggleClass('is-active');
});

$(".off-canvas-content-wrap").on('click', function(){
    if ($('.openNav').length > 0 ) {
      $("html").toggleClass("openNav");
      $('.open-panel').toggleClass('is-active');
    }
});


// display/hide mobile submenus
function mobile_nav_ui(){
    $(".mobile-nav > ul li:has(ul) > a[href*='#']").unbind("click");
    $(".mobile-nav > ul li:has(ul) > a[href!='#']").unbind("click");
    $(".mobile-nav > ul li:has(ul)").addClass("has-child");

    $(".mobile-nav > ul li:has(ul) > a").on('click', function(e) {
            e.preventDefault();

            // once it's clicked, append the link if the URL isn't a hash
            if ( !$(this).hasClass('clicked-once') && $(this).is('a:not([href^="#"])') ) {
                var linkhref = $(this).attr('href');
                $(this).next('ul').prepend("<li class='prepended'><a href='" + linkhref + "'>" + $(this).clone().text() + "</a></li>");
            }
            // add clicked-once class if it doesn't have it
            if ( !$(this).hasClass('clicked-once')){
                $(this).addClass('clicked-once');
            }

            //regardless of where we are and what happens, toggle the submenu
            $(this).toggleClass('open-subs');
            $(this).next('ul').slideToggle();
            $(this).parent('li').toggleClass('down');

    });
    //$("ul.mobile-nav li:has(ul) > a:not([href^='#'])")

}


    //Add copy of navigation to mobile sidebar
    $(".mobile-nav").append( $("#menu-main-nav").clone());

    //fire or destroy superfish
    function build_superfish(){
        var size = $(window).width();

        if( size < 767 ){
            $(".sf-menu > ul").superfish('destroy');
        } else {
            $(".sf-menu > ul").superfish({
                delay       : 400,
                animation   : {opacity:"show",height:"show"},
                speed       : "fast",
                cssArrows   : false
            });
        }
    }


//fire both nav functions on load
$(function(){
    build_superfish();
    mobile_nav_ui();
});

// fire superfish at the end of a resize event
function resizedw(){
    // Haven't resized in 250ms!
    build_superfish();
}

var doit;
window.onresize = function(){
  clearTimeout(doit);
  doit = setTimeout(resizedw, 250);
};
