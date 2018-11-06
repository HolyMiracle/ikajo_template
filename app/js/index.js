(function($, window, document) {

    $(function() {
   
      smoothScroll();
   
    });
   
    function smoothScroll() {
        $('a').on({
            click:function (e) {
               e.preventDefault();
               var root = $("html, body");
               var target = $(this).attr("href");
               root.animate({  
                   scrollLeft: $(target).offset().left,
                   scrollTop: $(target).offset().top
               }, 500);
            }
        });
    }
   
   }(window.jQuery, window, document));