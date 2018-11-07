//Smooth scroll script

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
        $('.main__toggle').on({
            click:function (e) {
               e.preventDefault();
               var root = $("html, body");
               var target = $('#services');
               root.animate({  
                   scrollLeft: $(target).offset().left,
                   scrollTop: $(target).offset().top
               }, 500);
            }
        });
    }
   
}(window.jQuery, window, document));

//Header show-hide script

$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        $('header').addClass('active')
    } else {
        $('header').removeClass('active')
    }
});

//Form validate script

formSender();

function formSender() {
    var form = document.querySelector('#form');
    var forms = document.querySelector('.js-form-sender');

    form.setAttribute('novalidate', '');

    Array.prototype.forEach.call(forms, function (form) {
        form.addEventListener('submit', function (e) {
          validate(this);
          e.preventDefault();
        });
    });

    form.on('submit'), function validate() {
        var isValid = true;
        var isEmpty;
        var requiredFields = document.querySelectorAll('.js-required');
        var inputs = document.getElementsByTagName('input');
        var onSuccess = document.querySelector('.success-message');
        
        Array.prototype.forEach.call(requiredFields, function (field) {
            isEmpty = !field.value.trim();
            isValid = isValid && !isEmpty;

            if (isEmpty) {
                inputs.classList.add('error');
            }
        });

        Array.prototype.forEach.call(elements, function(inputs) {
            var pattern = inputs.getAttribute('pattern');

            if (pattern) {
                var reg = new RegExp(pattern);

                if (reg.test(inputs.value)) {
                    return;
                } else {
                    isValid = isValid && false;
                    inputs.classList.add('error');
                }
            }
        })


        if (isValid) {
            form.style.display = "none";
            onSuccess.style.display = "block";
        }
    }

}