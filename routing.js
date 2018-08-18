"use strict";

window.onhashchange = function(e) {
  handleNavigationTo(location.hash);
};

function handleNavigationTo(hash) {
  if (hash === "#/legal") {
    setContentVisible("legal");
  } else {
    setContentVisible("main");

    if (!(hash === "#/" || hash === "#")) {
      location.hash = "#";
    }
  }

  setTimeout(function() {
    document.querySelector(".wrapper").scrollTop = 0;
  });
}

function setContentVisible(id) {
  var contentMain = document.getElementById("main");
  var contentLegal = document.getElementById("legal");

  contentMain.hidden = id !== "main";
  contentLegal.hidden = id !== "legal";
}

handleNavigationTo(location.hash);
