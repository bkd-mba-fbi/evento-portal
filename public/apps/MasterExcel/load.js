/**
 * add excel import toggel
 */

  // Funktion um Buttons einzufügen
  var insertButtons = function () {
    // Buttons nicht einfügen, wenn die grading Route nicht aktiv ist
    if (location.hash.substring(0, 10) !== "#/grading/") {
      return;
    }

    // die Buttons nur einfügen, wenn sie nicht bereits da sind
    if ($('#overlay-toggle-embedded').length === 1) {
      return;
    }

    // true wenn auch Absenzen eingegeben werden können
    var appendExcelBt =
      $("td input[type=text]").length >= 2 ||
      $("td input[type=number]").length >= 2;

    var buttons_html =
      '\
<div id="overlay-toggle-embedded" class="btn-clearGrades ms-2 dropdown-toggle excelDropdown">\
<span>' +
      X.strings[X.lang].views[2].start_dropdown +
      ' </span>\
<div class="excelDropdown-content">\
<a class="textButton" onclick="X.showOverlay(2);"> ' +
      X.strings[X.lang].views[2].start_button +
      " </a>" +
      (appendExcelBt
        ? '\
<a class="textButton" onclick="X.showOverlay(3);"> ' +
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

  
  var interval_id = setInterval(function () {
    // testen ob die Toolbar geladen wurde
    if ($("#CLX_Root .dialog .grading").length === 1) {
      clearInterval(interval_id);
      insertButtons();
    }
  }, 100);
