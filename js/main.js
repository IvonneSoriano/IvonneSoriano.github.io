async function home() {
    $('section').on('click', '.down', function() {
        const height = $( window ).height();
        $('body, html').animate({
            scrollTop: height - 150
        }, 800);
    });
    const txt = ['Frontend Developer', 'Angular Developer']; /* The text */
    let i =0;
    while(true){
        await typeSentence(txt[i], "#sentence");
        await waitForMs(1500);
        await deleteSentence("#sentence");
        await waitForMs(500);
        i++;
        if(i >= txt.length)
        {
            i =0;
        }
    }


}


function header(){
    $('.animated-button > span').each(function(index) {
        var characters = $(this).text().trim().split("");
        var label = $(this);
        label.empty();
        $.each(characters, function(i, el) {
            label.append("<em>" + el + "</em>");
        });
    });

    $('header .top-menu').on('click', 'a', function() {
        var link = $(this).attr('href');
        if (link.indexOf('#') == 0) {
        
                $('body, html').animate({
                    scrollTop: $(link).offset().top - 115
                }, 400);
                if ($('header').hasClass('active')) {
                    $('.menu-btn').trigger('click');
                }
            // }
        } else {
            var preload = $('.preloader');
            preload.find('.box-1').velocity({
                translateY: '0%'
            }, {
                duration: 400,
                easing: [0.7, 0, 0.3, 1]
            });
            preload.find('.box-2').velocity({
                translateY: '0%'
            }, {
                duration: 1000,
                easing: [0.7, 0, 0.3, 1],
                complete: function() {
                    location.href = link;
                }
            });
        }
        return false;
    });

    if ($('section').length && $('.top-menu li a').length) {
        $(window).on('scroll', function() {
            if (($(this).scrollTop() >= 5) && ($('section').length > 1)) {
                $('.down').fadeOut();
            }
            if (($(this).scrollTop() <= 5) && ($('section').length > 1)) {
                $('.down').fadeIn();
            }
            var scrollPos = $(window).scrollTop();
            $('.top-menu li a').each(function() {
                if ($(this).attr('href').indexOf('#') == 0) {
                    var currLink = $(this);
                    var refElement = $(currLink.attr("href"));
                    if (refElement.length) {
                        if (refElement.offset().top <= scrollPos + 120) {
                            $('.top-menu li').removeClass("current-menu-item");
                            currLink.closest('li').addClass("current-menu-item");
                        }
                    }
                }
            });
        });
    }

    $(".hamburguer").click(function(){
        $("body").toggleClass("fixed");
        $("header").toggleClass("open");
    })
}



function experience() {
    const owl = $('.experience .owl-carousel'); 
    $('.owl-carousel').owlCarousel({
        margin: 40,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        loop: false,
        rewind: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            720: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

    $('.experience .left').click(function () {
        owl.trigger('prev.owl.carousel');
      });
      $('.experience .right').click(function () {
        owl.trigger('next.owl.carousel');
      });
    
}

function education() {
    const owl = $('.education .owl-carousel'); 
   owl.owlCarousel({
        margin: 40,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        loop: false,
        rewind: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            720: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

    $('.education .left').click(function () {
        owl.trigger('prev.owl.carousel');
      });
      $('.education .right').click(function () {
        owl.trigger('next.owl.carousel');
      });
    
}

async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }


$(document).ready(function () {
    header();
    home();
    experience();
    education();
    
})