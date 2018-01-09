//@codekit-prepend "hoverIntent.js";
//@codekit-prepend "superfish.js";
//@codekit-prepend "KCT-mobilenav.js";
//@codekit-prepend "slick.js";
//@codekit-prepend "jquery.fancybox.js";
//@codekit-prepend "jquery.fancybox-media.js";
//@codekit-prepend "headroom.js";



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

// grab an element
var headroomElement = document.querySelector(".sf-wrap");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(headroomElement, {
  "offset": 0,
  "tolerance": 30,
});
// initialise
headroom.init();

// grab an element
var headroomElement2 = document.querySelector(".mobile-masthead");
// construct an instance of Headroom, passing the element
var headroom2  = new Headroom(headroomElement2, {
  "offset": 0,
  "tolerance": 30,
});
// initialise
headroom2.init();



// fire something at the end of a resize event
function resizedw(){
    // Haven't resized in 250ms!
}

var doit;
window.onresize = function(){
  clearTimeout(doit);
  doit = setTimeout(resizedw, 250);
};
