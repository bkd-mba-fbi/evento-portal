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

function absencesExists() {
    // Element id enthält 3710 oder 3720 AdId
    var inputElements = document.getElementsByTagName('input');
    return Array.from(inputElements).filter(input => input.id.includes('3710') || input.id.includes('3720'));
}


  // Funktion um Buttons einzufügen
function insertButtonsEvaluation() {
    
  
  //Falls nur ein eintrag vorhanden ist und Absenzen auch nachträglich auch dargestellt werden , soll der button neu aufgebaut werden.
  if ( $('#overlay-toggle-embedded-test div').first().children().length === 1 && absencesExists().length > 0) {
    $('#excel-import').empty();   
  } 

    var buttons_html =
      '\
<button id="overlay-toggle-embedded-test" type="button" class="btn btn-outline-primary ms-2 dropdown-toggle excelDropdown">\
<span>' +
      X.strings[getLanguage()].views[2].start_dropdown +
      ' </span>\
<div class="excelDropdown-content">\
<a class="textButton" onclick="X.showOverlay(2);"> ' +
      X.strings[getLanguage()].views[2].start_button +
      " </a>" +
      (absencesExists().length > 0
        ? '\
<a class="textButton" onclick="X.showOverlay(3);"> ' +
          X.strings[getLanguage()].views[3].start_button +
          " </a>"
        : "") +
      "\
</div> </button>";

    if ($("#overlay-toggle-embedded-test").length === 0 && document.getElementsByClassName('desktop').length > 0) {
      var buttons = $(buttons_html);
      $("#excel-import").append(buttons);
    }
  }


function insertButtonsTest() {

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


let scheduled = false;

const observer = new MutationObserver(mutations => {
  // Schnell abbrechen, wenn kein relevantes <i> betroffen ist
  const hasIChange = mutations.some(m => {
    if (m.type !== 'childList') return false;

    for (const node of m.addedNodes) {
      if (node.nodeType !== 1) continue;

      // Direktes <i> oder enthält <i>
       const className = typeof node.className === 'string'
        ? node.className
        : node.className && node.className.baseVal || '';

      if (
        node.tagName === 'I' || className.includes('subscription-detail') ||
        (node.querySelector && node.querySelector('i'))
      ) {
        return true;
      }
    }

    return false;
  });

  if (!hasIChange) return;

  // Debounce: nur einmal ausführen, egal wie viele Mutations kommen
  if (scheduled) return;
  scheduled = true;

  requestAnimationFrame(() => {
    scheduled = false;

    if (!document.querySelector('#excel-import')) return;

    const evaluation = location.hash.includes("/evaluation");
    evaluation ? insertButtonsEvaluation() : insertButtonsTest();
  });
});

observer.observe(document, { childList: true, subtree: true });