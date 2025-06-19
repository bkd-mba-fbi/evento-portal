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

function getLanguage(){
  return X.language();
}


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
      X.strings[getLanguage()].views[2].start_dropdown +
      ' </span>\
<div class="excelDropdown-content">\
<a class="textButton" onclick="X.showOverlay(2);"> ' +
      X.strings[getLanguage()].views[2].start_button +
      " </a>" +
      (appendExcelBt.length > 0
        ? '\
<a class="textButton" onclick="X.showOverlay(3);"> ' +
          X.strings[getLanguage()].views[3].start_button +
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
  if ($('#excel-import').length === 0) {
      return;
  }
  
  var tests = X.collectTestNames();
  var dropdownItems = '';
  var atworkTests = 0;
  for (let index = 0; index < tests.length; index++) {
    const test = tests[index];
    
    if (dropdownItems.indexOf(test) === -1 && tests.indexOf(test) > 0 && test.length > 0) {
      dropdownItems = dropdownItems + '<a onclick="X.showOverlay(4,'+ index +')";>' + test + '</a>';
      atworkTests++;
    }
  }

  // Falls sie vorhanden sind neu einfügen. Damit kann der useCase gelöst werden, falls ein Test publiziert wird das dieser nicht mehr dargestellt wird und umgekehrt.
  var testslinks = $('#overlay-toggle-embedded-test div').first().children().length;
  if (testslinks != atworkTests ) {
    $('#excel-import').empty();   
  } else {
    return;
  }
  
  var buttons_html = '<button id="overlay-toggle-embedded-test" type="button" class="btn btn-outline-primary ms-2 dropdown-toggle excelDropdown">\
      <span>' + X.strings[getLanguage()].views[2].start_dropdown + ' </span>\
      <div class="excelDropdown-content">'
      +dropdownItems+
  '</div> </button>';

  if(document.getElementsByClassName('desktop').length > 0) {
      var buttons = $(buttons_html);
      $('#excel-import').append(buttons); 
  }
  
}


setTimeout(function(){
  const hidePublished = document.getElementById('hide-published')
  if (hidePublished) {
    hidePublished.addEventListener("click", (e) => {
      $('#overlay-toggle-embedded-test div').empty();   
    });
  } 
 },3000);


const observer = new MutationObserver(mutationList =>  
  mutationList.filter(m => m.type === 'childList').forEach(m => {    
      setTimeout(function(){
        insertButtonsGrading();
        insertButtonsTest();

        if(document.getElementById('scrollTestTable') != null) {
          var addOffset = screen.width > 1920 ? 390 : 194;
          if( document.body.offsetHeight > screen.height) {
            document.getElementById('scrollTestTable').style.height = screen.height-document.getElementsByTagName('bkd-tests-header')[0].offsetHeight-addOffset +'px';
          } 
        }
      },200);
 
  }));  
observer.observe(window.document,{childList: true, subtree: true});  
