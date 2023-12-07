/**
 * add excel import toggel
 */


function loadJS(FILE_URL, async = true) {
  let scriptEle = document.createElement("script");

  scriptEle.setAttribute("src", FILE_URL);
  scriptEle.setAttribute("type", "text/javascript");
  scriptEle.setAttribute("async", async);
  document.body.appendChild(scriptEle);
}

loadJS('../MasterExcel/jquery.min.js', true);
loadJS('../MasterExcel/X.js', false);


  // Funktion um Buttons einzufügen
function insertButtonsGrading() {
    // Buttons nicht einfügen, wenn die grading Route nicht aktiv ist
    var grading = location.hash.substring(0, 10) === "#/grading/" ? true : false
    if (!grading) {
      return;
    }

    // die Buttons nur einfügen, wenn sie nicht bereits da sind
    if (document.getElementById('overlay-toggle-embedded')) {
      return;
    }

    if ($("#CLX_Root .dialog .grading").length === 1) {

    // Element id enthält 3710 oder 3720 AdId
    var inputElements = document.getElementsByTagName('input');
    var appendExcelBt = Array.from(inputElements).filter(input => input.id.includes('3710') || input.id.includes('3720'));

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
      (appendExcelBt.length > 0
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
  }
}


function insertButtonsTest() {
  // Buttons nicht einfügen, wenn folgendese element nicht vorhanden ist.
  if ($('erz-test-table-header').length === 0) {
      return;
  }
  

  // die Buttons nur einfügen, wenn sie nicht bereits da sind
  if ($('#overlay-toggle-embedded-test').length === 1) {
      return;
  }
  
  var dropdownItems = '';
  
  var tests = X.collectTestNames();

  $('erz-test-table-header div div div.collapsed').each(function(index) {
      var test =  $(this).text();
      test = test.trim();
      if (dropdownItems.indexOf(test) === -1 && tests.indexOf(test) > 0) {
          var i = index+1
          dropdownItems = dropdownItems + '<a onclick="X.showOverlay(4,'+ i +')";>' + test + '</a>';
      }
      
  });              
  
  var buttons_html = '<button id="overlay-toggle-embedded-test" type="button" class="btn btn-outline-primary ms-2 dropdown-toggle excelDropdown">\
      <span>' + X.strings[X.lang].views[2].start_dropdown + ' </span>\
      <div class="excelDropdown-content">'
      +dropdownItems+
  '</div> </button>';


  if(document.getElementsByClassName('desktop').length > 0) {
      var buttons = $(buttons_html);
      $('#excel-import').append(buttons); 
  }
  
}


window.addEventListener("DOMNodeInserted", function (ev) {
  setTimeout(function(){
    insertButtonsGrading();
    insertButtonsTest();
  },200);
}, false);
