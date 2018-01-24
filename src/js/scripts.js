$("document").ready(function () {
    $(".fancybox, [href*='youtube.com'], [href*='youtu.be']").fancybox({
      helpers : {
        media: true
      },
      width       : 800,
      height      : 450,
      aspectRatio: true,
      padding:0,
      scrolling   : 'no'
    });

    $("[data-fancybox]").fancybox({
      btnTpl : {
       // Arrows
       arrowLeft : '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
                       '<svg viewBox="0 0 45 84" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">' +
                         '<path d="M42.235 82.453L2.165 42.384l40.07-40.07" stroke-width="3" fill="transparent" stroke-linecap="round"/>' +
                       '</svg>' +
                     '</button>',

       arrowRight : '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
                     '<svg viewBox="0 0 45 84" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">' +
                       '<path d="M2.375 2.314l40.069 40.07-40.07 40.07" stroke-width="3" fill="transparent" stroke-linecap="round"/>' +
                     '</svg>' +
                   '</button>'
   },
     });

    $(".nojs").remove();
    $('#contact').attr({'action': "/siteapi/submit_form"});
});

// fire something at the end of a resize event
function resizedw(){
    // Haven't resized in 250ms!
}

var doit;
window.onresize = function(){
  clearTimeout(doit);
  doit = setTimeout(resizedw, 250);
};

// for admin meta tools
$('.toggle-title').on('click', function(){
  $(this).next('.toggle-this').toggleClass('open');
  $(this).toggleClass('open');
});
