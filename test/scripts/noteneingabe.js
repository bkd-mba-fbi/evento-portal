/**
 * add excel import toggel
 */
(function () {
  window.X_IS_EMBEDDED = true;

  // Das Script erst laden, wenn das JSModul bereit ist
  var interval_id = setInterval(function () {
    // testen ob die Toolbar geladen wurde
    if ($("#CLX_Root .dialog .grading").length === 1) {
      clearInterval(interval_id);
      $.getScript("../MasterExcel/X.js");
    }
  }, 100);

  // Funktion um Buttons einzufügen
  var insertButtons = function () {
    // Buttons nicht einfügen, wenn die grading Route nicht aktiv ist
    if (location.hash.substring(0, 10) !== "#/grading/") {
      return;
    }

    // die Buttons nur einfügen, wenn sie nicht bereits da sind
    if ($("#overlay-toggle-embedded").length === 1) {
      return;
    }

    // true wenn auch Absenzen eingegeben werden können
    var appendExcelBt =
      $("td.gradeInput ~ td input[type=text]", $("div.page")).length >= 2 ||
      $("td.gradeInput ~ td input[type=number]", $("div.page")).length >= 2;

    var buttons_html =
      '\
<div id="overlay-toggle-embedded" class="btn btn-outline-primary ms-2 dropdown-toggle excelDropdown">\
<span>' +
      X.strings[X.lang].views[2].start_dropdown +
      ' </span>\
<div class="excelDropdown-content">\
<a class="textButton" style="color:var(--bs-primary)" onclick="top.X.showOverlay(2);"> ' +
      X.strings[X.lang].views[2].start_button +
      " </a>" +
      (appendExcelBt
        ? '\
<a class="textButton" style="color:var(--bs-primary)" onclick="top.X.showOverlay(3);"> ' +
          X.strings[X.lang].views[3].start_button +
          " </a>"
        : "") +
      "\
</div> </div>";

    if (document.getElementsByClassName("gradeInput").length > 0) {
      var buttons = $(buttons_html);
      $("#CLX_Root .dialog .grading").append(buttons);
    }
  };

  window.X_EMBEDDED_CALLBACK = function () {
    insertButtons();
    console.log("insertbuttons");
    // Die Buttons einfügen, wenn die Route verändert wird
    $(window).bind("hashchange", insertButtons);
  };
})();

setInterval(function () {
  if (!document.getElementById("overlay-toggle-embedded")) {
    $.getScript("../MasterExcel/X.js");
  }
}, 5000);

/**
 * Note for users when "formative" assessment is available Extend chord
 */

var triangleExpanded = null;
document.addEventListener("DOMNodeInserted", function (event) {
  if (event.target.data !== undefined) {
    if (event.target.data.search("Formativ") > -1) {
      var target = event.target;
      var parent = target.parentElement;
      for (var i = 0; i < 4; i++) {
        var parent = parent.parentElement;
      }

      triangleExpanded = parent.children[0];
    }
  }
});

setInterval(function () {
  if (
    triangleExpanded !== null &&
    triangleExpanded.children[0].className.search("triangleExpanded") === -1
  ) {
    triangleExpanded.click();
    triangleExpanded = null;
  }
}, 2500);

/**
    Workaround: 
    - back button go to window.parent.location.pathname + '?module=tests#/events' weiterleiten.
    - SLH app: because app run in iframe public\apps\Noteneingabe\App\Controllers\statisticController.js rows 78 und 81 use window.parent.location.href
*/
window.addEventListener(
  "hashchange",
  (event) => {
    goToTestEvents();
  },
  false
);

window.addEventListener("load", (event) => {
  goToTestEvents();
});

function goToTestEvents() {
  if (window.location.hash === "#/") {
    window.parent.location =
      window.parent.location.pathname + "?module=tests#/events";
  }
}
