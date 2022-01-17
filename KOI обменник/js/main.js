$("#start").click(function () {
  $(".marquee-wrapper").removeClass("stop");
  $("#stop").addClass("pause");
  $(".start").removeClass(".start.pause");
  $(this).removeClass("pause");
});
$("#stop").click(function () {
  $(".marquee-wrapper").addClass("stop");
  $("#start").addClass("pause");
  $(".stop").removeClass(".stop.pause");
  $(this).removeClass("pause");
});
$("#start1").click(function () {
  $(".marquee-wrapper1").removeClass("stop");
  $("#stop1").addClass("pause");
  $(".start").removeClass(".start.pause");
  $(this).removeClass("pause");
});
$("#stop1").click(function () {
  $(".marquee-wrapper1").addClass("stop");
  $("#start1").addClass("pause");
  $(".stop").removeClass(".stop.pause");
  $(this).removeClass("pause");
});

// left
$("#btnAll").click(function () {
  $(this).addClass("active-btn");
  $("#btnCash").removeClass("active-btn");
  $("#btnCashless").removeClass("active-btn");
  $("#btnCrypto").removeClass("active-btn");
  $("#btnPayment").removeClass("active-btn");
  $("#btnCNY").removeClass("active-btn");
  $(".cash").removeClass("none");
  $(".cashless").removeClass("none");
  $(".crypto").removeClass("none");
  $(".payment").removeClass("none");
  $(".cny").removeClass("none");
});
$("#btnCash").click(function () {
  $(this).addClass("active-btn");
  $("#btnAll").removeClass("active-btn");
  $("#btnCashless").removeClass("active-btn");
  $("#btnCrypto").removeClass("active-btn");
  $("#btnPayment").removeClass("active-btn");
  $("#btnCNY").removeClass("active-btn");
  $(".cash").removeClass("none");
  $(".cashless").addClass("none");
  $(".crypto").addClass("none");
  $(".payment").addClass("none");
  $(".cny").addClass("none");
});
$("#btnCashless").click(function () {
  $(this).addClass("active-btn");
  $("#btnCash").removeClass("active-btn");
  $("#btnAll").removeClass("active-btn");
  $("#btnCrypto").removeClass("active-btn");
  $("#btnPayment").removeClass("active-btn");
  $("#btnCNY").removeClass("active-btn");
  $(".cashless").removeClass("none");
  $(".cash").addClass("none");
  $(".crypto").addClass("none");
  $(".payment").addClass("none");
  $(".cny").addClass("none");
});
$("#btnCrypto").click(function () {
  $(this).addClass("active-btn");
  $("#btnCash").removeClass("active-btn");
  $("#btnCashless").removeClass("active-btn");
  $("#btnAll").removeClass("active-btn");
  $("#btnPayment").removeClass("active-btn");
  $("#btnCNY").removeClass("active-btn");
  $(".crypto").removeClass("none");
  $(".cash").addClass("none");
  $(".cashless").addClass("none");
  $(".payment").addClass("none");
  $(".cny").addClass("none");
});
$("#btnPayment").click(function () {
  $(this).addClass("active-btn");
  $("#btnCash").removeClass("active-btn");
  $("#btnCashless").removeClass("active-btn");
  $("#btnCrypto").removeClass("active-btn");
  $("#btnAll").removeClass("active-btn");
  $("#btnCNY").removeClass("active-btn");
  $(".payment").removeClass("none");
  $(".cash").addClass("none");
  $(".cashless").addClass("none");
  $(".crypto").addClass("none");
  $(".cny").addClass("none");
});
$("#btnCNY").click(function () {
  $(this).addClass("active-btn");
  $("#btnCash").removeClass("active-btn");
  $("#btnCashless").removeClass("active-btn");
  $("#btnCrypto").removeClass("active-btn");
  $("#btnPayment").removeClass("active-btn");
  $("#btnAll").removeClass("active-btn");
  $(".cny").removeClass("none");
  $(".cash").removeClass("none");
  $(".cashless").removeClass("none");
  $(".crypto").removeClass("none");
  $(".payment").removeClass("none");
});

//right
$("#btnAllright").click(function () {
  $(this).addClass("active-btn");
  $("#btnCashright").removeClass("active-btn");
  $("#btnCashlessright").removeClass("active-btn");
  $("#btnCryptoright").removeClass("active-btn");
  $("#btnPaymentright").removeClass("active-btn");
  $("#btnCNYright").removeClass("active-btn");
  $(".cash-right").removeClass("none");
  $(".cashless-right").removeClass("none");
  $(".crypto-right").removeClass("none");
  $(".payment-right").removeClass("none");
  $(".cny-right").removeClass("none");
});
$("#btnCashright").click(function () {
  $(this).addClass("active-btn");
  $("#btnAllright").removeClass("active-btn");
  $("#btnCashlessright").removeClass("active-btn");
  $("#btnCryptoright").removeClass("active-btn");
  $("#btnPaymentright").removeClass("active-btn");
  $("#btnCNYright").removeClass("active-btn");
  $(".cash-right").removeClass("none");
  $(".cashless-right").addClass("none");
  $(".crypto-right").addClass("none");
  $(".payment-right").addClass("none");
  $(".cny-right").addClass("none");
});
$("#btnCashlessright").click(function () {
  $(this).addClass("active-btn");
  $("#btnCashright").removeClass("active-btn");
  $("#btnAllright").removeClass("active-btn");
  $("#btnCryptoright").removeClass("active-btn");
  $("#btnPaymentright").removeClass("active-btn");
  $("#btnCNYright").removeClass("active-btn");
  $(".cashless-right").removeClass("none");
  $(".cash-right").addClass("none");
  $(".crypto-right").addClass("none");
  $(".payment-right").addClass("none");
  $(".cny-right").addClass("none");
});
$("#btnCryptoright").click(function () {
  $(this).addClass("active-btn");
  $("#btnCashright").removeClass("active-btn");
  $("#btnCashlessright").removeClass("active-btn");
  $("#btnAllright").removeClass("active-btn");
  $("#btnPaymentright").removeClass("active-btn");
  $("#btnCNYright").removeClass("active-btn");
  $(".crypto-right").removeClass("none");
  $(".cash-right").addClass("none");
  $(".cashless-right").addClass("none");
  $(".payment-right").addClass("none");
  $(".cny-right").addClass("none");
});
$("#btnPaymentright").click(function () {
  $(this).addClass("active-btn");
  $("#btnCashright").removeClass("active-btn");
  $("#btnCashlessright").removeClass("active-btn");
  $("#btnCryptoright").removeClass("active-btn");
  $("#btnAllright").removeClass("active-btn");
  $("#btnCNYright").removeClass("active-btn");
  $(".payment-right").removeClass("none");
  $(".cash-right").addClass("none");
  $(".cashless-right").addClass("none");
  $(".crypto-right").addClass("none");
  $(".cny-right").addClass("none");
});
$("#btnCNYright").click(function () {
  $(this).addClass("active-btn");
  $("#btnCashright").removeClass("active-btn");
  $("#btnCashlessright").removeClass("active-btn");
  $("#btnCryptoright").removeClass("active-btn");
  $("#btnPaymentright").removeClass("active-btn");
  $("#btnAllright").removeClass("active-btn");
  $(".cny-right").removeClass("none");
  $(".cash-right").removeClass("none");
  $(".cashless-right").removeClass("none");
  $(".crypto-right").removeClass("none");
  $(".payment-right").removeClass("none");
});

$(document).ready(function () {
  $(".slide-direction").slick({
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1200,
    arrows: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2500,
  });
  $(".slider-review-mobile").slick({
    vertical: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 1500,
    arrows: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 1500,
  });
});

$(".dropdown").click(function () {
  $(this).attr("tabindex", 1).focus();
  $(this).toggleClass("active");
  $(this).find(".dropdown-menu").slideToggle(300);
});
$(".dropdown").focusout(function () {
  $(this).removeClass("active");
  $(this).find(".dropdown-menu").slideUp(300);
});

$(".dropdown .dropdown-menu li").click(function () {
  $(this).parents(".dropdown").find("span").text($(this).text());
  $(this).parents(".dropdown").find("input").attr("value", $(this).attr("id"));
  $(".dropdown .dropdown-menu li .icon-left")
    .parents(".dropdown")
    .find(".select img")
    .attr("src", $(this).find(".icon-left").attr("src"));
  $(".dropdown .dropdown-menu li .icon-right")
    .parents(".dropdown")
    .find(".select img")
    .attr("src", $(this).find(".icon-right").attr("src"));
});
$(".exchanger-table__left-body .block-btn").click(function () {
  $(".dropdown .dropdown-menu li .icon-left")
    .parents(".dropdown")
    .find(".select img")
    .attr("src", $(this).find("img").attr("src"));
  $(".dropdown .dropdown-menu li .icon-right")
    .parents(".dropdown")
    .find(".select img")
    .attr("src", $(this).find(".icon-right").attr("src"));
});
$(".exchanger-table__right-body .block-btn").click(function () {
  $(".dropdown .dropdown-menu li .icon-right")
    .parents(".dropdown")
    .find(".select img")
    .attr("src", $(this).find("img").attr("src"));
});

butt.onclick = function () {
  var val = document.getElementById("inputGet").value;
  document.getElementById("numberPopup").innerHTML = val;
};
$("#butt").click(function () {
  $(".popup").removeClass("none");
  $(".thank").addClass("none");
  $(".pc-popup").removeClass("none");
  var textContent = $("#currencyInput").text();
  $("#currencyPopup").text(textContent);
  $(".popup__title")
    .find("#iconPopup")
    .attr("src", $("#selectGet").find("#iconCurrency").attr("src"));
});
$("#btnPopupFon").click(function () {
  event.preventDefault();
  $(".popup").addClass("none");
});
$(".popup__close").click(function () {
  event.preventDefault();
  $(".popup").addClass("none");
});
$(".popup__btn").click(function () {
  event.preventDefault();
  $(".pc-popup").addClass("none");
  $(".thank").removeClass("none");
});
$(".dropdown-menu li").click(function () {
  var input =
      "<strong>" +
      $(this).parents(".dropdown").find("input").val() +
      "</strong>",
    msg = '<span class="msg">Hidden input value: ';
  $(".msg").html(msg + input + "</span>");
});

function animate(items) {
  if (items.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
      for (let index = 0; index < items.length; index++) {
        const animItem = items[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          pageYOffset > animItemOffset - animItemPoint &&
          pageYOffset < animItemOffset + animItemHeight
        ) {
          animItem.classList.add("_active");
        } else {
          if (!animItem.classList.contains("_anim-no-hide")) {
            animItem.classList.remove("_active");
          }
        }
      }
      function offset(el) {
        const rect = el.getBoundingClientRect(),
          scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      }
    }
    setTimeout(() => {
      animOnScroll();
    }, 100);
    animOnScroll();
  }
}

animate(document.querySelectorAll("._anim-item"));
animate(document.querySelectorAll("._anim-item-right"));
animate(document.querySelectorAll("._anim-item-left"));
animate(document.querySelectorAll("._anim-item-text"));

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
    $(".header__language").toggleClass("active");
  });
  $("#btc_1").hover(function () {
    $(".reserve-btc__item-text-bottom_img.one").toggleClass("hover");
    $(".reserve-btc__item-text.btc_1").toggleClass("black");
  });
  $("#btc_2").hover(function () {
    $(".reserve-btc__item-text-bottom_img.two").toggleClass("hover");
    $(".reserve-btc__item-text.btc_2").toggleClass("black");
  });
  $("#btc_3").hover(function () {
    $(".reserve-btc__item-text-bottom_img.three").toggleClass("hover");
    $(".reserve-btc__item-text.btc_3").toggleClass("black");
  });
  $("#btc_4").hover(function () {
    $(".reserve-btc__item-text-bottom_img.four").toggleClass("hover");
    $(".reserve-btc__item-text.btc_4").toggleClass("black");
  });
  $("#btc_5").hover(function () {
    $(".reserve-btc__item-text-bottom_img.five").toggleClass("hover");
    $(".reserve-btc__item-text.btc_5").toggleClass("black");
  });
  $("#btc_6").hover(function () {
    $(".reserve-btc__item-text-bottom_img.six").toggleClass("hover");
    $(".reserve-btc__item-text.btc_6").toggleClass("black");
  });
  $("#btc_7").hover(function () {
    $(".reserve-btc__item-text-bottom_img.seven").toggleClass("hover");
    $(".reserve-btc__item-text.btc_7").toggleClass("black");
  });
  $("#btc_8").hover(function () {
    $(".reserve-btc__item-text-bottom_img.eight").toggleClass("hover");
    $(".reserve-btc__item-text.btc_8").toggleClass("black");
  });
  $("#btc_9").hover(function () {
    $(".reserve-btc__item-text-bottom_img.nine").toggleClass("hover");
    $(".reserve-btc__item-text.btc_9").toggleClass("black");
  });
  $("#btc_10").hover(function () {
    $(".reserve-btc__item-text-bottom_img.ten").toggleClass("hover");
    $(".reserve-btc__item-text.btc_10").toggleClass("black");
  });
  $("#btc_11").hover(function () {
    $(".reserve-btc__item-text-bottom_img.eleven").toggleClass("hover");
    $(".reserve-btc__item-text.btc_11").toggleClass("black");
  });
  $("#btc_12").hover(function () {
    $(".reserve-btc__item-text-bottom_img.twelve").toggleClass("hover");
    $(".reserve-btc__item-text.btc_12").toggleClass("black");
  });
});

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  return {
    total: t,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var deadline = new Date(Date.parse(new Date()) + 30 * 1000);
      initializeClock("countdown", deadline);
    }
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

setTimeout(() => {
  var deadline = new Date(Date.parse(new Date()) + 30 * 1000);
  initializeClock("countdown", deadline);
  $("#svg1").removeClass("none");
}, 3000);
