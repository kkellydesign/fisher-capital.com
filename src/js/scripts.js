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
