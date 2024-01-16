// JS for a component that can be used multiple times
$('body').on('click', '.js-showValue', function () {
    alert($(this).closest('.form-group').find('input').val());
});

// JS for a component that is intended to be used once only
$('body').on('click', '#changeColor', function () {
    $(this).closest('div').find('span').css('background', getRandomColor())
});

// A Function
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function myFunctionContent() {
    const element = document.getElementById("content");
    element.scrollIntoView({
        behavior: "smooth"
    });
  }

  function myFunctionContent2() {
    const element = document.getElementById("content2");
    element.scrollIntoView({
        behavior: "smooth"
    });
  }


  
$('.your-class').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    autoplay:true,
    autoplaySpeed:1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
      