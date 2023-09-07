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
        parent = parent.parentElement;
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
