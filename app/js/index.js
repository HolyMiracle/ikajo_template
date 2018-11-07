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

function resize() {
    if($(window).width() > 768) {
        $(window).bind('mousewheel', function(event) {
            if (event.originalEvent.wheelDelta >= 0) {
                $('header').addClass('active')
            } else {
                $('header').removeClass('active')
            }
        });
    } else {
        $(window).unbind('mousewheel');
    };
}

$(window).resize(function() {
    resize();
    });

//Modal window script

modalWindow();

function modalWindow() {
    var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".burger-icon");
    var links = document.querySelectorAll(".modal_link");
    var i;
    var arrayLinks = Array.prototype.slice.call(links);

    for (i = 0; i < arrayLinks.length; i++) {
        arrayLinks[i].addEventListener('click', toggleModal);
    }

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }
    
    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }
    
    trigger.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
}

//Form validate script

// formSender();

// function formSender() {
// 		// javascript selector
//     var form = document.querySelector('#form');
    
//     // jquery selector
//     // $ sign in variable is a good practise
//     var $form = $('#form');
    
//     // check differents
//     console.log('form JAVASCRIPT:', form);
//     console.log('form jQuery:', $form);

//     form.setAttribute('novalidate', '');

//     form.addEventListener('submit', function (e) {
//         e.preventDefault();
//     });

//     function validate() {
//         var isValid = true;
//         var isEmpty;
//         var requiredFields = document.querySelectorAll('.js-required');
//         var inputs = document.querySelectorAll('input');
//         var onSuccess = document.querySelector('.success-message');
        
//         Array.prototype.forEach.call(requiredFields, function (field) {
//             isEmpty = !field.value.trim();
//             isValid = isValid && !isEmpty;

//             if (isEmpty) {
//                 inputs.classList.add('error');
//             }
//         });

//         Array.prototype.forEach.call(inputs, function(inputs) {
//             var pattern = inputs.getAttribute('pattern');

//             if (pattern) {
//                 var reg = new RegExp(pattern);

//                 if (reg.test(inputs.value)) {
//                     return;
//                 } else {
//                     isValid = isValid && false;
//                     inputs.classList.add('error');
//                 }
//             }
//         })


//         if (isValid) {
//             form.style.display = "none";
//             onSuccess.style.display = "block";
//         }
//     }

// }