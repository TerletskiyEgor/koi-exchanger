const allButtons = document.querySelectorAll(".block-btn"),
  selectGive = document.querySelector("#selectGive span"),
  selectGet = document.querySelector("#selectGet span"),
  moneyListGive = document.querySelectorAll("#dropdownGive li"),
  moneyListGet = document.querySelectorAll("#dropdownGet li"),
  giveButtons = document.querySelectorAll('[data-side="give"]'),
  getButtons = document.querySelectorAll('[data-side="get"]'),
  allCities = document.querySelectorAll(".city-text"),
  giveCities = document.querySelectorAll('[data-city="give"]'),
  getCities = document.querySelectorAll('[data-city="get"]'),
  reserveNumber = document.querySelector("#reserveNumber"),
  currencyGive = document.querySelector("#currencyGive"),
  currencyGet = document.querySelector("#currencyGet");

let inputGive = document.querySelector("#inputGive"),
  inputGet = document.querySelector("#inputGet"),
  btnGiveId = "USDTTRC",
  btnGetId = "CASHUSD",
  city = "KIEV",
  result,
  course,
  trigger = 1;

getButtons.forEach((e) => {
  e.style.display = "none";

  if (
    e.getAttribute("data-moneyType") == "cashPlus" ||
    e.getAttribute("data-moneyType") == "cash"
  ) {
    e.style.display = "block";

    e.classList.add("fade");
  }
});

async function getCurruncy() {
  const response = await fetch("https://api.001k.exchange/api/courses");

  const data = await response.json();

  result = await data;

  if (trigger == 1) {
    course = result.USDTTRC.CASHUSD.KIEV.get;
  }

  // console.log(result.BTC.CASHRUB.MSK.get);

  // console.log(result[val].CARDRUB.Cashless.get);
}

getCurruncy();

setInterval(() => getCurruncy(), 10000);

setInterval(() => giveToGet(), 30000);

setInterval(() => getToGive(), 30000);

function removeActiveClass(side) {
  side.forEach((el) => {
    el.classList.remove("active-button-effect");
  });
}

function show(e) {
  removeActiveClass(getButtons);

  e.style.display = "block";

  e.classList.add("fade");
}

function hideCities(selector) {
  selector.forEach((elem) => {
    elem.style.display = "none";
  });
}

function removeCityActiveClass(selector) {
  selector.forEach((elem) => {
    elem.classList.remove("active");
  });
}

function attention() {
  document.querySelector("#giveNumber").innerHTML = inputGive.value;

  document.querySelector("#getNumber").innerHTML = inputGet.value;

  document.querySelector("#giveCurrency").innerHTML = selectGive.innerHTML;

  document.querySelector("#getCurrency").innerHTML = selectGet.innerHTML;

  document.querySelector('[data-attantionId="giveNumber"]').innerHTML =
    inputGive.value;

  document.querySelector('[data-attantionId="getNumber"]').innerHTML =
    inputGet.value;

  document.querySelector('[data-attantionId="giveCurrency"]').innerHTML =
    selectGive.innerHTML;

  document.querySelector('[data-attantionId="getCurrency"]').innerHTML =
    selectGet.innerHTML;
}

function selectButton(buttonSelector, btnId, btnAtrribute, dataSide, select) {
  buttonSelector.forEach((el) => {
    el.addEventListener("click", (ev) => {
      trigger = 0;

      if (el.getAttribute("data-side") == "give") {
        if (el.getAttribute("data-moneyType") == "cryptoPlus") {
          getButtons.forEach((e) => {
            e.style.display = "none";

            if (
              e.getAttribute("data-moneyType") == "cashPlus" ||
              e.getAttribute("data-moneyType") == "cash"
            ) {
              show(e);

              document

                .querySelector('[data-btnGetId="CASHUSD"]')

                .classList.add("active-button-effect");

              btnGetId = "CASHUSD";

              selectGet.innerHTML = btnGetId;
            }
          });
        } else if (el.getAttribute("data-moneyType") == "crypto") {
          getButtons.forEach((e) => {
            e.style.display = "none";

            if (e.getAttribute("data-moneyType") == "cash") {
              show(e);

              document

                .querySelector('[data-btnGetId="CASHUSD"]')

                .classList.add("active-button-effect");

              btnGetId = "CASHUSD";

              selectGet.innerHTML = btnGetId;
            }
          });
        } else if (el.getAttribute("data-moneyType") == "payment") {
          getButtons.forEach((e) => {
            e.style.display = "none";

            if (e.getAttribute("data-btnGetId") == "CASHUSD") {
              show(e);

              document

                .querySelector('[data-btnGetId="CASHUSD"]')

                .classList.add("active-button-effect");

              btnGetId = "CASHUSD";

              selectGet.innerHTML = btnGetId;
            }
          });
        } else if (
          el.getAttribute("data-moneyType") == "cash" &&
          el.getAttribute("data-btnId") !== "CASHUSD"
        ) {
          getButtons.forEach((e) => {
            e.style.display = "none";

            if (e.getAttribute("data-moneyType") == "crypto") {
              show(e);

              document

                .querySelector('[data-btnGetId="USDTTRC"]')

                .classList.add("active-button-effect");

              btnGetId = "USDTTRC";

              selectGet.innerHTML = btnGetId;
            }
          });
        } else if (el.getAttribute("data-btnId") == "CASHUSD") {
          getButtons.forEach((e) => {
            e.style.display = "none";

            if (
              e.getAttribute("data-moneyType") == "crypto" ||
              e.getAttribute("data-moneyType") == "payment" ||
              e.getAttribute("data-moneyType") == "cashPlus"
            ) {
              show(e);

              document

                .querySelector('[data-btnGetId="USDTTRC"]')

                .classList.add("active-button-effect");

              btnGetId = "USDTTRC";

              selectGet.innerHTML = btnGetId;
            }
          });
        }
      }

      btnId = el.getAttribute(btnAtrribute);

      if (buttonSelector == giveButtons) {
        btnGiveId = btnId;
      } else {
        btnGetId = btnId;
      }

      if (el.getAttribute("data-USD") == "getFull" && btnGetId == "CASHUSD") {
        getCities.forEach((elem) => {
          elem.style.display = "flex";
        });

        hideCities(giveCities);
      } else if (
        el.getAttribute("data-USD") == "getPeace" &&
        btnGetId == "CASHUSD"
      ) {
        hideCities(getCities);

        document.querySelectorAll('[data-show="peace"]').forEach((elem) => {
          elem.style.display = "flex";
        });

        hideCities(giveCities);
      } else if (
        el.getAttribute("data-side") == "give" &&
        el.getAttribute("data-btnId") !== "CASHUSD"
      ) {
        hideCities(allCities);
      } else if (
        el.getAttribute("data-USD") == "getFull" &&
        btnGiveId == "CASHUSD"
      ) {
        document.querySelectorAll('[data-show="peace"]').forEach((elem) => {
          elem.style.display = "flex";
        });

        document.querySelector('[data-cityGive="DUBAI"]').style.display =
          "flex";

        document.querySelector('[data-cityGive="MIAMI"]').style.display =
          "flex";

        hideCities(getCities);
      } else if (
        el.getAttribute("data-USD") == "getPeace" &&
        btnGiveId == "CASHUSD"
      ) {
        hideCities(giveCities);

        document.querySelectorAll('[data-show="peace"]').forEach((elem) => {
          elem.style.display = "flex";
        });

        hideCities(getCities);
      } else if (
        el.getAttribute("data-side") == "get" &&
        el.getAttribute("data-btnGetId") !== "CASHUSD"
      ) {
        hideCities(allCities);
      }

      if (el.getAttribute("data-side") == dataSide) {
        select.innerHTML = btnId;

        setInterval(() => {
          select.innerHTML = btnId;
        }, 30000);
      }

      if (btnGiveId == "CARDRUB" || btnGiveId == "CARDUAH") {
        setInterval(() => {
          course = result[btnGiveId][btnGetId].Cashless.send;

          reserveNumber.innerHTML =
            result[btnGiveId][btnGetId].Cashless.reserve;

          currencyGive.innerHTML = course;

          currencyGet.innerHTML = 1;

          getToGive();
        }, 30000);

        course = result[btnGiveId][btnGetId].Cashless.send;

        reserveNumber.innerHTML = result[btnGiveId][btnGetId].Cashless.reserve;

        currencyGive.innerHTML = course;

        currencyGet.innerHTML = 1;

        getToGive();
      } else if (btnGetId == "CARDRUB" || btnGetId == "CARDUAH") {
        setInterval(() => {
          course = result[btnGiveId][btnGetId].Cashless.get;

          reserveNumber.innerHTML =
            result[btnGiveId][btnGetId].Cashless.reserve;

          currencyGet.innerHTML = course;

          currencyGive.innerHTML = 1;

          giveToGet();
        }, 30000);

        course = result[btnGiveId][btnGetId].Cashless.get;

        reserveNumber.innerHTML = result[btnGiveId][btnGetId].Cashless.reserve;

        currencyGet.innerHTML = course;

        currencyGive.innerHTML = 1;

        giveToGet();
      } else if (btnGiveId == "ADVCUSD") {
        setInterval(() => {
          course = result[btnGiveId][btnGetId].ODS.get;

          reserveNumber.innerHTML = result[btnGiveId][btnGetId].ODS.reserve;

          currencyGet.innerHTML = course;

          currencyGive.innerHTML = 1;

          giveToGet();
        }, 30000);

        course = result[btnGiveId][btnGetId].ODS.get;

        reserveNumber.innerHTML = result[btnGiveId][btnGetId].ODS.reserve;

        currencyGet.innerHTML = course;

        currencyGive.innerHTML = 1;

        giveToGet();
      } else if (btnGetId == "ADVCUSD") {
        setInterval(() => {
          course = result[btnGiveId][btnGetId].ODS.send;

          reserveNumber.innerHTML = result[btnGiveId][btnGetId].ODS.reserve;

          currencyGive.innerHTML = course;

          currencyGet.innerHTML = 1;

          giveToGet();
        }, 30000);

        course = result[btnGiveId][btnGetId].ODS.send;

        reserveNumber.innerHTML = result[btnGiveId][btnGetId].ODS.reserve;

        currencyGive.innerHTML = course;

        currencyGet.innerHTML = 1;

        giveToGet();
      } else if (
        (btnGetId == "ALPCNY" || btnGetId == "WIRECNY") &&
        btnGiveId == "CASHUSD"
      ) {
        setInterval(() => {
          course = result[btnGiveId][btnGetId].KIEV.get_best;

          reserveNumber.innerHTML = result[btnGiveId][btnGetId].KIEV.reserve;

          currencyGet.innerHTML = course;

          currencyGive.innerHTML = 1;

          giveToGet();
        }, 30000);

        course = result[btnGiveId][btnGetId].KIEV.get_best;

        reserveNumber.innerHTML = result[btnGiveId][btnGetId].KIEV.reserve;

        currencyGet.innerHTML = course;

        currencyGive.innerHTML = 1;

        giveToGet();
      } else if (btnGetId == "ALPCNY" || btnGetId == "WIRECNY") {
        setInterval(() => {
          course = result[btnGiveId][btnGetId].Cashless.get_best;

          reserveNumber.innerHTML =
            result[btnGiveId][btnGetId].Cashless.reserve;

          currencyGet.innerHTML = course;

          currencyGive.innerHTML = 1;

          giveToGet();
        }, 30000);

        course = result[btnGiveId][btnGetId].Cashless.get_best;

        reserveNumber.innerHTML = result[btnGiveId][btnGetId].Cashless.reserve;

        currencyGet.innerHTML = course;

        currencyGive.innerHTML = 1;

        giveToGet();
      } else if (btnGiveId == "CASHRUB") {
        setInterval(() => {
          course = result[btnGiveId][btnGetId].MSK.send;

          reserveNumber.innerHTML = result[btnGiveId][btnGetId].MSK.reserve;

          currencyGive.innerHTML = course;

          currencyGet.innerHTML = 1;

          getToGive();
        }, 30000);

        course = result[btnGiveId][btnGetId].MSK.send;

        reserveNumber.innerHTML = result[btnGiveId][btnGetId].MSK.reserve;

        currencyGive.innerHTML = course;

        currencyGet.innerHTML = 1;

        getToGive();
      } else if (btnGetId == "CASHRUB") {
        setInterval(() => {
          course = result[btnGiveId][btnGetId].MSK.get;

          reserveNumber.innerHTML = result[btnGiveId][btnGetId].MSK.reserve;

          currencyGet.innerHTML = course;

          currencyGive.innerHTML = 1;

          giveToGet();
        }, 30000);

        course = result[btnGiveId][btnGetId].MSK.get;

        reserveNumber.innerHTML = result[btnGiveId][btnGetId].MSK.reserve;

        currencyGet.innerHTML = course;

        currencyGive.innerHTML = 1;

        giveToGet();
      } else if (btnGiveId == "CASHUSD") {
        course = result[btnGiveId][btnGetId][city].send;

        reserveNumber.innerHTML = result[btnGiveId][btnGetId][city].reserve;

        currencyGive.innerHTML = course;

        currencyGet.innerHTML = 1;

        getToGive();

        setInterval(() => {
          course = result[btnGiveId][btnGetId][city].send;

          reserveNumber.innerHTML = result[btnGiveId][btnGetId][city].reserve;

          currencyGive.innerHTML = course;

          currencyGet.innerHTML = 1;

          getToGive();
        }, 30000);
      } else if (btnGetId == "CASHUSD") {
        setInterval(() => {
          course = result[btnGiveId][btnGetId][city].get;

          reserveNumber.innerHTML = result[btnGiveId][btnGetId][city].reserve;

          currencyGet.innerHTML = course;

          currencyGive.innerHTML = 1;

          giveToGet();
        }, 30000);

        course = result[btnGiveId][btnGetId][city].get;

        reserveNumber.innerHTML = result[btnGiveId][btnGetId][city].reserve;

        currencyGet.innerHTML = course;

        currencyGive.innerHTML = 1;

        giveToGet();
      }

      document.querySelector("#reserveCurrency").innerHTML =
        selectGet.innerHTML;

      removeActiveClass(buttonSelector);

      el.classList.add("active-button-effect");
    });
  });
}

function listToButtons(listName, buttonSelector, elementSelector, side) {
  listName.forEach((el) => {
    el.addEventListener("click", (ev) => {
      removeActiveClass(side);

      document

        .querySelector(
          `[${buttonSelector}="${el.getAttribute(elementSelector)}"]`
        )

        .classList.add("active-button-effect");
    });
  });
}

function giveToGet() {
  if (
    btnGiveId == "CARDRUB" ||
    btnGiveId == "CARDUAH" ||
    btnGiveId == "CASHRUB" ||
    btnGiveId == "CASHUSD"
  ) {
    inputGet.value = inputGive.value / course;
  } else {
    inputGet.value = inputGive.value * course;
  }

  attention();
}

function getToGive() {
  if (
    btnGiveId == "CARDRUB" ||
    btnGiveId == "CARDUAH" ||
    btnGiveId == "CASHRUB" ||
    btnGiveId == "CASHUSD"
  ) {
    inputGive.value = inputGet.value * course;
  } else {
    inputGive.value = inputGet.value / course;
  }

  attention();
}

function selectCity(selector, attribute) {
  selector.forEach((el) => {
    el.addEventListener("click", (ev) => {
      removeCityActiveClass(selector);

      el.classList.add("active");

      city = el.getAttribute(attribute);

      if (btnGiveId == "CASHUSD") {
        course = result[btnGiveId][btnGetId][city].send;

        getToGive();
      } else if (btnGetId == "CASHUSD") {
        course = result[btnGiveId][btnGetId][city].get;

        giveToGet();
      }
    });
  });
}

inputGive.addEventListener("input", () => {
  giveToGet();
});

inputGet.addEventListener("input", () => {
  getToGive();
});

hideCities(giveCities);

selectButton(giveButtons, btnGiveId, "data-btnId", "give", selectGive);

selectButton(getButtons, btnGetId, "data-btnGetId", "get", selectGet);

listToButtons(moneyListGive, "data-btnId", "data-listId", giveButtons);

listToButtons(moneyListGet, "data-btnGetId", "data-listGetId", getButtons);

selectCity(getCities, "data-cityGet");

selectCity(giveCities, "data-cityGive");

// document.querySelector('[data-btnGetId="CASHUSD"]').classList.add('active-button-effect');

(function () {
  /**
   * @param {String}  type
   * @param {Number}  value
   * @param {Integer} exp
   * @returns {Number}
   */
  function decimalAdjust(type, value, exp) {
    if (typeof exp === "undefined" || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
      return NaN;
    }
    value = value.toString().split("e");
    value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
    value = value.toString().split("e");
    return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
  }
  if (!Math.ceil10) {
    Math.ceil10 = function (value, exp) {
      return decimalAdjust("ceil", value, exp);
    };
  }
})();

setTimeout(() => {
  document.querySelectorAll(".line-block").forEach((el) => {
    el.children[1].innerHTML = `$${Math.ceil10(
      result.CASHUSD[el.children[0].innerHTML].ODS.send,
      -2
    )}`;
  });
}, 3000);
