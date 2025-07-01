'use strict';



;define("kursausschreibung/app", ["exports", "jquery", "@ember/application", "kursausschreibung/resolver", "ember-load-initializers", "kursausschreibung/config/environment", "kursausschreibung/framework/login-helpers"], function (_exports, _jquery, _application, _resolver, _emberLoadInitializers, _environment, _loginHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // restore window.$ and window.jQuery
  _jquery.default.noConflict(true);

  // read OAuth token and restore URL
  (0, _loginHelpers.checkToken)();
  const App = _application.default.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = _exports.default = App;
});
;define("kursausschreibung/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("kursausschreibung/components/area-navigation", ["exports", "@ember/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _component.default.extend({}).reopenClass({
    positionalParams: ['area']
  });
});
;define("kursausschreibung/components/event-details-table", ["exports", "@ember/component", "kursausschreibung/framework/settings", "kursausschreibung/framework/translate", "@ember/string", "kursausschreibung/framework/ics-file"], function (_exports, _component, _settings, _translate, _string, _icsFile) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _component.default.extend({
    title: _settings.default.eventDetailsTitle,
    showEventText: _settings.default.showEventText,
    fields: _settings.default.eventDetailsFields.map(key => ({
      name: (0, _translate.getString)((0, _string.camelize)(key)),
      key
    })),
    actions: {
      getIcsFileFromEvent() {
        (0, _icsFile.getIcsFileFromEvent)(this.event);
      }
    }
  });
});
;define("kursausschreibung/components/event-list-item", ["exports", "@ember/component", "kursausschreibung/framework/settings", "kursausschreibung/framework/translate", "@ember/string"], function (_exports, _component, _settings, _translate, _string) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _component.default.extend({
    tagName: 'li',
    classNames: 'jsfilter',
    title: _settings.default.eventListTitle,
    fields: _settings.default.eventListFields.map(key => ({
      name: (0, _translate.getString)((0, _string.camelize)(key)),
      key
    }))
  });
});
;define("kursausschreibung/components/event-list-search", ["exports", "@ember/component", "@ember/object/computed", "@ember/object", "kursausschreibung/framework/url-helpers", "kursausschreibung/framework/gui-helpers", "kursausschreibung/framework/storage", "kursausschreibung/framework/settings", "kursausschreibung/framework/translate", "@ember/string"], function (_exports, _component, _computed, _object, _urlHelpers, _guiHelpers, _storage, _settings, _translate, _string) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // tests if a query matches a value
  function match(value, query) {
    if (typeof value === 'object' && value !== null) {
      value = Object.values(value).join('|');
    }
    return typeof value === 'string' && value.toLowerCase().indexOf(query) !== -1;
  }
  var _default = _exports.default = _component.default.extend({
    query: (0, _urlHelpers.getParameterByName)('search'),
    // update the filtered events when the events change
    eventsChanged: (0, _object.observer)('events', function () {
      this.send('queryChanged');
    }),
    willRender() {
      //only on first page. filter eventcode
      if (this.get('parentView').page === 1) {
        this.send('queryChanged');
      }
      let options = '';
      if (_settings.default.sortOptions === undefined) {
        options = '<option value=error>configure key sortoptions array in settings</option>';
      } else {
        _settings.default.sortOptions.forEach(option => {
          options = options + '<option value=' + option + '>' + (0, _translate.getString)("sort" + option) + '</option>';
        });
      }
      this.set('sortOptions', (0, _string.htmlSafe)(options));
    },
    didRender() {
      document.getElementById('sortList').value = (0, _storage.getSortAs)();
    },
    filteredEvents: (0, _computed.oneWay)('events'),
    keyUp() {
      this.set('query', document.getElementById('searchEvents').value);
      (0, _urlHelpers.setParameterByName)('search', this.get('query'));
      this.send('queryChanged');
    },
    actions: {
      clearSearch() {
        this.set('query', '');
        (0, _urlHelpers.setParameterByName)('search', '');
      },
      queryChanged() {
        let query = this.get('query');
        query = query === null ? '' : query.toLowerCase();
        // don't filter the events when the query is empty
        if (query === '') {
          this.set('filteredEvents', this.get('events'));
          return;
        }
        this.set('filteredEvents', this.get('events')
        // search the query string in event-properties and memo-texts
        .filter(event => Object.keys(event).some(key => match(event[key], query)) || event.texts.some(text => match(text.memo, query))));
        this.get('queryChanged')(query);
      },
      sortBy(value) {
        (0, _guiHelpers.sortAs)(value);
      }
    }
  });
});
;define("kursausschreibung/components/event-list", ["exports", "@ember/component", "kursausschreibung/framework/url-helpers"], function (_exports, _component, _urlHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function filterParam(getParam) {
    let filters = document.getElementsByClassName('filter-tag');
    let activeClass = 'uk-active';
    if (getParam) {
      let filterValue = (0, _urlHelpers.getParameterByName)('filter');
      for (let item of filters) {
        document.getElementById(item.id).classList.remove(activeClass);
        if (item.id.indexOf('tag' + filterValue) >= 0) {
          document.getElementById(item.id).classList.add(activeClass);
        }
      }
    } else {
      for (let item of filters) {
        if (item.className.indexOf(activeClass) >= 0) {
          (0, _urlHelpers.setParameterByName)('filter', item.id.substring(3, item.id.length));
        }
      }
    }
  }
  var _default = _exports.default = _component.default.extend({
    actions: {
      queryChanged(query) {
        this.get('queryChanged')(query);
      }
    },
    didRender() {
      filterParam(true);
    },
    click() {
      filterParam(false);
    }
  });
});
;define("kursausschreibung/components/input-base", ["exports", "@ember/component", "@ember/object"], function (_exports, _component, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _component.default.extend({
    tagName: 'div',
    classNames: 'uk-width-1-1',
    componentType: (0, _object.computed)('field.dataType', function () {
      let dataType = this.get('field.dataType');

      // provide typeahead functionality for postal codes (see issue #75)
      // change the type of the fields here so there is no need to change
      // any settings
      if (this.get('field.id') === 'Zip') {
        dataType = 'postal-code';
      }
      return 'input/input-' + dataType;
    })
  });
});
;define("kursausschreibung/components/input/input-checkbox", ["exports", "@ember/component", "kursausschreibung/framework/form-helpers"], function (_exports, _component, _formHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _component.default.extend({
    change() {
      let field = this.get('field');
      let currentValue = document.getElementById('vss' + field.id).checked;
      (0, _formHelpers.vssDependency)(currentValue, field);
    }
  });
});
;define("kursausschreibung/components/input/input-date", ["exports", "@ember/component", "kursausschreibung/framework/date-helpers", "kursausschreibung/framework/form-helpers"], function (_exports, _component, _dateHelpers, _formHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _component.default.extend({
    change() {
      if (this.field.id === 'Birthdate') {
        (0, _formHelpers.formFieldError)(this.element.children[0], (0, _dateHelpers.dateGreaterNow)(this.element.children[0].value));
      }
    },
    focusOut() {
      let field = this.get('field');
      let currentValue = document.getElementById('vss' + field.id).value;
      (0, _formHelpers.vssDependency)(currentValue, field);
    }
  });
});
;define("kursausschreibung/components/input/input-dropdown", ["exports", "@ember/component", "kursausschreibung/framework/form-helpers", "@ember/string"], function (_exports, _component, _formHelpers, _string) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _component.default.extend({
    willRender() {
      let options = this.get('field.options.options');
      let dropdownOptions = '';
      options.forEach(option => {
        dropdownOptions = dropdownOptions + '<option value=' + option.Key + '>' + option.Value + '</option>';
      });
      this.set('dropdownOptions', (0, _string.htmlSafe)(dropdownOptions));
    },
    change() {
      let field = this.get('field');
      let currentValue = null;
      document.getElementById(this.elementId).children[0].classList.remove('required');
      document.getElementsByName(field.id).forEach(input => {
        if (field.options.showAsRadioButtons) {
          currentValue = input.checked ? input.value : currentValue;
        } else {
          currentValue = input.value;
        }
      });
      (0, _formHelpers.vssDependency)(currentValue, field);
      if (field.id === '10895') {
        // only these two values should show the company address
        let needsCompany = currentValue === '4000197' || currentValue === '4000198';
        let $btn = jQuery('button[name="useCompanyAddress"]');

        // if we “need” company‐address but the button is still disabled, click it
        if (needsCompany && $btn.prop('disabled')) {
          $btn.click();
        }
        // if we no longer “need” the company address but it’s currently shown, click to hide it
        else if (!needsCompany && !$btn.prop('disabled')) {
          $btn.click();
        }

        // finally toggle “required” on all inputs inside the fieldset
        jQuery('.company-address-fields').find('input, select, textarea').prop('required', needsCompany);
      }
    }
  });
});
;define("kursausschreibung/components/input/input-email", ["exports", "@ember/component", "kursausschreibung/framework/form-helpers", "jquery"], function (_exports, _component, _formHelpers, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _component.default.extend({
    change() {
      // show an error message for duplicate e-mails
      const emailFields = (0, _jquery.default)('#subscriptionForm').closest('form').find('input[type="email"]').toArray();
      const emailFieldValues = emailFields.map(field => field.value);
      emailFields.forEach((field, fieldIndex) => {
        const valueIndex = emailFieldValues.indexOf(field.value);
        if (valueIndex !== -1 && valueIndex < fieldIndex) {
          (0, _formHelpers.formFieldError)(field, true, 'duplicateEmailError');
        } else {
          (0, _formHelpers.formFieldError)(field, false);
        }
      });
    },
    keyUp() {
      this.change();
    }
  });
});
;define("kursausschreibung/components/input/input-file", ["exports", "@ember/component", "kursausschreibung/framework/translate", "kursausschreibung/framework/form-helpers", "uikit", "jquery"], function (_exports, _component, _translate, _formHelpers, _uikit, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function getInputFile(fieldId) {
    let elementIdFile = getElementIdFile(fieldId);
    return document.getElementById(elementIdFile).files[0];
  }
  function getElementIdFile(fieldId) {
    return 'file' + fieldId;
  }
  var _default = _exports.default = _component.default.extend({
    change() {
      let elementIdFile = getElementIdFile(this.field.id);
      let inputFile = getInputFile(this.field.id);
      inputFile.imgDev = null;
      let maxFileSizeMB = (this.get('field.maxFileSize') / (1024 * 1024)).toFixed(2);
      if (inputFile.size > this.get('field.maxFileSize') && maxFileSizeMB !== '0.00') {
        _uikit.default.modal.alert((0, _translate.getString)('FileSizeTooBig') + maxFileSizeMB + 'MB');
        (0, _formHelpers.removeFile)(elementIdFile);
      } else if (this.get('field.acceptFileType').indexOf(inputFile.type) === -1 || inputFile.type === "") {
        _uikit.default.modal.alert((0, _translate.getString)('FileTypeNotAccept') + this.get('field.acceptFileType'));
        (0, _formHelpers.removeFile)(elementIdFile);
      } else {
        this.set('field.fileTypeLabel', inputFile.name);
        this.set('field.fileObject', inputFile);
        let buttonClass = document.getElementById('fileBt' + this.field.id);
        buttonClass.classList.remove('required');
        let buttonClassDel = document.getElementById('fileBtDel' + this.field.id);
        buttonClassDel.classList.remove('uk-hidden');
        const reader = new FileReader();
        let data;

        // Note: reading file is async
        reader.onload = () => {
          data = reader.result;
          this.set('field.fileObject.data', data);
        };
        if (inputFile) {
          reader.readAsDataURL(inputFile);
        }
        if (this.get('field.acceptFileType') === 'image/jpeg') {
          let fieldId = this.field.id;
          let buttonClassUpload = document.getElementById('fileBtUpload' + fieldId);
          buttonClassUpload.classList.remove('uk-hidden');
          let imgField = document.getElementById('img' + fieldId);
          imgField.classList.remove('uk-hidden');
          var basic = (0, _jquery.default)('#img' + this.field.id).croppie({
            viewport: {
              width: 300,
              height: 400
            },
            boundary: {
              width: 350,
              height: 450
            }
          });
          basic.croppie('bind', {
            url: URL.createObjectURL(inputFile)
          });
        }
        _uikit.default.notification({
          message: (0, _translate.getString)('UploadErfolgreich') + inputFile.name,
          pos: 'bottom-right',
          status: 'success'
        });
        let field = this.get('field');
        (0, _formHelpers.vssDependency)(inputFile, field);
      }
    },
    actions: {
      deleteFile() {
        let fieldId = this.field.id;
        let elementIdFile = getElementIdFile(fieldId);
        let buttonClassDel = document.getElementById('fileBtDel' + fieldId);
        buttonClassDel.classList.add('uk-hidden');
        if (this.get('field.options.required')) {
          let buttonClass = document.getElementById('fileBt' + this.field.id);
          buttonClass.classList.add('required');
        }
        let imgClassDel = document.getElementById('img' + fieldId);
        imgClassDel.classList.add('uk-hidden');
        let imgClassUp = document.getElementById('fileBtUpload' + fieldId);
        imgClassUp.classList.add('uk-hidden');
        let imgFielDev = document.getElementById('imgDev' + fieldId);
        imgFielDev.classList.add('uk-hidden');
        (0, _formHelpers.removeFile)(elementIdFile);
        this.set('field.fileTypeLabel', this.get('field.fileLabelBevorFileChoose'));
        (0, _jquery.default)('#img' + this.field.id).croppie('destroy');
      },
      uploadImage() {
        let fieldId = this.field.id;
        //on button click
        let basic = (0, _jquery.default)('#img' + fieldId);
        let inputFile = getInputFile(fieldId);
        basic.croppie('result', {
          type: 'base64',
          format: 'jpeg',
          size: {
            width: '300',
            height: '400'
          }
        }).then(function (base64) {
          // html is div (overflow hidden)
          // with img positioned inside.
          inputFile.imgDev = base64;
          let imgFielDev = document.getElementById('imgDev' + fieldId);
          imgFielDev.src = base64;
          imgFielDev.classList.remove('uk-hidden');
          let imgClassUp = document.getElementById('fileBtUpload' + fieldId);
          imgClassUp.classList.add('uk-hidden');
          let imgClassDel = document.getElementById('img' + fieldId);
          imgClassDel.classList.add('uk-hidden');
          (0, _jquery.default)('#img' + fieldId).croppie('destroy');
        });
      }
    }
  });
});
;define("kursausschreibung/components/input/input-freeform-dropdown", ["exports", "@ember/component", "kursausschreibung/framework/form-helpers", "jquery"], function (_exports, _component, _formHelpers, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _component.default.extend({
    didInsertElement() {
      this._super(...arguments);
      let options = this.get('field.options').options.map(option => option.Value);
      (0, _jquery.default)('.typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 0
      }, {
        limit: 10,
        source: (query, callback) => {
          query = query.trim().toLowerCase();
          callback(options.filter(option => option.toLowerCase().indexOf(query) !== -1));
        }
      });
    },
    willDestroyElement() {
      (0, _jquery.default)('.typeahead').typeahead('destroy');
      this._super(...arguments);
    },
    focusOut() {
      let field = this.get('field');
      let currentValue = document.getElementById('vss' + field.id).value;
      (0, _formHelpers.vssDependency)(currentValue, field);
    }
  });
});
;define("kursausschreibung/components/input/input-number", ["exports", "@ember/component", "kursausschreibung/framework/form-helpers"], function (_exports, _component, _formHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _component.default.extend({
    focusOut() {
      let field = this.get('field');
      let currentValue = document.getElementById('vss' + field.id).value;
      (0, _formHelpers.vssDependency)(currentValue, field);
    }
  });
});
;define("kursausschreibung/components/input/input-postal-code", ["exports", "@ember/component", "@ember/runloop", "kursausschreibung/framework/api", "jquery"], function (_exports, _component, _runloop, _api, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _component.default.extend({
    didInsertElement() {
      this._super(...arguments);
      const fetchPostalCodes = (query, asyncResults) => {
        (0, _api.getPostalCodes)(query).then(response => asyncResults(response));
      };
      let elementId = '#' + this.elementId;
      let $typeahead = (0, _jquery.default)(elementId).children(0);
      let $locationFields = (0, _jquery.default)(elementId).closest('fieldset').find('input[name="Location"]');
      $typeahead.typeahead({
        hint: true,
        highlight: true,
        minLength: 2
      }, {
        async: true,
        limit: 10,
        source: (query, _syncResults, asyncResults) => {
          (0, _runloop.debounce)(null, fetchPostalCodes, query, asyncResults, 200);
        },
        displayKey: 'Code',
        templates: {
          suggestion: object => `<div>${object.Code} ${object.Location}</div>`
        }
      });
      $typeahead.on('typeahead:select', (_event, suggestion) => $locationFields.val(suggestion.Location));
    },
    willDestroyElement() {
      (0, _jquery.default)('.typeaheadZip').typeahead('destroy');
      this._super(...arguments);
    }
  });
});
;define("kursausschreibung/components/input/input-string", ["exports", "@ember/component", "kursausschreibung/framework/form-helpers"], function (_exports, _component, _formHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _component.default.extend({
    change() {
      if (this.field.id === 'SocialSecurityNumber') {
        (0, _formHelpers.helperSocialSecurityNumber)(this.element.children[0]);
      }
    },
    keyUp() {
      this.change();
    },
    focusOut() {
      let field = this.get('field');
      let currentValue = document.getElementById('vss' + field.id).value;
      (0, _formHelpers.vssDependency)(currentValue, field);
    }
  });
});
;define("kursausschreibung/components/input/input-telephone", ["exports", "@ember/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _component.default.extend({});
});
;define("kursausschreibung/components/input/input-textarea", ["exports", "@ember/component", "kursausschreibung/framework/form-helpers"], function (_exports, _component, _formHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _component.default.extend({
    focusOut() {
      let field = this.get('field');
      let currentValue = document.getElementById('vss' + field.id).value;
      (0, _formHelpers.vssDependency)(currentValue, field);
    }
  });
});
;define("kursausschreibung/components/list-pagination", ["exports", "@ember/component", "@ember/object", "kursausschreibung/framework/settings", "kursausschreibung/framework/gui-helpers", "kursausschreibung/framework/storage"], function (_exports, _component, _object, _settings, _guiHelpers, _storage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // pages to show before and after the current page
  let n = 2;
  var _default = _exports.default = _component.default.extend({
    lastPage: (0, _object.computed)('items', function () {
      let filter = this.get('items').filter(item => item.codes instanceof Array);
      return filter.length > 0 ? 1 : Math.ceil(this.get('items').length / _settings.default.itemsPerPage);
    }),
    isFirstPage: (0, _object.computed)('page', function () {
      return this.get('page') === 1;
    }),
    isLastPage: (0, _object.computed)('page', 'lastPage', function () {
      return this.get('page') === this.get('lastPage');
    }),
    nextPage: (0, _object.computed)('page', function () {
      return this.get('page') + 1;
    }),
    previousPage: (0, _object.computed)('page', function () {
      return this.get('page') - 1;
    }),
    showFirst: (0, _object.computed)('page', function () {
      return this.get('page') > 1 + n;
    }),
    showLast: (0, _object.computed)('page', 'lastPage', function () {
      return this.get('page') < this.get('lastPage') - n;
    }),
    showLeftDots: (0, _object.computed)('page', function () {
      return this.get('page') > n + 2;
    }),
    showRightDots: (0, _object.computed)('page', 'lastPage', function () {
      return this.get('page') < this.get('lastPage') - (n + 1);
    }),
    pages: (0, _object.computed)('page', 'lastPage', function () {
      let page = this.get('page');
      let lastPage = this.get('lastPage');
      let min = page - n >= 1 ? page - n : 1;
      let max = page + n <= lastPage ? page + n : lastPage;
      let pages = [];
      for (let i = min; i <= max; i++) {
        pages.push({
          page: i,
          active: i === page
        });
      }
      return pages;
    }),
    itemsOnCurrentPage: (0, _object.computed)('items', 'page', function () {
      let page = this.get('page');
      let filter = this.get('items').filter(item => item.codes instanceof Array);
      return filter.length > 0 ? this.get('items') : this.get('items').slice(_settings.default.itemsPerPage * (page - 1), _settings.default.itemsPerPage * page);
    }),
    filterCodes: (0, _object.computed)('items', function () {
      let filterCodes = this.get('itemsOnCurrentPage').filter(item => item.allfilterCodes instanceof Array);
      let eventfilterCodes = [];
      filterCodes.forEach(event => {
        let existsFilter = filterCodes[0].allfilterCodes.filter(filter => event.filter.indexOf(filter.id) > -1);
        existsFilter.map(filter => {
          if (eventfilterCodes.includes(filter) === false) {
            eventfilterCodes.push(filter);
          }
        });
      });
      return eventfilterCodes.length === 1 ? null : eventfilterCodes;
    }),
    actions: {
      grid() {
        (0, _guiHelpers.displayAsGrid)(true);
      },
      list() {
        (0, _guiHelpers.displayAsGrid)(false);
      }
    },
    didRender() {
      var listViewGrid = (0, _storage.getListViewGrid)();
      listViewGrid = listViewGrid === null ? _settings.default.displayGrid : listViewGrid;
      (0, _guiHelpers.displayAsGrid)(listViewGrid);
    }
  });
});
;define("kursausschreibung/components/remaining-seats-badge", ["exports", "@ember/component", "@ember/object", "kursausschreibung/framework/settings"], function (_exports, _component, _object, _settings) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _component.default.extend({
    init() {
      this._super(...arguments);
      let event = this.get('event');
      event.update();
      let interval = typeof _settings.default.badgeFreeSeats === 'object' ? _settings.default.badgeFreeSeats.intervalSec : null;
      if (typeof interval !== 'number') {
        console.warn('settings.badgeFreeSeats.intervalSec not found. falling back to 30 seconds'); // eslint-disable-line no-console
        interval = 30;
      }

      // update freeSeats every <interval> seconds
      this.set('interval', setInterval(() => event.update(), interval * 1000));
    },
    willDestroyElement() {
      let interval = this.get('interval');
      if (interval !== undefined) clearInterval(interval);
    },
    hidden: (0, _object.computed)('event.{FreeSeats,status}', function () {
      let freeSeats = this.get('event.FreeSeats');
      let status = this.get('event.status');
      let subscriptionYellowDisable = typeof _settings.default.badgeFreeSeats === 'object' ? _settings.default.badgeFreeSeats.subscriptionYellowDisable : false;
      return freeSeats === null || subscriptionYellowDisable && status === 'yellow';
    }),
    labelType: (0, _object.computed)('event.FreeSeats', function () {
      return this.get('event.FreeSeats') > 5 ? 'warning' : 'danger';
    }),
    plural: (0, _object.computed)('event.FreeSeats', function () {
      return this.get('event.FreeSeats') !== 1;
    })
  });
});
;define("kursausschreibung/components/status-lamp", ["exports", "@ember/component", "@ember/object", "kursausschreibung/framework/translate"], function (_exports, _component, _object, _translate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const statuses = {
    green: {
      tooltip: (0, _translate.getString)('greenLamp'),
      className: 'lamp-green',
      icon: 'pencil'
    },
    chartreuse: {
      tooltip: (0, _translate.getString)('chartreuseLamp'),
      className: 'lamp-chartreuse',
      icon: 'check'
    },
    yellow: {
      tooltip: (0, _translate.getString)('yellowLamp'),
      className: 'lamp-yellow',
      icon: 'clock'
    },
    red: {
      tooltip: (0, _translate.getString)('redLamp'),
      className: 'lamp-red',
      icon: 'close'
    },
    orange: {
      tooltip: (0, _translate.getString)('orangeLamp'),
      className: 'lamp-orange',
      icon: 'ban'
    }
  };
  var _default = _exports.default = _component.default.extend({
    init() {
      this._super(...arguments);
      // trigger observer
      this.statusChanged();
    },
    statusChanged: (0, _object.observer)('status', function () {
      let status = statuses[this.get('status')];
      if (status !== undefined) {
        this.set('tooltip', status.tooltip);
        this.set('color', status.className);
        this.set('icon', status.icon);
      }
    }),
    tagName: 'span',
    attributeBindings: ['tooltip:data-uk-tooltip', "icon:uk-icon"],
    classNames: ['status-lamp', 'icon-lamp'],
    classNameBindings: ['color']
  });
});
;define("kursausschreibung/components/subscription-form", ["exports", "@ember/component", "@ember/object", "jquery", "kursausschreibung/framework/date-helpers", "kursausschreibung/framework/storage", "kursausschreibung/framework/translate", "uikit"], function (_exports, _component, _object, _jquery, _dateHelpers, _storage, _translate, _uikit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _component.default.extend({
    useCompanyAddress: false,
    enableInvoiceAddress: false,
    paymentEnforced: false,
    showAddressInputs: false,
    showCompanyButtonOnly: false,
    additionalPeopleCount: 0,
    didInsertElement() {
      this._super(...arguments);
      window.kursausschreibung = window.kursausschreibung || {};
      window.kursausschreibung.component = this;
    },
    additionalPeople: (0, _object.computed)('additionalPeopleCount', function () {
      // create an array so handlebars can iterate over it
      let count = this.get('additionalPeopleCount');
      let array = [];
      for (let i = 0; i < count; i++) {
        array.push(i + 1);
      }
      return array;
    }),
    thereAreAdditionalPeople: (0, _object.computed)('additionalPeopleCount', function () {
      return this.get('additionalPeopleCount') > 0;
    }),
    actions: {
      submit(event) {
        event.preventDefault();
        subscribe((0, _jquery.default)('form'), this);
        this.get('subscribe')();
      },
      useCompanyAddress() {
        if (this.get('enableInvoiceAddress') && this.get('paymentEnforced')) {
          return;
        }
        this.toggleProperty('useCompanyAddress');
      },
      addPerson() {
        if (this.get('event.FreeSeats') - 1 - this.get('additionalPeopleCount') <= 0) {
          _uikit.default.modal.alert((0, _translate.getString)('noSeatsAvailable'));
          return;
        }
        this.set('additionalPeopleCount', this.get('additionalPeopleCount') + 1);
      },
      removePerson() {
        const additionalPeopleCount = this.get('additionalPeopleCount');
        if (additionalPeopleCount < 1) {
          return;
        }
        const that = this;
        _uikit.default.modal.confirm((0, _translate.getString)('confirmDeletion'), {
          labels: {
            ok: (0, _translate.getString)('yes'),
            cancel: (0, _translate.getString)('no')
          }
        }).then(function () {
          that.set('additionalPeopleCount', additionalPeopleCount - 1);
        });
      }
    }
  }); // this function subscribes a person to an event using the information
  // provided in the form
  function subscribe($form, self) {
    let useCompanyAddress = self.get('useCompanyAddress') === true;
    let eventId = self.get('event.Id');
    let userSettings = self.get('userSettings');
    let showCompanyButtonOnly = self.get('showCompanyButtonOnly');
    ;

    // subscription
    let subscriptionData = {
      EventId: eventId,
      PersonId: null,
      SubscriptionDetails: []
    };
    let assocSubscriptionData = getFieldSetData([], $form.find('.subscription-detail-fields')); // for confirmation values

    $form.find('.subscription-detail-fields').find('input, select, textarea').each((_, element) => {
      let vssId = parseInt(element.name);
      let value = null;
      if (element.type === 'checkbox') value = element.checked ? 'Ja' : 'Nein';else if (element.type === 'file') value = element.files[0] !== undefined ? element.files[0].name : null;else if (element.value !== '' && element.dataset.type === 'date') value = (0, _dateHelpers.getDMY)(element.value); // this is the required format for subscriptionDetails
      else if (element.value !== '' && element.type !== 'radio' || element.checked) value = element.value;
      if (value !== null) subscriptionData.SubscriptionDetails.push({
        VssId: vssId,
        Value: value
      });
    });

    //made a array of Files for upload to server
    let subscriptionFiles = [];
    for (const [key, value] of Object.entries(assocSubscriptionData)) {
      if (value instanceof Object) {
        subscriptionFiles.push({
          IdVss: key,
          fileAsBase64: value.imgDev === null ? value.data : value.imgDev,
          name: value.name,
          size: value.size,
          type: value.type
        });
      }
    }

    // values for dataToSubmit
    let personId = userSettings.IdPerson,
      tableData = {},
      addressData,
      companyAddressData,
      additionalPeople;
    const addressProperties = ['Country', 'CountryId', 'FormOfAddress', 'FormOfAddressId', 'HomeCountry', 'HomeCountryId', 'Nationality', 'NationalityId', 'AddressLine1', 'AddressLine2', 'BillingAddress', 'Birthdate', 'CorrespondenceAddress', 'Email', 'Email2', 'FirstName', 'Gender', 'HomeTown', 'IsEmployee', 'LastName', 'Location', 'MiddleName', 'NativeLanguage', 'PhoneMobile', 'PhonePrivate', 'Profession', 'SocialSecurityNumber', 'StayPermit', 'StayPermitExpiry', 'Zip'];
    const companyAddressProperties = ['PersonId', 'AddressType', 'AddressTypeId', 'Country', 'CountryId', 'FormOfAddress', 'FormOfAddressId', 'AddressLine1', 'AddressLine2', 'Company', 'Department', 'FirstName', 'IsBilling', 'IsCorrespondence', 'LastName', 'Location', 'Remark', 'ValidFrom', 'ValidTo', 'Zip'];

    // read address and companyAddress if we don't know the personId yet
    if (showCompanyButtonOnly) {
      // main address
      addressData = getFieldSetData(addressProperties, $form.find('.address-fields'));

      // company address
      companyAddressData = getFieldSetData(companyAddressProperties, $form.find('.company-address-fields'));

      // set tableData for the main person
      tableData.fields = getTableData(self.get('fields'), addressData);

      // set tableData for the company address
      if (useCompanyAddress) {
        tableData.companyFields = getTableData(self.get('companyFields'), companyAddressData);
      }
    }

    // set tableData for subscriptionDetails
    tableData.subscriptionDetailFields = getTableData(self.get('subscriptionDetailFields'), assocSubscriptionData);

    // read addresses for additional people
    additionalPeople = $form.find('.additional-person-fields').toArray().map(fieldset => getFieldSetData(addressProperties, $(fieldset)));

    // set tableData for additional people
    tableData.additionalPeopleFields = additionalPeople.map((data, index) => ({
      index: index + 1,
      data: getTableData(self.get('additionalPeopleFields'), data)
    }));

    // save the data to submit
    (0, _storage.setDataToSubmit)({
      personId,
      eventId,
      useCompanyAddress,
      addressData,
      companyAddressData,
      subscriptionData,
      additionalPeople,
      tableData,
      subscriptionFiles
    });
  }

  // get data from a fieldset in the format expected by the REST-API
  function getFieldSetData(properties, $fieldset) {
    let data = {};
    properties.forEach(property => data[property] = null);
    $fieldset.find('input, select, textarea').each((_, element) => setProperties(data, element));
    return data;
  }

  // add input data of element to data object
  function setProperties(data, element) {
    if (element.nodeName === 'SELECT') {
      let text = element.options[element.selectedIndex].text;

      // skip if there is no selection
      if (text === '') return;
      data[element.name] = element.name === 'StayPermit' ? parseInt(element.value) : text;
      data[element.name + 'Id'] = parseInt(element.value);
      return;
    }
    if (element.type === 'radio') {
      if (element.checked) {
        data[element.name] = element.dataset.humanReadable;
        data[element.name + 'Id'] = parseInt(element.value);
      }
      return;
    }
    if (element.type === 'checkbox') {
      data[element.name] = element.checked;
      return;
    }
    if (element.dataset.type === 'date') {
      data[element.name] = element.value === '' ? null : (0, _dateHelpers.getYMD)(element.value);
      return;
    }
    if (element.type === 'file') {
      data[element.name] = element.files[0] !== undefined ? element.files[0] : null;
      return;
    }
    data[element.name] = element.value === '' ? null : element.value;
  }

  // return a list of key-value pairs for the confirmation table
  function getTableData(fields, data) {
    return fields.map(field => {
      let label = field.label;
      let value = data[field.id];

      // skip empty values
      if (value === null || value === '' || value === undefined) return null;

      // localize true/false
      if (field.dataType === 'checkbox') value = (0, _translate.getString)(value ? 'yes' : 'no');

      // localize dates
      if (field.dataType === 'date') value = (0, _dateHelpers.formatDate)(value, 'LL');
      if (field.dataType === 'file') value = value.name;
      return {
        label,
        value
      };
    }).filter(field => field !== null);
  }
});
;define("kursausschreibung/components/twitter-feed", ["exports", "@ember/component", "kursausschreibung/framework/translate"], function (_exports, _component, _translate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _component.default.extend({
    language: (0, _translate.getLanguage)().split('-')[0]
  }).reopenClass({
    positionalParams: ['username']
  });
});
;define("kursausschreibung/controllers/application", ["exports", "@ember/controller", "kursausschreibung/framework/translate", "kursausschreibung/framework/settings"], function (_exports, _controller, _translate, _settings) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let rightWidth = _settings.default.displayRightSide ? 'uk-width-1-4@l' : 'uk-width-1-1';
  var _default = _exports.default = _controller.default.extend({
    showLanguageButton: _settings.default.showLanguageButton,
    logoImage: _settings.default.logoImage,
    logoLink: _settings.default.logoLink,
    showContact: _settings.default.showContact,
    twitterHandle: _settings.default.twitterHandle,
    eventCategoryDropdown: _settings.default.eventCategoryDropdown,
    rightWidth,
    actions: {
      setLanguage(language) {
        (0, _translate.setLanguage)(language);
      }
    }
  });
});
;define("kursausschreibung/controllers/list", ["exports", "@ember/controller", "kursausschreibung/framework/settings"], function (_exports, _controller, _settings) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _controller.default.extend({
    eventCategoryDropdown: _settings.default.eventCategoryDropdown,
    centerWidth: (() => {
      let displayLeft = _settings.default.eventCategoryDropdown !== true;
      let displayRight = _settings.default.displayRightSide;

      // handle each combination of eventCategoryDropdown and displayRightSide
      // for every viewport-size

      if (!displayLeft && !displayRight) return 'uk-width-1-1';
      if (displayRight && displayLeft) return 'uk-width-3-4@m uk-width-1-2@l';
      if (displayLeft) return 'uk-width-3-4@m';
      return 'uk-width-3-4@l';
    })()
  });
});
;define("kursausschreibung/controllers/list/category/event/index", ["exports", "@ember/controller", "kursausschreibung/framework/settings"], function (_exports, _controller, _settings) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let badgeFreeSeatsEnabled = typeof _settings.default.badgeFreeSeats === 'object' && _settings.default.badgeFreeSeats.enabled === true;
  var _default = _exports.default = _controller.default.extend({
    showBreadcrumbs: _settings.default.showBreadcrumbs,
    badgeFreeSeatsEnabled
  });
});
;define("kursausschreibung/controllers/list/category/event/subscribe", ["exports", "@ember/controller", "@ember/service", "@ember/object"], function (_exports, _controller, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let subscribeController = _exports.default = (_class = class subscribeController extends _controller.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "router", _descriptor, this);
    }
    subscribe() {
      this.router.transitionTo('list.category.event.confirmation');
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "subscribe", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "subscribe"), _class.prototype)), _class);
  ;
});
;define("kursausschreibung/controllers/list/category/index", ["exports", "@ember/controller"], function (_exports, _controller) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _controller.default.extend({
    page: 1,
    queryParams: ['page'],
    actions: {
      queryChanged() {
        // reset page
        this.set('page', 1);
      }
    }
  });
});
;define("kursausschreibung/controllers/list/index", ["exports", "@ember/controller"], function (_exports, _controller) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _controller.default.extend({
    page: 1,
    queryParams: ['page'],
    actions: {
      queryChanged() {
        // reset page
        this.set('page', 1);
      }
    }
  });
});
;define("kursausschreibung/framework/api", ["exports", "jquery", "kursausschreibung/framework/app-config", "kursausschreibung/framework/storage", "rsvp", "kursausschreibung/framework/url-helpers", "kursausschreibung/framework/translate"], function (_exports, _jquery, _appConfig, _storage, _rsvp, _urlHelpers, _translate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.SUBSCRIPTION_DETAIL_INVOICE_ADRESS = _exports.SUBSCRIPTION_DETAIL_ALLOW_MULTIPLE_PEOPLE = void 0;
  _exports.getDropDownItems = getDropDownItems;
  _exports.getEvent = getEvent;
  _exports.getEventCodes = getEventCodes;
  _exports.getEventLocations = getEventLocations;
  _exports.getEventTexts = getEventTexts;
  _exports.getEvents = getEvents;
  _exports.getLessons = getLessons;
  _exports.getPostalCodes = getPostalCodes;
  _exports.getSubscriptionDetailDependencies = getSubscriptionDetailDependencies;
  _exports.getSubscriptionDetails = getSubscriptionDetails;
  _exports.getUserSettings = getUserSettings;
  _exports.postAddress = postAddress;
  _exports.postPerson = postPerson;
  _exports.postSubscription = postSubscription;
  _exports.postSubscriptionDetailsFiles = postSubscriptionDetailsFiles;
  _exports.putPerson = putPerson;
  /* loosely based on the CLX framework */

  let accessToken = null;

  /**
   * do a call to the API-server
   * @param {string} method the HTTP method for the call
   * @param {string} relativeUrl the URL relative to the apiUrl
   * @param {boolean} readableError pass false to get the initial exception
   * @param {object} data data for POST and PUT calls
   * @param {boolean} file for file upload change data and contentType
   */
  function ajax(method, relativeUrl, readableError = true, data = null, file = false) {
    if (accessToken === null) accessToken = (0, _storage.getAccessToken)();
    if (file === false) {
      data = data !== null ? JSON.stringify(data, null, '\t') : undefined;
    }
    let promise = _jquery.default.ajax({
      method: method,
      dataType: 'json',
      contentType: method === 'GET' ? 'text/javascript' : file ? false : 'application/json',
      processData: false,
      data: data,
      url: _appConfig.default.apiUrl + '/' + relativeUrl,
      // convert empty response to valid JSON
      dataFilter: data => data === '' ? 'null' : data,
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    if (readableError) {
      promise = promise.catch(() => {
        throw new Error(`${method}-request to ${relativeUrl} failed`); // human-readable error
      });
    }
    return promise;
  }
  function post(relativeUrl, data) {
    return ajax('POST', relativeUrl, false, data);
  }
  function put(relativeUrl, data, file = false) {
    return ajax('PUT', relativeUrl, false, data, file);
  }
  function get(relativeUrl, readableError) {
    return ajax('GET', relativeUrl, readableError);
  }

  /**
   * get UserSettings
   */
  function getUserSettings() {
    return get('UserSettings/');
  }

  /**
   * get all events
   */
  function getEvents() {
    return get('Events/');
  }

  /**
   * get an Event
   * @param {number} eventId the id of the event
   */
  function getEvent(eventId) {
    return get('Events/' + eventId);
  }

  /**
   * get the lessons for all events
   */
  function getLessons() {
    return get('Lessons/');
  }

  /**
   * get the locations for all events
   */
  function getEventLocations() {
    return get('EventLocations/');
  }

  /**
   * get codes that are aasigned events
   */
  function getEventCodes() {
    return get('EventCodes/');
  }

  /**
   * this subscription detail specifies if multiple people can
   * subscribe at the same time
   */
  const SUBSCRIPTION_DETAIL_ALLOW_MULTIPLE_PEOPLE = _exports.SUBSCRIPTION_DETAIL_ALLOW_MULTIPLE_PEOPLE = 10893;
  const SUBSCRIPTION_DETAIL_INVOICE_ADRESS = _exports.SUBSCRIPTION_DETAIL_INVOICE_ADRESS = 10895;

  /**
   * get subscriptionDetails of an event
   * @param {number} eventId the id of the event
   */
  function getSubscriptionDetails(eventId) {
    return get('Events/' + eventId + '/SubscriptionDetails');
  }

  /**
   * get subscriptionDetailDependencies of an event
   * @param {number} eventId the id of the event
   */
  function getSubscriptionDetailDependencies(eventId) {
    return get('SubscriptionDetailDependencies/?idEvent=' + eventId);
  }

  /**
   * get all eventTexts
   * @param {string} cultureInfo 'de-CH' for german and 'en-US' for french
   */
  function getEventTexts(cultureInfo) {
    return get('EventTexts/?CultureInfo=' + cultureInfo);
  }
  let dropDownItems = {};

  /**
   * get available options for dropdown menu
   * @param {string} type type of the items
   */
  function getDropDownItems(type) {
    if (dropDownItems.hasOwnProperty(type)) {
      return _rsvp.Promise.resolve(dropDownItems[type]);
    }
    return get('DropDownItems/' + type).then(response => dropDownItems[type] = response);
  }

  /**
   * search postal codes
   * @param {number} code postal code
   */
  function getPostalCodes(code) {
    return get(`PostalCodes/?filter.Code=~${code}*`);
  }

  /**
   * post a new person
   * @param {object} data data of the person
   */
  function postPerson(data) {
    return post('Persons/', data);
  }

  /**
   * update an existing person
   * @param {object} data data of the person
   * @param {number} personId id of the person
   */
  function putPerson(data, personId) {
    return put('Persons/' + personId, data);
  }

  /**
   * post a new address
   * @param {object} data data of the address
   */
  function postAddress(data) {
    return post('Addresses/', data);
  }

  /**
   * post a new subscription
   * @param {object} data data of the subscription
   */
  function postSubscription(data) {
    return post('Subscriptions/', data);
  }

  /**
   * Post Files to SubscriptionDetails
   * @param {object} data of the subscription files
   * @param {image} image des files Base64Codierung
   * @returns 
   */
  function postSubscriptionDetailsFiles(data, file) {
    return new _rsvp.Promise(resolve => post('SubscriptionDetails/files', data).then((_data, _status, xhr) => {
      resolve([xhr]);
    })).then(([xhr]) => {
      // xhr is in an array so it gets correctly passed along
      let locationHeader = xhr.getResponseHeader('location');
      let arrayBuffer = base64ToArrayBuffer(file.fileAsBase64.substring(file.fileAsBase64.indexOf('base64,') + 7, file.fileAsBase64.length));
      return put((0, _urlHelpers.getCorrectApiUrl)(locationHeader), arrayBuffer, true);
    }).catch(error => {
      if (error instanceof Error) {
        console.error(error); // eslint-disable-line no-console
      }
      let message = '';
      try {
        message = error.responseJSON.Issues[0].Message;
      } catch (exception) {
        message = window.kursausschreibung.subscriptionFilesUploadFailed = (0, _translate.getString)('subscriptionFilesUploadFailed');
      }
      throw {
        message: message
      };
    });
  }
  /**
   * https://stackoverflow.com/questions/21797299/convert-base64-string-to-arraybuffer 
   */
  function base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }
});
;define("kursausschreibung/framework/app-config", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = window.kursausschreibung.appConfig;
});
;define("kursausschreibung/framework/date-helpers", ["exports", "date-fns/parseISO", "date-fns/format", "date-fns/locale/de", "date-fns/locale/fr", "kursausschreibung/framework/translate"], function (_exports, _parseISO, _format, _de, _fr, _translate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.combineDate = combineDate;
  _exports.dateGreaterNow = dateGreaterNow;
  _exports.eventEnded = eventEnded;
  _exports.eventStarted = eventStarted;
  _exports.formatDate = formatDate;
  _exports.getDMY = getDMY;
  _exports.getDateTimeForIcs = getDateTimeForIcs;
  _exports.getYMD = getYMD;
  _exports.isInSubscriptionRange = isInSubscriptionRange;
  _exports.removeMinutes = removeMinutes;
  /* loosely based on the CLX framework */

  // longDateFormats from moment.js
  const formats = {
    'de-CH': {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'dd.MM.yyyy',
      LL: 'EEEEEE, d. MMMM yyyy',
      LLL: 'EEEEEE, d. MMMM yyyy HH:mm',
      LLLL: 'EEEE, d. MMMM yyyy HH:mm'
    },
    'fr-CH': {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'dd.MM.yyyy',
      LL: 'EEEEEE, d MMMM yyyy',
      LLL: 'EEEEEE, d MMMM yyyy HH:mm',
      LLLL: 'EEEE d MMMM yyyy HH:mm'
    }
  };
  const language = (0, _translate.getLanguage)();
  const locale = language === 'de-CH' ? _de.default : _fr.default;

  /**
   * format a date
   * @param {date|string|number|null} date the date to format
   * @param {string} formatString format or longDateFormat from moment.js
   */
  function formatDate(date, formatString = '') {
    if (date === null) return null;
    if (typeof date === 'string') date = (0, _parseISO.default)(date);
    formatString = formatString in formats[language] ? formats[language][formatString] : formatString;
    return (0, _format.default)(date, formatString, {
      locale
    });
  }

  /**
   * returns true when the current Date is between
   * SubscriptionDateFrom/SubscriptionTimeFrom and
   * SubscriptionDateTo/SubscriptionTimeTo
   * @param {object} event the event to check
   */
  function isInSubscriptionRange(event) {
    let now = new Date();
    if (event.SubscriptionFrom === null) return now.getTime() < event.SubscriptionTo.getTime();
    return event.SubscriptionFrom.getTime() < now.getTime() && now.getTime() < event.SubscriptionTo.getTime();
  }

  /**
   * return true if DateFrom or SubscriptionDateTo is greater than or equal
   * to the current date
   * @param {object} event event to check
   */
  function eventStarted(event) {
    let now = new Date();
    if (event.DateFrom === null) {
      return true;
    }
    let date = event.DateFrom <= event.SubscriptionDateTo ? event.SubscriptionDateTo : event.DateFrom;
    return (0, _parseISO.default)(date).getTime() >= now.getTime();
  }

  /**
   * return true if DateTo + TimeTo is smaller than or equal
   * to the current datetime
   * @param {object} event event to check
   */
  function eventEnded(event) {
    let now = new Date();
    let dateTo = event.DateTo;
    let repalcePattern = '00:00:00';
    if (dateTo === null) {
      return false;
    }
    dateTo = dateTo.search(repalcePattern) > 0 ? dateTo.replace(repalcePattern, event.TimeTo) : dateTo;
    return (0, _parseISO.default)(dateTo).getTime() <= now.getTime();
  }

  /**
   * combine a date and a time to a single date object
   * this returns null when it fails
   * @param {string} dateString a string containing the date
   * @param {string} timeString a string containing the time in the format hh:mm
   */
  function combineDate(dateString, timeString) {
    try {
      let [hours, minutes] = timeString.split(':').map(str => parseInt(str));
      let date = (0, _parseISO.default)(dateString);
      date.setHours(hours, minutes);
      return date;
    } catch (exception) {
      return null;
    }
  }

  /**
   * return timeString in format 00:00 if it has the format hh:mm:ss
   * @param {string} timeString the string to remove the time from
   */
  function removeMinutes(timeString) {
    return timeString.replace(/^(\d\d:\d\d):\d\d$/g, '$1');
  }

  /**
   * returns true if the format is DD.MM.YYYY
   * @param {string} dateString the date to check
   */
  function isDMY(dateString) {
    return /^[0-9]{2}.[0-9]{2}.[0-9]{4}$/.test(dateString);
  }

  /**
   * returns dateString in the format DD.MM.YYYY
   * @param {string} dateString the date to convert
   */
  function getDMY(dateString) {
    return isDMY(dateString) ? dateString : formatDate(dateString, 'L');
  }

  /**
   * returns dateString in the format YYYY-MM-DD
   * @param {string} dateString the date to convert
   */
  function getYMD(dateString) {
    return isDMY(dateString) ? dateString.split('.').reverse().join('-') : formatDate(dateString, 'yyyy-MM-dd');
  }

  /**
   * returns dateString in from format yyyy-mm-ddThh:mm:ss to yyyy\mm\dd hh:mm:ss
   * @param {string} dateString the date to convert
   */
  function getDateTimeForIcs(dateString) {
    return dateString.replace(new RegExp('-', 'g'), '/').replace(new RegExp('T', 'g'), ' ');
  }

  /**
   * returns true if date > now
   * @param {string} dateString YYYY-MM-DD
   */

  function dateGreaterNow(date) {
    return (0, _parseISO.default)(date) > Date.now() ? true : false;
  }
});
;define("kursausschreibung/framework/form-helpers", ["exports", "kursausschreibung/framework/translate", "kursausschreibung/framework/api"], function (_exports, _translate, _api) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.formFieldError = formFieldError;
  _exports.helperSocialSecurityNumber = helperSocialSecurityNumber;
  _exports.removeFile = removeFile;
  _exports.vssDependency = vssDependency;
  /**
   * set custom validity of a form element
   * @param {object} element
   * @param {boolean} valid
   * @param {string} message
   */
  function formFieldError(element, valid, message = 'invalidInput') {
    if (valid) {
      element.setCustomValidity((0, _translate.getString)(message));
    } else {
      element.setCustomValidity('');
    }
  }

  /**
   * Remove a File from filelist
   * @param {string} elementId 
   */
  function removeFile(elementId) {
    document.getElementById(elementId).value = '';
  }

  /**
   * input helper
   * set delimiter "."
   * check is digit 0-9
   *
   * validation
   * check format correct nnn.nnnn.nnnn.nn
   * @param {object} element
   */
  function helperSocialSecurityNumber(that) {
    formFieldError(that, true);
    let number = that.value;

    //set delimiter "."
    if (number.length === 3) {
      that.value = number + '.';
    } else if (number.length === 8) {
      that.value = number + '.';
    } else if (number.length === 13) {
      that.value = number + '.';
    }

    //Check is digit 0-9
    let lastCharacter = number.slice(-1);
    if (number.length === 4 || number.length === 9 || number.length === 14) {
      lastCharacter = '.';
      that.value = number.substr(0, number.length - 1) + lastCharacter;
    } else if (lastCharacter.match(/[0-9]/) === null) {
      that.value = number.substr(0, number.length - 1);
    }

    //final Check format correct nnn.nnnn.nnnn.nn
    if (number.length >= 16) {
      that.value = number.substr(0, 16);
      if (that.value.match(/[0-9]{3}\.[0-9]{4}\.[0-9]{4}\.[0-9]{2}/)) {
        if ('000.0000.0000.00' !== number) {
          let numberString = number.replace(/\./g, '');
          let valid = ean13checkNumber(numberString);
          valid ? formFieldError(that, false) : formFieldError(that, true);
        }
      } else {
        formFieldError(that, true);
      }
    }
  }
  function ean13checkNumber(number) {
    if (number.length === 13) {
      let numberReverse = number.substr(0, 12);
      numberReverse = numberReverse.split('').join('');
      let sum = 0;
      for (let i = 0; i < numberReverse.length; i++) {
        let int = numberReverse.charAt(i);
        sum = int * (i & 1 === 1 ? 3 : 1) + sum;
      }
      let checkNumber = 10 - sum % 10;
      checkNumber = checkNumber === 10 ? 0 : checkNumber;
      return Number(number.slice(-1)) === checkNumber ? true : false;
    }
    return false;
  }

  /**
   * Check if vssDependency available
   * @param {string} formValue
   * @param {object} field
   */
  function vssDependency(formValue, field) {
    if (field.options?.dependencyItems?.length) {
      let hiddenClass = 'uk-hidden';
      field.options.dependencyItems.forEach(element => {
        let values = element.Values;
        let operator = element.Operator;
        let vssId = element.IdVss;
        let dependency = vssDependencyCheck(formValue, operator, values);
        invoiceDependencyCheck(vssId, dependency);
        let hidden = document.getElementById('hidden' + vssId);
        let requiredElement = document.getElementById('file' + vssId) || document.getElementById('vss' + vssId);
        if (!hidden || !requiredElement) return;
        if (dependency) {
          hidden.classList.remove(hiddenClass);
          requiredElement.required = element.required;
        } else {
          hidden.classList.add(hiddenClass);
          requiredElement.required = false;
        }
      });
    }
  }
  /***
   * Check if vssDependency true and SUBSCRIPTION_DETAIL_INVOICE_ADRESS on event. Display useCompanyAddress 
   * @param {number} vssId
   * @param {boolean} dependency
   */
  function invoiceDependencyCheck(vssId, dependency) {
    const comp = window.kursausschreibung?.component;
    const button = document.querySelector('button[name="useCompanyAddress"]');
    const fieldset = document.querySelector('.company-address-fields');
    if (!comp || !button || !fieldset || !comp.get('enableInvoiceAddress')) return;
    if (vssId === _api.SUBSCRIPTION_DETAIL_INVOICE_ADRESS && dependency) {
      comp.set('paymentEnforced', true);
      comp.set('useCompanyAddress', true);
      button.disabled = true;
      fieldset.hidden = false;
      fieldset.disabled = false;
      fieldset.querySelectorAll('input, select, textarea').forEach(el => el.required = true);
    } else {
      comp.set('paymentEnforced', false);
      comp.set('useCompanyAddress', false);
      button.disabled = false;
      fieldset.hidden = true;
      fieldset.disabled = true;
      const fields = comp.get('companyFields') || [];
      // für jedes Input/Select/Textarea
      fieldset.querySelectorAll('input, select, textarea').forEach(el => {
        // finde das zugehörige Field-Objekt nach dem Name-Attribut
        const def = fields.find(f => String(f.id) === el.name);
        // setze required wie in der config
        el.required = def?.options.required === true;
      });
    }
  }

  /**
    * Check if vssDependency true
   * @param {string} formValue
   * @param {number} operator
   * @param {Array} values
   */
  function vssDependencyCheck(formValue, operator, values) {
    if (typeof formValue === 'boolean') {
      formValue = formValue ? '1' : '0';
    }
    if (operator === 349) {
      //contains
      return values.includes(formValue);
    } else if (operator === 350) {
      //contains Not
      return !values.includes(formValue);
    } else if (operator === 351) {
      //empty
      return formValue === null || formValue === undefined || formValue.length === 0 ? true : false;
    } else if (operator === 352) {
      //notEmpty
      return formValue.length > 0 ? true : false; //formValue !== undefined ||
    }
  }
});
;define("kursausschreibung/framework/gui-helpers", ["exports", "kursausschreibung/framework/storage"], function (_exports, _storage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.displayAsGrid = displayAsGrid;
  _exports.sortAs = sortAs;
  /**
   * sort value set localStroage sortAs and reload
   * @param {string} value 
   */
  function sortAs(value) {
    (0, _storage.setSortAs)(value);
    window.location.reload();
  }

  /**
   * display eventlist as grid or list
   * true > grid
   * false > list
   * @param {boolean} bool 
   */
  function displayAsGrid(bool) {
    var list = document.getElementById('list-cards');
    var btGrid = document.getElementById('bt-grid');
    var btList = document.getElementById('bt-list');
    var bool = String(bool).toLowerCase() === 'true';
    if (typeof bool === "boolean") {
      (0, _storage.setListViewGrid)(bool);
    } else {
      (0, _storage.setListViewGrid)(false);
    }
    if (bool === true) {
      list.classList.add('uk-grid');
      list.classList.add('uk-grid-match');
      list.classList.add('uk-grid-stack');
      list.classList.add('uk-child-width-1-2@m');
      list.classList.add('uk-child-width-1-3@l');
      list.classList.remove('uk-list-divider');
      list.classList.remove('uk-list');
      btGrid.classList.add('active-tab');
      btList.classList.remove('active-tab');
    } else {
      list.classList.add('uk-list-divider');
      list.classList.add('uk-list');
      list.classList.remove('uk-grid');
      list.classList.remove('uk-grid-match');
      list.classList.remove('uk-grid-stack');
      list.classList.remove('uk-child-width-1-2@m');
      list.classList.remove('uk-child-width-1-3@l');
      btList.classList.add('active-tab');
      btGrid.classList.remove('active-tab');
    }
    for (const child of list.children) {
      if (bool === true) {
        child.classList.add('uk-card');
        child.classList.add('uk-card-body');
        child.classList.add('card-list');
      } else {
        child.classList.remove('uk-card');
        child.classList.remove('uk-card-body');
        child.classList.remove('card-list');
      }
    }
  }
});
;define("kursausschreibung/framework/ics-file", ["exports", "kursausschreibung/framework/date-helpers"], function (_exports, _dateHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getIcsFileFromEvent = getIcsFileFromEvent;
  /* eslint-disable */
  function getIcsFileFromEvent(event) {
    /*! ics.js Wed Aug 20 2014 17:23:02 
    * https://github.com/nwcell/ics.js
    * LIB property TRANSP to TRANSP:OPAQUE
    * ics.js lib on mobil Browser does not work #40
    * Android ignoriert die locale Zeitzone (ohne Z am ende) in einer ics Datei #44
    */
    var saveAs = saveAs || function (e) {
      "use strict";

      if (typeof e === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
        return;
      }
      var t = e.document,
        n = function () {
          return e.URL || e.webkitURL || e;
        },
        r = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
        o = ("download" in r),
        a = function (e) {
          var t = new MouseEvent("click");
          e.dispatchEvent(t);
        },
        i = /constructor/i.test(e.HTMLElement) || e.safari,
        f = /CriOS\/[\d]+/.test(navigator.userAgent),
        u = function (t) {
          (e.setImmediate || e.setTimeout)(function () {
            throw t;
          }, 0);
        },
        s = "application/octet-stream",
        d = 1e3 * 40,
        c = function (e) {
          var t = function () {
            if (typeof e === "string") {
              n().revokeObjectURL(e);
            } else {
              e.remove();
            }
          };
          setTimeout(t, d);
        },
        l = function (e, t, n) {
          t = [].concat(t);
          var r = t.length;
          while (r--) {
            var o = e["on" + t[r]];
            if (typeof o === "function") {
              try {
                o.call(e, n || e);
              } catch (a) {
                u(a);
              }
            }
          }
        },
        p = function (e) {
          if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)) {
            return new Blob([String.fromCharCode(65279), e], {
              type: e.type
            });
          }
          return e;
        },
        v = function (t, u, d) {
          if (!d) {
            t = p(t);
          }
          var v = this,
            w = t.type,
            m = w === s,
            y,
            h = function () {
              l(v, "writestart progress write writeend".split(" "));
            },
            S = function () {
              if ((f || m && i) && e.FileReader) {
                var r = new FileReader();
                r.onloadend = function () {
                  var t = f ? r.result : r.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                  var n = e.open(t, "_blank");
                  if (!n) e.location.href = t;
                  t = undefined;
                  v.readyState = v.DONE;
                  h();
                };
                r.readAsDataURL(t);
                v.readyState = v.INIT;
                return;
              }
              if (!y) {
                y = n().createObjectURL(t);
              }
              if (m) {
                e.location.href = y;
              } else {
                var o = e.open(y, "_blank");
                if (!o) {
                  e.location.href = y;
                }
              }
              v.readyState = v.DONE;
              h();
              c(y);
            };
          v.readyState = v.INIT;
          if (o) {
            y = n().createObjectURL(t);
            setTimeout(function () {
              r.href = y;
              r.download = u;
              a(r);
              h();
              c(y);
              v.readyState = v.DONE;
            });
            return;
          }
          S();
        },
        w = v.prototype,
        m = function (e, t, n) {
          return new v(e, t || e.name || "download", n);
        };
      if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
        return function (e, t, n) {
          t = t || e.name || "download";
          if (!n) {
            e = p(e);
          }
          return navigator.msSaveOrOpenBlob(e, t);
        };
      }
      w.abort = function () {};
      w.readyState = w.INIT = 0;
      w.WRITING = 1;
      w.DONE = 2;
      w.error = w.onwritestart = w.onprogress = w.onwrite = w.onabort = w.onerror = w.onwriteend = null;
      return m;
    }(typeof self !== "undefined" && self || typeof window !== "undefined" && window || this.content);
    if (typeof module !== "undefined" && module.exports) {
      module.exports.saveAs = saveAs;
    } else if (typeof define !== "undefined" && define !== null && define.amd !== null) {
      define("FileSaver.js", function () {
        return saveAs;
      });
    }
    var ics = function (e, t) {
      "use strict";

      {
        if (!(navigator.userAgent.indexOf("MSIE") > -1 && -1 == navigator.userAgent.indexOf("MSIE 10"))) {
          void 0 === e && (e = "default"), void 0 === t && (t = "Calendar");
          var r = -1 !== navigator.appVersion.indexOf("Win") ? "\r\n" : "\n",
            n = [],
            i = ["BEGIN:VCALENDAR", "PRODID:" + t, "VERSION:2.0", "BEGIN:VTIMEZONE", "TZID:Europe/Zurich", "BEGIN:DAYLIGHT", "TZOFFSETFROM:+0100", "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU", "DTSTART:19810329T020000", "TZNAME:MESZ", "TZOFFSETTO:+0200", "END:DAYLIGHT", "BEGIN:STANDARD", "TZOFFSETFROM:+0200", "RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU", "DTSTART:19961027T030000", "TZNAME:MEZ", "TZOFFSETTO:+0100", "END:STANDARD", "END:VTIMEZONE"].join(r),
            o = r + "END:VCALENDAR",
            a = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
          return {
            events: function () {
              return n;
            },
            calendar: function () {
              return i + r + n.join(r) + o;
            },
            addEvent: function (t, i, o, l, u, s) {
              if (void 0 === t || void 0 === i || void 0 === o || void 0 === l || void 0 === u) return !1;
              if (s && !s.rrule) {
                if ("YEARLY" !== s.freq && "MONTHLY" !== s.freq && "WEEKLY" !== s.freq && "DAILY" !== s.freq) throw "Recurrence rrule frequency must be provided and be one of the following: 'YEARLY', 'MONTHLY', 'WEEKLY', or 'DAILY'";
                if (s.until && isNaN(Date.parse(s.until))) throw "Recurrence rrule 'until' must be a valid date string";
                if (s.interval && isNaN(parseInt(s.interval))) throw "Recurrence rrule 'interval' must be an integer";
                if (s.count && isNaN(parseInt(s.count))) throw "Recurrence rrule 'count' must be an integer";
                if (void 0 !== s.byday) {
                  if ("[object Array]" !== Object.prototype.toString.call(s.byday)) throw "Recurrence rrule 'byday' must be an array";
                  if (s.byday.length > 7) throw "Recurrence rrule 'byday' array must not be longer than the 7 days in a week";
                  s.byday = s.byday.filter(function (e, t) {
                    return s.byday.indexOf(e) == t;
                  });
                  for (var c in s.byday) if (a.indexOf(s.byday[c]) < 0) throw "Recurrence rrule 'byday' values must include only the following: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'";
                }
              }
              var g = new Date(l),
                d = new Date(u),
                f = new Date(),
                S = ("0000" + g.getFullYear().toString()).slice(-4),
                E = ("00" + (g.getMonth() + 1).toString()).slice(-2),
                v = ("00" + g.getDate().toString()).slice(-2),
                y = ("00" + g.getHours().toString()).slice(-2),
                A = ("00" + g.getMinutes().toString()).slice(-2),
                T = ("00" + g.getSeconds().toString()).slice(-2),
                b = ("0000" + d.getFullYear().toString()).slice(-4),
                D = ("00" + (d.getMonth() + 1).toString()).slice(-2),
                N = ("00" + d.getDate().toString()).slice(-2),
                h = ("00" + d.getHours().toString()).slice(-2),
                I = ("00" + d.getMinutes().toString()).slice(-2),
                R = ("00" + d.getMinutes().toString()).slice(-2),
                M = ("0000" + f.getFullYear().toString()).slice(-4),
                w = ("00" + (f.getMonth() + 1).toString()).slice(-2),
                L = ("00" + f.getDate().toString()).slice(-2),
                O = ("00" + f.getHours().toString()).slice(-2),
                p = ("00" + f.getMinutes().toString()).slice(-2),
                Y = ("00" + f.getMinutes().toString()).slice(-2),
                U = "",
                V = "";
              y + A + T + h + I + R != 0 && (U = "T" + y + A + T, V = "T" + h + I + R);
              var B,
                C = S + E + v + U,
                j = b + D + N + V,
                m = M + w + L + ("T" + O + p + Y);
              if (s) if (s.rrule) B = s.rrule;else {
                if (B = "rrule:FREQ=" + s.freq, s.until) {
                  var x = new Date(Date.parse(s.until)).toISOString();
                  B += ";UNTIL=" + x.substring(0, x.length - 13).replace(/[-]/g, "") + "000000Z";
                }
                s.interval && (B += ";INTERVAL=" + s.interval), s.count && (B += ";COUNT=" + s.count), s.byday && s.byday.length > 0 && (B += ";BYDAY=" + s.byday.join(","));
              }
              new Date().toISOString();
              var H = ["BEGIN:VEVENT", "UID:" + n.length + "@" + e, "CLASS:PUBLIC", "DESCRIPTION:" + i, "DTSTAMP:" + m, "DTSTART;TZID=Europe/Zurich:" + C, "DTEND;TZID=Europe/Zurich:" + j, "LOCATION:" + o, "SUMMARY:" + t, "TRANSP:OPAQUE", "END:VEVENT"];
              return B && H.splice(4, 0, B), H = H.join(r), n.push(H), H;
            },
            download: function (e, t) {
              if (n.length < 1) return !1;
              t = void 0 !== t ? t : ".ics", e = void 0 !== e ? e : "calendar";
              var a,
                l = i + r + n.join(r) + o;
              if (-1 === navigator.userAgent.indexOf("MSIE 10")) a = new Blob([l], {
                type: "text/calendar"
              });else {
                var u = new BlobBuilder();
                u.append(l), a = u.getBlob("text/x-vCalendar;charset=" + document.characterSet);
              }
              return saveAs(a, e + t), l;
            },
            build: function () {
              return !(n.length < 1) && i + r + n.join(r) + o;
            }
          };
        }
        console.log("Unsupported Browser");
      }
    };
    /*https://github.com/nwcell/ics.js */

    // You can use this for easy debugging
    /*
    console.log(event);
    var makelogs = function(obj) {
        console.log('Events Array');
        console.log('=================');
        console.log(obj.events());
        console.log('Calendar With Header');
        console.log('=================');
        console.log(obj.calendar());
      }
      */
    let eventlocation = event.ResourceDesignation + ', ' + event.BuildingName + ', ' + event.BuildingAddress + ', ' + event.BuildingZip + ' ' + event.BuildingLocation;
    if (event.ResourceDesignation === undefined) {
      eventlocation = !event.Location ? '' : event.Location;
    }
    let cal = ics();
    event.lessons.forEach(lesson => {
      let leadership = !event.Leadership ? '' : ' (' + event.Leadership + ')';
      let lessonDesignation = !lesson.Designation ? '' : lesson.Designation;
      cal.addEvent(event.Designation + leadership.replace(/(\r\n|\n|\r)/gm, ""), lessonDesignation, eventlocation.replace(/(\r\n|\n|\r)/gm, ""), (0, _dateHelpers.getDateTimeForIcs)(lesson.DateTimeFrom), (0, _dateHelpers.getDateTimeForIcs)(lesson.DateTimeTo));
    });

    //makelogs(cal);
    cal.download(event.Number);
  }
});
;define("kursausschreibung/framework/login-helpers", ["exports", "rsvp", "kursausschreibung/framework/storage", "kursausschreibung/framework/app-config", "kursausschreibung/framework/url-helpers", "kursausschreibung/framework/translate", "jquery"], function (_exports, _rsvp, _storage, _appConfig, _urlHelpers, _translate, _jquery) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.autoCheckForLogin = autoCheckForLogin;
  _exports.checkToken = checkToken;
  /* loosely based on the CLX framework */

  /**
   * return true if there is a valid token in the localStorage
   */
  function isLoggedIn() {
    let accessToken = (0, _storage.getAccessToken)();
    let tokenExpire = (0, _storage.getTokenExpire)();
    if (accessToken === null || tokenExpire !== null && Date.now() >= tokenExpire) {
      return false;
    }
    if (_appConfig.default.useAutoLogin !== true) {
      // we can assume that instance and culture are correct
      return true;
    }
    let payload = parseJWT(accessToken);

    // only return true if instanceId and culture are correct
    return _appConfig.default.instanceId === payload.instance_id && payload.culture_info === (0, _translate.getLanguage)();
  }

  /**
   * parse accessToken and return the JWT payload
   * @param {string} accessToken the accessToken
   */
  function parseJWT(accessToken) {
    return JSON.parse(atob(accessToken.split('.')[1]));
  }

  // save the OAuth token if there is one in the URL
  function checkToken() {
    let accessToken = (0, _urlHelpers.getParameterByName)('access_token');
    if (accessToken !== null) {
      // store token, refresh token and expiration
      let refreshToken = (0, _urlHelpers.getParameterByName)('refresh_token');
      let tokenExpire = parseJWT(accessToken).exp * 1000;
      (0, _storage.setAccessToken)(accessToken);
      (0, _storage.setRefreshToken)(refreshToken);
      (0, _storage.setTokenExpire)(tokenExpire);

      // navigate back to initial url
      history.replaceState(null, null, (0, _urlHelpers.getParameterByName)('redirectUrl'));
    }
  }

  /**
   * return resolved promise if there is a valid token
   * get a new accesToken otherwise
   */
  function autoCheckForLogin() {
    if (isLoggedIn()) {
      return _rsvp.Promise.resolve();
    }
    if (_appConfig.default.useAutoLogin === true) {
      // get a new token from the OAuth server
      let params = _jquery.default.param({
        clientId: _appConfig.default.clientId,
        redirectUrl: location.href,
        culture_info: (0, _translate.getLanguage)(),
        application_scope: _appConfig.default.applicationScope
      });
      let url = `${_appConfig.default.oauthUrl}/Authorization/${_appConfig.default.instanceId}/Token?${params}`;
      location.replace(url);
    } else {
      // let the application which embeds this module get a new token
      location.reload();
    }
    return new _rsvp.Promise(() => {}); // never resolve so no error-message gets shown
  }
});
;define("kursausschreibung/framework/scroll-helpers", ["exports", "kursausschreibung/framework/settings"], function (_exports, _settings) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.scrollToTimeout = scrollToTimeout;
  _exports.setOffsetStickyHeader = setOffsetStickyHeader;
  /**
   * scroll to target after timeout
   * @param {string} elementId id of html element
   */
  function scrollToTimeout(elementId) {
    setTimeout(function () {
      scrollToTargetAdjusted(elementId);
    }, 500);
  }

  /**
   * set offset from settings.headerOffset to uk-sticky attribut
   * @param {string} elementId id of html element
   */
  function setOffsetStickyHeader(elementId) {
    document.getElementById(elementId).setAttribute('uk-sticky', 'offset: ' + _settings.default.headerOffset + '; bottom: #top');
  }

  /**
   * scroll to position of a element consider settings.headerOffset
   * @param {string} elementId id of html element
   */
  function scrollToTargetAdjusted(elementId) {
    var element = document.getElementById(elementId);
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = window.scrollY + elementPosition - _settings.default.headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
});
;define("kursausschreibung/framework/seo", ["exports", "kursausschreibung/framework/url-helpers"], function (_exports, _urlHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setJsonLd = setJsonLd;
  /**
   * create a json-ld element in head of document with schema.org course.
   * @param {object} allevents from getAllEvents()
   */
  function setJsonLd(allEvents) {
    let ld = [];
    let areas = Object.values(allEvents.areas);
    areas.forEach(area => {
      area.events.forEach(event => {
        let course = {};
        course['@context'] = 'https://schema.org/';
        course['@type'] = 'Course';
        course['name'] = event.Designation;
        course['description'] = getDescription(event);
        course['courseCode'] = event.Number;
        course['offers'] = [{
          type: 'Offer',
          category: event.Price > 0 ? 'Paid' : 'Free',
          price: event.Price
        }];
        course['hasCourseInstance'] = [{
          type: 'CourseInstance',
          courseMode: 'Blended',
          courseWorkload: millisecondsToISO8601Duration(Math.abs(event.From - event.To))
        }];
        course['provider'] = {
          type: 'Organization',
          name: event.Host
        };
        course['url'] = (0, _urlHelpers.getRootModulUrl)() + '#/uid/' + event.Id;
        ld.push(course);
      });
    });
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(ld);
    document.getElementsByTagName('head')[0].appendChild(script);
  }
  function getDescription(event) {
    let description = event.EventCategory + ';';
    event.texts.forEach(text => {
      description = description + text.label + ':' + text.memo + ';';
    });
    return description;
  }

  /**
   * https://github.com/wking/milliseconds-to-iso-8601-duration/tree/master
   * @param {*} milliseconds 
   * @returns 
   */
  function millisecondsToISO8601Duration(milliseconds) {
    if (milliseconds == 0) {
      return 'P0D';
    }
    var offset = Math.floor(milliseconds);
    var days = 0;
    if (offset < 0) {
      days = Math.floor(offset % 86400000);
      offset -= 86400000 * days;
    }
    var milliseconds = offset % 1000;
    offset = Math.floor(offset / 1000);
    var seconds = offset % 60;
    offset = Math.floor(offset / 60);
    var minutes = offset % 60;
    offset = Math.floor(offset / 60);
    var hours = offset % 24;
    days += Math.floor(offset / 24);
    var parts = ['P'];
    if (days) {
      parts.push(days + 'D');
    }
    if (hours || minutes || seconds || milliseconds) {
      parts.push('T');
      if (hours) {
        parts.push(hours + 'H');
      }
      if (minutes) {
        parts.push(minutes + 'M');
      }
      if (seconds || milliseconds) {
        parts.push(seconds);
        if (milliseconds) {
          milliseconds = milliseconds.toString();
          while (milliseconds.length < 3) {
            milliseconds = '0' + milliseconds;
          }
          parts.push('.' + milliseconds);
        }
        parts.push('S');
      }
    }
    return parts.join('');
  }
});
;define("kursausschreibung/framework/settings", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = window.kursausschreibung.settings;
});
;define("kursausschreibung/framework/status", ["exports", "kursausschreibung/framework/date-helpers", "kursausschreibung/framework/settings"], function (_exports, _dateHelpers, _settings) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.isYellow = _exports.isRed = _exports.isGreen = _exports.isChartreuse = void 0;
  /**
   * return the callback specified in the settings or the
   * default implementation
   * @param {function?} settingsValue a custom implementation
   * @param {function} defaultImplementation the default implementation
   */
  function createStatusCallback(settingsValue, defaultImplementation) {
    if (typeof settingsValue === 'function') return settingsValue;
    return defaultImplementation;
  }

  // see "Event Status Definition" in documentation
  let isGreen = _exports.isGreen = createStatusCallback(_settings.default.lampIsGreen, function (event) {
    return event.AllowSubscriptionInternetByStatus && event.TypeOfSubscription === 4 && (0, _dateHelpers.isInSubscriptionRange)(event) && (event.FreeSeats > 0 && event.MaxParticipants - event.FreeSeats < event.MinParticipants || event.EventTypeId === 1);
  });
  let isChartreuse = _exports.isChartreuse = createStatusCallback(_settings.default.lampIsChartreuse, function (event) {
    return event.AllowSubscriptionInternetByStatus && event.TypeOfSubscription === 4 && (0, _dateHelpers.isInSubscriptionRange)(event) && event.FreeSeats > 0 && event.MaxParticipants - event.FreeSeats >= event.MinParticipants;
  });
  let isYellow = _exports.isYellow = createStatusCallback(_settings.default.lampIsYellow, function (event) {
    return event.AllowSubscriptionInternetByStatus && event.TypeOfSubscription === 4 && !(0, _dateHelpers.isInSubscriptionRange)(event);
  });
  let isRed = _exports.isRed = createStatusCallback(_settings.default.lampIsRed, function (event) {
    return event.AllowSubscriptionInternetByStatus && event.TypeOfSubscription === 4 && event.FreeSeats === 0;
  });
});
;define("kursausschreibung/framework/storage", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getCulture = _exports.getAccessToken = void 0;
  _exports.getDataToSubmit = getDataToSubmit;
  _exports.setCulture = _exports.setAccessToken = _exports.getTokenExpire = _exports.getSortAs = _exports.getRefreshToken = _exports.getListViewGrid = void 0;
  _exports.setDataToSubmit = setDataToSubmit;
  _exports.setTokenExpire = _exports.setSortAs = _exports.setRefreshToken = _exports.setListViewGrid = void 0;
  /* loosely based on the CLX framework */

  /**
   * stores an object serialized as JSON
   * @param {string} key key used to store the object
   * @param {object} value the value to store
   */
  function setItem(key, value) {
    if (key === 'CLX.LoginToken') {
      sessionStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  /**
   * reads and deserializes an object from the localStorage
   * @param {string} key key used to store the object
   */
  function getItem(key) {
    let item = undefined;
    if (key === 'CLX.LoginToken') {
      item = sessionStorage.getItem(key);
    } else {
      item = localStorage.getItem(key);
    }
    if (item && !item.includes('"')) {
      item = `"${item}"`;
    }
    return item !== undefined ? JSON.parse(item) : null;
  }

  // export getters and setters for all the values
  let [[getCulture, setCulture], [getAccessToken, setAccessToken], [getRefreshToken, setRefreshToken], [getTokenExpire, setTokenExpire], [getListViewGrid, setListViewGrid], [getSortAs, setSortAs]] = ['uiCulture', 'CLX.LoginToken', 'CLX.RefreshToken', 'CLX.TokenExpire', 'listViewGrid', 'sortAs', 'kursausschreibung.dataToSubmit'].map(key => [getItem.bind(null, key), setItem.bind(null, key)]);
  _exports.setSortAs = setSortAs;
  _exports.getSortAs = getSortAs;
  _exports.setListViewGrid = setListViewGrid;
  _exports.getListViewGrid = getListViewGrid;
  _exports.setTokenExpire = setTokenExpire;
  _exports.getTokenExpire = getTokenExpire;
  _exports.setRefreshToken = setRefreshToken;
  _exports.getRefreshToken = getRefreshToken;
  _exports.setAccessToken = setAccessToken;
  _exports.getAccessToken = getAccessToken;
  _exports.setCulture = setCulture;
  _exports.getCulture = getCulture;
  function getDataToSubmit() {
    return window.kursausschreibung.dataToSubmit;
  }
  function setDataToSubmit(dataToSubmit) {
    window.kursausschreibung.dataToSubmit = dataToSubmit;
  }
});
;define("kursausschreibung/framework/store", ["exports", "@ember/array", "@ember/string", "@ember/object", "jquery", "kursausschreibung/framework/api", "kursausschreibung/framework/status", "@ember/object/proxy", "kursausschreibung/framework/date-helpers", "rsvp", "kursausschreibung/framework/settings", "kursausschreibung/framework/translate", "kursausschreibung/framework/storage", "date-fns/format"], function (_exports, _array, _string, _object, _jquery, _api, _status, _proxy, _dateHelpers, _rsvp, _settings, _translate, _storage, _format) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getAllEvents = getAllEvents;
  _exports.getEventById = getEventById;
  _exports.init = init;
  _exports.isInitialized = isInitialized;
  let initialized = false;

  /**
   * this returns true if init completed successfully
   */
  function isInitialized() {
    return initialized;
  }

  // group events by areaOfEducation, EventCategory and Id
  let eventsByArea = {
    areas: {},
    areaKeys: [],
    moreOneAreaKeys: true
  };
  let eventsById = [];

  /**
   * get all events grouped by areaOfEducation
   */
  function getAllEvents() {
    return eventsByArea;
  }

  /**
   * get an event by id
   * @param {number} id the id of the event
   */
  function getEventById(id) {
    if (eventsById.hasOwnProperty(id)) {
      return eventsById[id];
    }
    return undefined;
  }

  /**
   * this function initializes the store by:
   *  + fetching and storing events, lessons locations and texts
   *  + filtering and sorting events
   *  + adding properties to events
   */
  function init() {
    let language = (0, _translate.getLanguage)() === 'fr-CH' ? 'en-US' : 'de-CH';

    // fetch all events
    return (0, _rsvp.all)([(0, _api.getEvents)(), (0, _api.getLessons)(), (0, _api.getEventLocations)(), (0, _api.getEventTexts)(language), (0, _api.getEventCodes)()]).then(function ([events, lessons, eventLocations, eventTexts, eventCodes]) {
      // filter events
      events = filterEvents(events, language, eventCodes);

      // sort events
      var sortAs = (0, _storage.getSortAs)();
      if (sortAs === null) {
        if (_settings.default.sortEventList !== null) {
          events = (0, _array.A)(events).sortBy(_settings.default.sortEventList);
        }
      } else {
        events = (0, _array.A)(events).sortBy(sortAs);
      }

      // prepare events
      events.forEach(prepareEvent);

      // add lessons to events
      addLessonsToEvents(lessons);

      // add eventLocations to events
      addLocationsToEvents(eventLocations);

      // add texts to events
      addTextsToEvents(eventTexts, language);

      // add codes to events (it's important to filter)
      addCodesToEvents(eventCodes);

      // sort areaKeys
      eventsByArea.areaKeys = Object.keys(eventsByArea.areas).sort();
      eventsByArea.moreOneAreaKeys = eventsByArea.areaKeys.length === 1 && _settings.default.eventCategoryDropdown === false ? false : true;

      // sort categoryKeys
      eventsByArea.areaKeys.forEach(area => eventsByArea.areas[area].categoryKeys = Object.keys(eventsByArea.areas[area].categories).sort());
      initialized = true;
    });
  }

  /**
   * add texts to events
   * @param {object[]} eventTexts eventTexts returned by the API
   * @param {string} language the active language
   */
  function addTextsToEvents(eventTexts, language) {
    eventTexts.forEach(function (textItem) {
      if (!eventsById.hasOwnProperty(textItem.EventId)) {
        return;
      }

      // only show texts with the correct cultureInfo
      if (textItem.CultureInfo !== language) {
        return;
      }
      let text = eventsById[textItem.EventId].texts[textItem.Number];
      if (text === undefined) {
        text = eventsById[textItem.EventId].texts[textItem.Number] = {
          label: null,
          memo: null,
          id: textItem.Number
        };
      }
      text[textItem.Type.toLowerCase()] = textItem.Value;
    });

    // if the 13th event text is an url it is used to subscribe to the event
    // see: https://github.com/bkd-mba-fbi/kursausschreibung/issues/67
    eventsById.forEach(event => {
      if (event.texts.length >= 14 && /^https?:\/\/[^ ]+$/.test(event.texts[13].memo)) {
        event.externalSubscriptionURL = event.texts[13].memo;
        event.texts[13].memo = null;
      } else {
        event.externalSubscriptionURL = null;
      }
    });

    // remove texts with empty label or memo
    eventsById.forEach(event => event.texts = event.texts.filter(text => text.label !== null && text.memo !== null));
  }

  /**
   * add locations to events
   * @param {object[]} eventLocations eventLocations returned by the API
   */
  function addLocationsToEvents(eventLocations) {
    eventLocations.forEach(function (location) {
      let eventId = location.EventId;
      if (!eventsById.hasOwnProperty(eventId)) {
        return;
      }

      // don't overwrite the event-Id
      delete location.Id;
      eventsById[eventId] = _jquery.default.extend(eventsById[eventId], location);
    });
  }

  /**
   * add lessons to events
   * @param {object[]} lessons lessons returned by the API
   */
  function addLessonsToEvents(lessons) {
    lessons.forEach(function (lesson) {
      if (!eventsById.hasOwnProperty(lesson.EventId)) {
        return;
      }

      // make DateFrom and DateTo human-readable
      lesson.DateFrom = (0, _dateHelpers.formatDate)(lesson.DateTimeFrom, 'LLL');
      lesson.TimeTo = (0, _dateHelpers.formatDate)(lesson.DateTimeTo, 'LT');
      eventsById[lesson.EventId].lessons.push(lesson);
      if (eventsById[lesson.EventId].lessons.length > _settings.default.howManyLessonsShow) {
        eventsById[lesson.EventId].lessonsCollaps = true;
      } else {
        eventsById[lesson.EventId].lessonsCollaps = false;
      }
    });
  }

  /**
   * add Codes to events
   * @param {object[]} eventCodes eventCodes returned by the API
   */
  function addCodesToEvents(eventCodes) {
    // add all codes to event
    let prefix = 'FilterTag';
    let filterCodes = [];
    let codeIds = [];
    eventCodes.forEach(function (code) {
      if (codeIds.find(ids => ids === code.CodeId) === undefined) {
        codeIds.push(code.CodeId);
        let codeName = (0, _translate.getString)(prefix + code.CodeId).indexOf('<span style="color:red;">Key not found:') >= 0 ? code.Code : (0, _translate.getString)(prefix + code.CodeId);
        filterCodes.push({
          id: code.CodeId,
          Code: codeName
        });
      }
    });
    eventCodes.forEach(function (code) {
      if (!eventsById.hasOwnProperty(code.EventId)) {
        return;
      }
      // add codes-array
      if (eventsById[code.EventId].codes === undefined) {
        eventsById[code.EventId].codes = [];
      }
      eventsById[code.EventId].codes.push(code);

      // adds filter tag
      let filter = eventsById[code.EventId].filter;
      eventsById[code.EventId].filter = filter === undefined ? 'tag' + code.CodeId : filter + ' tag' + code.CodeId;
      eventsById[code.EventId].allfilterCodes = filterCodes;
    });
  }

  /**
   * filter out events based on settings
   * @param {object[]} events events returned by the API
   * @param {string} language the active language
   */
  function filterEvents(events, language, eventCodes) {
    // filter out events with undesired parameters

    // backwards compatibility fallback for single hostId filter
    if (_settings.default.hostIds instanceof Array) {
      events = events.filter(event => _settings.default.hostIds.indexOf(event.HostId) !== -1);
    }
    // or use initialListFilters array
    else if (_settings.default.initialListFilters instanceof Object) {
      if (_settings.default.initialListFilters.hostIds instanceof Array) {
        events = events.filter(event => _settings.default.initialListFilters.hostIds.indexOf(event.HostId) !== -1);
      }
      if (_settings.default.initialListFilters.eventCategoryIds instanceof Array) {
        events = events.filter(event => _settings.default.initialListFilters.eventCategoryIds.indexOf(event.EventCategoryId) !== -1);
      }
      if (_settings.default.initialListFilters.eventLevelIds instanceof Array) {
        events = events.filter(event => _settings.default.initialListFilters.eventLevelIds.indexOf(event.EventLevelId) !== -1);
      }
      if (_settings.default.initialListFilters.eventTypeIds instanceof Array) {
        events = events.filter(event => _settings.default.initialListFilters.eventTypeIds.indexOf(event.EventTypeId) !== -1);
      }
      if (_settings.default.initialListFilters.statusIds instanceof Array) {
        events = events.filter(event => _settings.default.initialListFilters.statusIds.indexOf(event.StatusId) !== -1);
      }
      if (_settings.default.initialListFilters.codeIds instanceof Array) {
        eventCodes = eventCodes.filter(code => _settings.default.initialListFilters.codeIds.indexOf(code.CodeId) !== -1);
        let codes = [];
        eventCodes.forEach(eventcode => {
          codes.push(eventcode.EventId);
        });
        events = events.filter(event => codes.indexOf(event.Id) !== -1);
      }
    }

    // filter out events with non-matching LanguageOfInstruction
    if (_settings.default.languageOfInstructionFilter) {
      events = events.filter(event => event.LanguageOfInstruction === 'Bilingue' || event.LanguageOfInstruction === "1" && language === 'de-CH' || event.LanguageOfInstruction === 'Deutsch' && language === 'de-CH' || event.LanguageOfInstruction === "2" && language === 'en-US' || event.LanguageOfInstruction === 'Französisch' && language === 'en-US');
    }
    if (_settings.default.showStartedEvents) {
      // Filter out events which have not ended yet
      events = events.filter(event => !(0, _dateHelpers.eventEnded)(event));
    } else {
      // Default behaviour, filter out events which have started
      events = events.filter(event => (0, _dateHelpers.eventStarted)(event));
    }
    return events;
  }

  /**
   * this function adds properties and the displayObject to every event
   * transforms every event into an ember-object
   * and sorts events by id, area and category
   * @param {object} event event returned by the API
   */
  function prepareEvent(event) {
    // add properties to the events
    addPropertiesToEvent(event);

    // set LanguageOfInstruction, if int to string translate value
    setLanguageEventFromIntToString(event);

    // create proxy for human-readable values
    addDisplayData(event);

    //settings subscriptionWithLoginURL
    event.subscriptionWithLoginURL = _settings.default.subscriptionWithLoginURL === null ? null : encodeURI(_settings.default.subscriptionWithLoginURL + '/' + event.EventCategory + '/' + event.Id + '/subscribe');

    //event subtitle when > inside string
    let eventSubtitle = event.Designation.split(_settings.default.eventSubtitle);
    event.Designation = eventSubtitle.length > 1 ? eventSubtitle[0] : event.Designation;
    event.subtitle = eventSubtitle.length > 1 ? eventSubtitle[1] : null;

    // create an ember-object of the event
    event = createEmberObject(event);

    // put event into associative arrays
    putIntoAssocArrays(event);
  }

  /**
   * put an event into associative arrays for the getEventById
   * and getAllEvents functions
   * @param {object} event event returned by the API
   */
  function putIntoAssocArrays(event) {
    // id
    eventsById[event.Id] = event;

    // area
    let areaName = event.AreaOfEducation;
    let areaKey = event.areaKey = (0, _string.underscore)(areaName);
    if (!eventsByArea.areas.hasOwnProperty(areaKey)) {
      eventsByArea.areas[areaKey] = {
        name: areaName,
        key: areaKey,
        events: [],
        categories: {},
        categoryKeys: []
      };
    }
    eventsByArea.areas[areaKey].events.push(event);

    // category (in area)
    let categoryName = event.EventCategory;
    let categoryKey = event.categoryKey = (0, _string.underscore)(categoryName);
    categoryKey = event.categoryKey = categoryKey.replaceAll('.', '_');
    if (!eventsByArea.areas[areaKey].categories.hasOwnProperty(categoryKey)) {
      eventsByArea.areas[areaKey].categories[categoryKey] = {
        name: categoryName,
        key: categoryKey,
        events: []
      };
    }
    eventsByArea.areas[areaKey].categories[categoryKey].events.push(event);
  }

  /**
   * transforms an event into an ember-object with the computed
   * properties status and and canDoSubscription and an update method
   * @param {object} event event returned by the API
   */
  function createEmberObject(event) {
    return _object.default.extend({
      status: (0, _object.computed)('FreeSeats', function () {
        if ((0, _status.isGreen)(this, _dateHelpers.isInSubscriptionRange)) {
          return 'green';
        }
        if ((0, _status.isChartreuse)(this, _dateHelpers.isInSubscriptionRange)) {
          return 'chartreuse';
        }
        if ((0, _status.isYellow)(this, _dateHelpers.isInSubscriptionRange)) {
          return 'yellow';
        }
        if ((0, _status.isRed)(this, _dateHelpers.isInSubscriptionRange)) {
          return 'red';
        }
        return 'orange';
      }),
      canDoSubscription: (0, _object.computed)('status', function () {
        let status = this.get('status');
        return typeof _settings.default.canDoSubscription === 'object' && _settings.default.canDoSubscription[status] === true;
      }),
      update() {
        // only update FreeSeats for now
        let that = this;
        return (0, _api.getEvent)(this.get('Id')).then(function (updatedEvent) {
          that.set('FreeSeats', updatedEvent.FreeSeats);
        });
      }
    }).create(event);
  }

  /**
   * create proxy for human-readable values
   * @param {object} event event returned by the API
   */
  function addDisplayData(event) {
    event.displayData = _proxy.default.create({
      content: event,
      // formatted overwritten properties
      DateFrom: (0, _dateHelpers.formatDate)(event.DateFrom, 'LL'),
      DateTo: (0, _dateHelpers.formatDate)(event.DateTo, 'LL'),
      SubscriptionDateFrom: (0, _dateHelpers.formatDate)(event.SubscriptionDateFrom, 'LL'),
      SubscriptionDateTo: (0, _dateHelpers.formatDate)(event.SubscriptionDateTo, 'LL'),
      From: (0, _dateHelpers.formatDate)(event.From, 'LLL'),
      To: (0, _dateHelpers.formatDate)(event.To, 'LLL'),
      SubscriptionFrom: (0, _dateHelpers.formatDate)(event.SubscriptionFrom, 'LLL'),
      SubscriptionTo: (0, _dateHelpers.formatDate)(event.SubscriptionTo, 'LLL'),
      Price: event.Price === 0.0000 || event.Price === null ? null : 'CHF ' + event.Price
    });
  }

  /**
   * adds empty arrays for lessons, texts and codes and adds properties SubscriptionFrom,
   * SubscriptionTo, From, To, Time
   * @param {object} event event returned by the API
   */
  function addPropertiesToEvent(event) {
    // add lessons-array
    event.lessons = [];

    // add texts-array
    event.texts = [];

    // fill empty Date properties in event object
    fillEmptyDates(event);

    // combine date and time
    event.SubscriptionFrom = event.SubscriptionDateFrom === null ? null : (0, _dateHelpers.combineDate)(event.SubscriptionDateFrom, event.SubscriptionTimeFrom);
    event.SubscriptionTo = event.SubscriptionDateTo === null ? null : (0, _dateHelpers.combineDate)(event.SubscriptionDateTo, event.SubscriptionTimeTo);
    event.From = event.DateFrom === null ? null : (0, _dateHelpers.combineDate)(event.DateFrom, event.TimeFrom);
    event.To = event.DateTo === null ? null : (0, _dateHelpers.combineDate)(event.DateTo, event.TimeTo);
    event.SubscriptionDateFrom = event.SubscriptionDateFromIsNull ? null : event.SubscriptionDateFrom;
    event.SubscriptionDateTo = event.SubscriptionDateToIsNull ? null : event.SubscriptionDateTo;

    // add event.Time
    if (typeof event.TimeFrom === 'string' && typeof event.TimeTo === 'string') {
      event.Time = `${(0, _dateHelpers.removeMinutes)(event.TimeFrom)} - ${(0, _dateHelpers.removeMinutes)(event.TimeTo)}`;
    }
  }
  /**
   * if one of the Date or Time property is null get default value
   *
   * SubscriptionDateFrom is null => now - 1 day
   * SubscriptionDateTo is null => now + 7 day
   * DateFrom is null => now + 7 day
   * DateTo is null => now + 7 day
   * SubscriptionTimeFrom is null => '00:00:01'
   * SubscriptionTimeTo is null => '23:59:59'
   * @param {object} event event returned by the API
   */
  function fillEmptyDates(event) {
    let now = new Date();
    let yesterday = new Date().setDate(now.getDate() - 1);
    let datePast = (0, _format.default)(yesterday, 'yyyy-MM-dd');
    now.setDate(now.getDate() + 7);
    let dateNow = (0, _format.default)(now, 'yyyy-MM-dd');
    event.SubscriptionDateFromIsNull = event.SubscriptionDateFrom === null ? true : false;
    event.SubscriptionDateFrom = event.SubscriptionDateFrom || datePast;
    event.SubscriptionDateToIsNull = event.SubscriptionDateTo === null ? true : false;
    event.SubscriptionDateTo = event.SubscriptionDateTo || dateNow;
    event.SubscriptionTimeFrom = event.SubscriptionTimeFrom || '00:00:01';
    event.SubscriptionTimeTo = event.SubscriptionTimeTo || '23:59:59';
  }

  /**
   * if LanguageOfInstruction is a number translate it
   * @param {object} event event returned by the API
   */
  function setLanguageEventFromIntToString(event) {
    if (event.LanguageOfInstruction === '2') {
      event.LanguageOfInstruction = (0, _translate.getString)('french');
    } else if (event.LanguageOfInstruction === '1') {
      event.LanguageOfInstruction = (0, _translate.getString)('german');
    } else if (event.LanguageOfInstruction === '133') {
      event.LanguageOfInstruction = (0, _translate.getString)('english');
    } else if (event.LanguageOfInstruction === '284') {
      event.LanguageOfInstruction = (0, _translate.getString)('italian');
    } else if (event.LanguageOfInstruction === '285') {
      event.LanguageOfInstruction = (0, _translate.getString)('spain');
    }
  }
});
;define("kursausschreibung/framework/translate", ["exports", "jquery", "kursausschreibung/framework/storage", "kursausschreibung/framework/app-config"], function (_exports, _jquery, _storage, _appConfig) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getLanguage = getLanguage;
  _exports.getString = getString;
  _exports.setLanguage = setLanguage;
  /* loosely based on the CLX framework */

  let language = detectLanguage();
  let locale = window.kursausschreibung.locale[language];

  /**
   * get the current language
   */
  function getLanguage() {
    return language;
  }

  /**
   * set a new language
   * this reloads the module
   * @param {string} newLanguage the new language
   */
  function setLanguage(newLanguage) {
    (0, _storage.setCulture)(newLanguage);
    if (newLanguage !== getLanguage()) {
      window.location.assign(location.href);
    }
  }

  /**
   * returns a localized sring
   * @param {string} key the key to localize
   * @param {string[]?} placeholderValues these values replace {0}, {1}, ...
   */
  function getString(key, placeholderValues = []) {
    try {
      let string = locale[key];
      if (string === undefined || string === null) {
        return '<span style="color:red;">Key not found: ' + key + '</span>';
      }
      placeholderValues.forEach((placeholderValue, i) => {
        string = string.replace('{' + i + '}', placeholderValue);
      });
      return string;
    } catch (ex) {
      console.error('translate ERROR:', ex); // eslint-disable-line no-console
      return '<span style="color:red;">error in translation.</span>';
    }
  }

  /**
   * detect the language the module should have
   */
  function detectLanguage() {
    // first priority: html lang attribute
    let htmlLang = (0, _jquery.default)('html').attr('lang');
    if (htmlLang === 'de') {
      return 'de-CH';
    }
    if (htmlLang === 'fr') {
      return 'fr-CH';
    }

    // second priority: uiCulture in localStorage
    let culture = (0, _storage.getCulture)();
    if (culture !== null) {
      return culture;
    }

    // third priority: browser-language
    let navigatorLanguage = navigator.language;
    if (navigatorLanguage.split('-')[0] === 'fr') {
      return 'fr-CH';
    }
    // default to de-CH
    return 'de-CH';
  }
});
;define("kursausschreibung/framework/url-helpers", ["exports", "kursausschreibung/framework/app-config"], function (_exports, _appConfig) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getCorrectApiUrl = getCorrectApiUrl;
  _exports.getParameterByName = getParameterByName;
  _exports.getRootModulUrl = getRootModulUrl;
  _exports.setParameterByName = setParameterByName;
  /**
   * get an URL-parameter
   * taken from https://stackoverflow.com/q/901115#answer-901144
   * @param {string} name the name of the parameter
   * @param {string} url the URL (defaults to current URL)
   */
  function getParameterByName(name, url) {
    if (typeof url !== 'string') {
      url = window.location.href;
    }
    name = name.replace(/[[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    let results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  /**
   * set url params by name 
   * @param {string} name the name of the parameter
   * @param {string} value the value of the parameter name
   * @param {string} url the URL (defaults to current URL)
   */
  function setParameterByName(name, value, url) {
    if (typeof url !== 'string') {
      url = window.location.href;
    }
    if (value === null) {
      return url;
    }
    let params = decodeURIComponent(url).split('?');
    let paramsLength = params.length;
    params = params.length === 3 ? params[1] + '?' + params[2] : params[1];
    if (params !== undefined) {
      if (params.indexOf(name) >= 0) {
        params = params.replace(name + '=' + getParameterByName(name, url), name + '=' + value);
      } else {
        let newParam = '&';
        if (paramsLength > 2 && params.indexOf('?') > -1) {
          newParam = '&';
        } else if (paramsLength > 2 && params.indexOf('?') === -1) {
          newParam = '?';
        } else if (paramsLength === 2 && params.indexOf('#') > -1) {
          newParam = '?';
        }
        params = params + newParam + name + '=' + value;
      }
    } else {
      params = name + '=' + value;
    }
    window.location.href = url.split('?')[0] + '?' + params;
  }

  /**
   * It checks if the url starts with "http". If true change url to relative url
   * @param {string} url location url
   */
  function getCorrectApiUrl(url) {
    if (url.indexOf('http') === 0) {
      var apiUriSplitLength = _appConfig.default.apiUrl.split('/').length;
      var getIndex = url.split('/')[apiUriSplitLength];
      return url.substring(url.indexOf(getIndex), url.length);
    } else {
      return '..' + url;
    }
  }

  /**
   * Get the first term window.location.href split by #
   */
  function getRootModulUrl() {
    return window.location.href.split('#')[0];
  }
});
;define("kursausschreibung/helpers/app-version", ["exports", "@ember/component/helper", "kursausschreibung/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }
    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }
    return match ? match[0] : version;
  }
  var _default = _exports.default = (0, _helper.helper)(appVersion);
});
;define("kursausschreibung/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
});
;define("kursausschreibung/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _pageTitle.default;
});
;define("kursausschreibung/helpers/translate", ["exports", "@ember/component/helper", "kursausschreibung/framework/translate", "@ember/string"], function (_exports, _helper, _translate, _string) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.translate = translate;
  function translate([key, ...placeholderValues]) {
    return (0, _string.htmlSafe)((0, _translate.getString)(key, placeholderValues));
  }
  var _default = _exports.default = (0, _helper.helper)(translate);
});
;define("kursausschreibung/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "kursausschreibung/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("kursausschreibung/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
});
;define("kursausschreibung/initializers/export-application-global", ["exports", "ember", "kursausschreibung/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }
      var value = _environment.default.exportApplicationGlobal;
      var globalName;
      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }
      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }
  var _default = _exports.default = {
    name: 'export-application-global',
    initialize: initialize
  };
});
;define("kursausschreibung/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _emberResolver.default;
});
;define("kursausschreibung/router", ["exports", "@ember/routing/router", "kursausschreibung/config/environment", "jquery", "kursausschreibung/framework/scroll-helpers"], function (_exports, _router, _environment, _jquery, _scrollHelpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let rootElement = (0, _jquery.default)(_environment.default.APP.rootElement).get(0);
  const Router = _router.default.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL,
    init() {
      this.on('routeDidChange', transition => {
        this._super(...arguments);
        var subscriptionProcessId = 'subscriptionProcess';
        setInterval(function () {
          if (document.getElementById(subscriptionProcessId) !== null) {
            (0, _scrollHelpers.setOffsetStickyHeader)(subscriptionProcessId);
          }
        }, 1000);
        if (this.currentPath === 'list.category.event.subscribe') {
          (0, _scrollHelpers.scrollToTimeout)(subscriptionProcessId);
        } else if (this.currentPath === 'list.category.index' && screen.width <= 960) {
          (0, _scrollHelpers.scrollToTimeout)('headerCategory');
        } else if (this.currentPath === 'list.category.event.index' && screen.width <= 960) {
          (0, _scrollHelpers.scrollToTimeout)('eventList');
        } else if (this.currentPath !== 'list.index') {
          (0, _scrollHelpers.scrollToTimeout)(rootElement.id);
        }
      });
    }
  });
  Router.map(function () {
    this.route('permalink', {
      path: '/uid/:event_id'
    });
    this.route('list', {
      path: '/:area_of_education'
    }, function () {
      this.route('category', {
        path: '/:category'
      }, function () {
        this.route('event', {
          path: '/:event_id'
        }, function () {
          this.route('subscribe');
          this.route('confirmation-error');
          this.route('confirmation');
        });
      });
    });
  });
  var _default = _exports.default = Router;
});
;define("kursausschreibung/routes/application", ["exports", "@ember/routing/route", "uikit", "jquery", "kursausschreibung/framework/store", "kursausschreibung/framework/storage", "kursausschreibung/framework/login-helpers", "kursausschreibung/framework/seo"], function (_exports, _route, _uikit, _jquery, _store, _storage, _loginHelpers, _seo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _route.default.extend({
    beforeModel() {
      // set uikit scope
      _uikit.default.container = '.uk-scope';

      // initialization
      return (0, _loginHelpers.autoCheckForLogin)() // get a valid access_token if we don't have one
      .then(_store.init).then(() => {
        // reroute to the confirmation page if there is data that has to be submitted
        let dataToSubmit = (0, _storage.getDataToSubmit)();
        if (dataToSubmit !== undefined) {
          let event = (0, _store.getEventById)(dataToSubmit.eventId);
          this.replaceWith('list.category.event.confirmation', event.areaKey, event.categoryKey, event.Id);
        }
      }).catch(function (error) {
        // only log exceptions thrown here so the route still loads
        // uninitialized modules will throw an error later
        console.error('FATAL error while initializing the module: ', error); // eslint-disable-line no-console
      });
    },
    model() {
      // remove loader
      (0, _jquery.default)('#kursausschreibung-loading').remove();
      let allEvents = (0, _store.getAllEvents)();
      (0, _seo.setJsonLd)(allEvents);
      return allEvents;
    }
  });
});
;define("kursausschreibung/routes/error", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _route.default.extend({});
});
;define("kursausschreibung/routes/index", ["exports", "@ember/routing/route", "@ember/service", "kursausschreibung/framework/store"], function (_exports, _route, _service, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let permalink = _exports.default = (_class = class permalink extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "router", _descriptor, this);
    }
    beforeModel() {
      let applicationModel = this.modelFor('application');
      if (applicationModel.areaKeys === undefined || applicationModel.areaKeys.length === 0) {
        if ((0, _store.isInitialized)()) {
          // proceed to the index route
          return;
        }
        throw new Error('failed to load.');
      }
      this.router.transitionTo('list', applicationModel.areaKeys[0]);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
});
;define("kursausschreibung/routes/list", ["exports", "@ember/routing/route", "@ember/string", "uikit"], function (_exports, _route, _string, _uikit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _route.default.extend({
    model(params) {
      let eventsByArea = this.modelFor('application');

      // make sure old URLs still work
      params.area_of_education = (0, _string.underscore)(params.area_of_education);

      // check if area of education exists
      if (!eventsByArea.areas.hasOwnProperty(params.area_of_education)) {
        this.replaceWith('/');
        return;
      }
      return eventsByArea.areas[params.area_of_education];
    },
    actions: {
      didTransition() {
        let modal = _uikit.default.modal('#menu-modal');
        if (modal !== undefined) {
          modal.hide();
        }
      }
    }
  });
});
;define("kursausschreibung/routes/list/category", ["exports", "@ember/routing/route", "@ember/service", "@ember/string"], function (_exports, _route, _service, _string) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let category = _exports.default = (_class = class category extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "router", _descriptor, this);
    }
    model(params) {
      let categories = this.modelFor('list').categories;

      // make sure old URLs still work
      params.category = (0, _string.underscore)(params.category);

      // check if category exists
      if (!categories.hasOwnProperty(params.category)) {
        this.router.transitionTo('list');
        return;
      }
      return categories[params.category];
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
});
;define("kursausschreibung/routes/list/category/event", ["exports", "@ember/routing/route", "@ember/string", "kursausschreibung/framework/store", "@ember/service"], function (_exports, _route, _string, _store, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let event = _exports.default = (_class = class event extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "router", _descriptor, this);
    }
    model(params) {
      let event = _store.default.getEventById(params.event_id);

      // check if event exists in area and category
      let areaKey = (0, _string.underscore)(this.paramsFor('list').area_of_education);
      let categoryKey = (0, _string.underscore)(this.paramsFor('list.category').category);
      if (event === undefined || event.areaKey !== areaKey || event.categoryKey !== categoryKey) {
        this.router.transitionTo('list.category');
        return;
      }
      return event;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  ;
});
;define("kursausschreibung/routes/list/category/event/confirmation-error", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _route.default.extend({});
});
;define("kursausschreibung/routes/list/category/event/confirmation", ["exports", "@ember/routing/route", "@ember/utils", "rsvp", "kursausschreibung/framework/storage", "kursausschreibung/framework/api", "kursausschreibung/framework/login-helpers", "kursausschreibung/framework/settings", "kursausschreibung/framework/translate", "@ember/service"], function (_exports, _route, _utils, _rsvp, _storage, _api, _loginHelpers, _settings, _translate, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let confirmation = _exports.default = (_class = class confirmation extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "router", _descriptor, this);
    }
    model() {
      let dataToSubmit = (0, _storage.getDataToSubmit)();
      let event = this.modelFor('list.category.event');
      if (dataToSubmit === null) {
        this.router.transitionTo('list.category.event');
        return;
      }
      let {
        personId,
        useCompanyAddress,
        addressData,
        companyAddressData,
        subscriptionData,
        additionalPeople,
        tableData,
        subscriptionFiles
      } = dataToSubmit;

      // make sure the session is still active
      return (0, _loginHelpers.autoCheckForLogin)().then(() => {
        // clear the data
        (0, _storage.setDataToSubmit)(null);

        // get the current data of the event
        return event.update();
      }).then(() => {
        // make sure it's still possible to subscribe to the event
        if (event.get('canDoSubscription') === false) {
          throw new Error('it\'s no longer possible to subscribe to this event');
        }

        // Create people and subscriptions
        let promises = [];

        // handle main person
        if (personId === 0) {
          promises.push(createAddresses(useCompanyAddress, addressData, companyAddressData));
        } else {
          promises.push(_rsvp.Promise.resolve(personId));
        }

        // handle other people
        additionalPeople.forEach(person => {
          promises.push(createPerson(person));
        });

        // subscribe everyone
        promises = promises.map(promise => {
          return promise.then(id => {
            subscriptionData.PersonId = id;
            if (additionalPeople.length > 0) {
              subscriptionData.SubscriptionDetails.push({
                VssId: _api.SUBSCRIPTION_DETAIL_ALLOW_MULTIPLE_PEOPLE,
                Value: additionalPeople.length
              });
            }
            return (0, _api.postSubscription)(subscriptionData).then(id => {
              subscriptionFiles.forEach(file => {
                let data = {
                  SubscriptionDetail: {
                    SubscriptionId: id,
                    VssId: file.IdVss
                  },
                  FileStreamInfo: {
                    FileName: file.name
                  }
                };
                promises.push((0, _api.postSubscriptionDetailsFiles)(data, file));
              });
            });
          });
        });
        return _rsvp.Promise.all(promises);
      }).then(() => {
        return {
          tableData: tableData,
          statusIsRed: event.get('status') === 'red'
        };
      }).catch(error => {
        if (error instanceof Error) {
          console.error(error); // eslint-disable-line no-console
        }
        let message = '';
        try {
          message = error.responseJSON.Issues[0].Message;
        } catch (exception) {
          message = (0, _translate.getString)('subscriptionFailed');
        }
        throw {
          message: message
        };
      });
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  // this function creates an address, a company address (if requested) and returns a
  // promise for a personId
  function createAddresses(useCompanyAddress, addressData, companyAddressData) {
    let personId;
    return createPerson(addressData).then(id => {
      personId = id;
      if (!useCompanyAddress) return;

      // add default values to companyAddress
      companyAddressData.PersonId = parseInt(personId);
      companyAddressData.AddressType = 'Arbeitgeber';
      companyAddressData.AddressTypeId = 501;
      companyAddressData.IsBilling = true;
      companyAddressData.Country = companyAddressData.Country === null ? 'Schweiz' : companyAddressData.Country;
      companyAddressData.CountryId = companyAddressData.CountryId === null ? 'CH' : companyAddressData.CountryId;
      return (0, _api.postAddress)(companyAddressData);
    }).then(() => personId);
  }

  // this function creates a new person and returns a promise for a personId
  function createPerson(addressData) {
    // add default values to person
    if (_settings.default.personDefaultValue instanceof Object) {
      Object.keys(_settings.default.personDefaultValue).forEach(key => {
        if ((0, _utils.isEmpty)(addressData[key])) {
          addressData[key] = _settings.default.personDefaultValue[key];
        }
      });
    }

    // delete keys with null-values
    Object.keys(addressData).forEach(key => {
      if (addressData[key] === null) delete addressData[key];
    });
    return new _rsvp.Promise(resolve => (0, _api.postPerson)(addressData).then((_data, _status, xhr) => {
      resolve([xhr]);
    })).then(([xhr]) => {
      // xhr is in an array so it gets correctly passed along
      let duplicateHeader = xhr.getResponseHeader('x-duplicate');
      let locationHeader = xhr.getResponseHeader('location');
      if (duplicateHeader === null && locationHeader === null) {
        throw new Error('failed to read personId. neither x-duplicate nor location header could be read.');
      }
      if (duplicateHeader !== null) {
        // the person already exists and must get updated
        let personId = duplicateHeader.split('/').slice(-1)[0];

        // add id
        addressData.Id = parseInt(personId);
        return (0, _api.putPerson)(addressData, personId).then(() => personId).catch(error => {
          // fail silently (see https://github.com/bkd-mba-fbi/kursausschreibung/issues/26)
          console.error('ignoring error while trying to update person', error); // eslint-disable-line no-console
        });
      }
      return locationHeader.split('/').slice(-1)[0];
    });
  }
});
;define("kursausschreibung/routes/list/category/event/index", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _route.default.extend({
    model() {
      return this.modelFor('list.category.event');
    }
  });
});
;define("kursausschreibung/routes/list/category/event/subscribe", ["exports", "@ember/array", "@ember/object", "@ember/routing/route", "kursausschreibung/framework/api", "kursausschreibung/framework/login-helpers", "kursausschreibung/framework/settings", "kursausschreibung/framework/translate", "rsvp"], function (_exports, _array, _object, _route, _api, _loginHelpers, _settings, _translate, _rsvp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function loadDropdownItems(fields) {
    return _rsvp.Promise.all(fields.filter(item => item.dataType === 'dropdown').map(item => (0, _api.getDropDownItems)(item.options.dropdownItems).then(options => {
      if (item.id === 'Nationality') {
        options.forEach(element => {
          element.Value = element.Value.split(':')[1].trim();
        });
        let setDefaultLand = options;
        let defaultLand = options.findIndex(nationality => nationality.Key === 2008100);
        setDefaultLand.splice(0, 0, options[defaultLand]);
      }
      if (item.id === 'Profession') {
        item.dataType = 'freeform-dropdown';
      }
      if (item.options.options === undefined) item.options.options = options;
    })));
  }
  let dataTypeMappings = {
    ShortText: 'string',
    Text: 'textarea',
    Int: 'number',
    Currency: 'number',
    Date: 'date',
    Yes: 'checkbox'
  };
  let fileTypeMapping = {
    DA: 'application/zip,application/x-zip-compressed',
    PD: 'application/pdf',
    PF: 'image/jpeg'
  };

  // convert subscriptionDetails to an array of input-components
  // as they are used in the settings.js file
  function getSubscriptionDetailFields(subscriptionDetails) {
    return subscriptionDetails.map(detail => {
      let dataType = dataTypeMappings[detail.VssType];
      let fileType = fileTypeMapping[detail.VssStyle];
      if (dataType === undefined) dataType = 'string';
      if (detail.DropdownItems instanceof Object) {
        dataType = 'dropdown';
        if (detail.VssStyleDescription === 'DropDownWithText') dataType = 'freeform-dropdown';
      }
      if (detail.VssStyle === 'HE') return {
        isLegend: true,
        label: detail.VssDesignation
      };
      if (detail.VssStyle === 'DA' || detail.VssStyle === 'PD' || detail.VssStyle === 'PF') {
        dataType = 'file';
      }
      if (detail.VssType === 'YesNo') {
        dataType = 'dropdown';
        detail.ShowAsRadioButtons = true;
        let yes = {
          Key: "Ja",
          Value: (0, _translate.getString)('yes')
        };
        let no = {
          Key: "Nein",
          Value: (0, _translate.getString)('no')
        };
        let items = [];
        items.push(yes);
        items.push(no);
        detail.DropdownItems = items;
      }
      return {
        id: detail.VssId,
        label: detail.VssDesignation,
        dataType: dataType,
        acceptFileType: fileType,
        fileTypeLabel: (0, _translate.getString)('fileType' + detail.VssStyle),
        fileLabelBevorFileChoose: (0, _translate.getString)('fileType' + detail.VssStyle),
        maxFileSize: detail.MaxFileSize,
        fileObject: null,
        options: {
          required: detail.VssInternet === 'M',
          autocomplete: 'off',
          options: detail.DropdownItems,
          showAsRadioButtons: dataType === 'dropdown' ? detail.ShowAsRadioButtons : undefined,
          tooltip: detail.Tooltip,
          disabled: detail.readOnly,
          hidden: '',
          dependencyItems: []
        }
      };
    });
  }
  function addSubscriptionDetailDependencies(subscriptionDetailDependencies, subscriptionDetails) {
    subscriptionDetails.map(item => {
      subscriptionDetailDependencies.find(dependency => {
        if (dependency.IdVss === item.id) {
          item.options.hidden = 'uk-hidden';
          dependency.required = item.options.required;
          item.options.required = false;
        }
        if (dependency.IdVssInfluencer === item.id) {
          item.options.dependencyItems.push(dependency);
        }
      });
    });
    return subscriptionDetails;
  }
  function addTranslations(fields) {
    fields.forEach(detail => {
      if (detail.label === undefined) detail.label = (0, _translate.getString)('form' + detail.id);
      if (detail.options !== undefined) {
        if (detail.options.showPlaceholder === true) {
          let key = detail.options.placeholderKey ? detail.options.placeholderKey : 'form' + detail.id + 'Placeholder';
          (0, _object.set)(detail, 'placeholder', (0, _translate.getString)(key));
        }
        if (detail.options.showHint === true) {
          let key = detail.options.hintKey ? detail.options.hintKey : 'form' + detail.id + 'Hint';
          (0, _object.set)(detail, 'hint', (0, _translate.getString)(key));
        }
      }
    });
    return fields;
  }
  function getFormFields(settings, eventTypeId, eventCategoryId) {
    if (eventTypeId in settings.formFields) {
      if (eventCategoryId in settings.formFields[eventTypeId]) {
        return settings.formFields[eventTypeId][eventCategoryId];
      } else if (settings.formFields[eventTypeId].addressFields !== undefined) {
        return settings.formFields[eventTypeId];
      }
    }
    if (settings.formFields.default === undefined) throw new Error("config for eventTypeId " + eventTypeId + " not found and no default config is available");
    return settings.formFields.default;
  }
  var _default = _exports.default = _route.default.extend({
    model(_params, transition) {
      let model = this.modelFor('list.category.event');
      if (model.externalSubscriptionURL !== null) {
        transition.abort();
      }
      if (model.get('canDoSubscription') === false) {
        transition.abort();
        return;
      }
      return (0, _loginHelpers.autoCheckForLogin)().then(() => _rsvp.Promise.all([(0, _api.getUserSettings)(), (0, _api.getSubscriptionDetails)(model.Id), (0, _api.getSubscriptionDetailDependencies)(model.Id)])).then(([userSettings, subscriptionDetails, subscriptionDetailDependencies]) => {
        let allowMultiplePeople = false;
        let enableInvoiceAddress = false;
        if (subscriptionDetails !== null) {
          subscriptionDetails = subscriptionDetails.filter(detail => {
            if (detail.VssId === _api.SUBSCRIPTION_DETAIL_ALLOW_MULTIPLE_PEOPLE) {
              allowMultiplePeople = true;
              return false;
            }
            if (detail.VssId === _api.SUBSCRIPTION_DETAIL_INVOICE_ADRESS) {
              enableInvoiceAddress = true;
              return false;
            }
            return true;
          });
          subscriptionDetails = subscriptionDetails.filter(det => det.VssInternet !== 'H');
        }
        (0, _object.set)(model, 'allowMultiplePeople', allowMultiplePeople);
        (0, _object.set)(model, 'enableInvoiceAddress', enableInvoiceAddress);
        userSettings.isLoggedIn = userSettings.IdPerson !== 0;
        (0, _object.set)(model, 'userSettings', userSettings);
        const sortedDetails = (0, _array.A)(subscriptionDetails).sortBy('Sort');
        (0, _object.set)(model, 'subscriptionDetailFields', addSubscriptionDetailDependencies(subscriptionDetailDependencies, getSubscriptionDetailFields(sortedDetails)));
        const formFields = getFormFields(_settings.default, model.EventTypeId, model.EventCategoryId);
        const fields = formFields.addressFields || [];
        const additionalPeopleFields = formFields.additionalPeopleFields || [];
        const companyFields = formFields.companyFields || [];
        if (!userSettings.isLoggedIn || userSettings.isLoggedIn && !enableInvoiceAddress) {
          if (allowMultiplePeople || enableInvoiceAddress) {
            loadDropdownItems([...fields, ...additionalPeopleFields, ...companyFields]);
          }
          return loadDropdownItems(fields);
        } else {
          // Wenn eingeloggt: auch Dropdowns für Rechnungsadresse laden, wenn vorhanden
          if (enableInvoiceAddress && companyFields.length > 0) {
            return loadDropdownItems(companyFields);
          }
        }
      }).then(() => model);
    },
    setupController(controller, model) {
      this._super(...arguments);
      const formFields = getFormFields(_settings.default, model.EventTypeId, model.EventCategoryId);
      controller.set('fields', addTranslations(formFields.addressFields));
      controller.set('enableInvoiceAddress', model.enableInvoiceAddress === true);
      controller.set('companyFields', addTranslations(formFields.companyFields || []));
      controller.set('showAddressInputs', !model.userSettings.isLoggedIn);
      controller.set('showCompanyButtonOnly', !model.userSettings.isLoggedIn || model.userSettings.isLoggedIn || model.enableInvoiceAddress);
      controller.set('subscriptionDetailFields', (0, _object.get)(model, 'subscriptionDetailFields'));
      controller.set('allowMultiplePeople', (0, _object.get)(model, 'allowMultiplePeople'));
      const peopleFields = formFields.additionalPeopleFields || formFields.addressFields;
      controller.set('additionalPeopleFields', (0, _object.get)(model, 'allowMultiplePeople') ? addTranslations(peopleFields) : peopleFields);
    }
  });
});
;define("kursausschreibung/routes/list/category/index", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _route.default.extend({
    model() {
      return this.modelFor('list.category');
    }
  });
});
;define("kursausschreibung/routes/list/index", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = _route.default.extend({
    model() {
      return this.modelFor('list');
    }
  });
});
;define("kursausschreibung/routes/permalink", ["exports", "@ember/routing/route", "kursausschreibung/framework/store", "@ember/service"], function (_exports, _route, _store, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer && (Object.defineProperty(i, e, a), a = null), a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let permalink = _exports.default = (_class = class permalink extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "router", _descriptor, this);
    }
    model(params) {
      const event = (0, _store.getEventById)(params.event_id);

      // redirect to event if it exists
      if (event !== undefined) {
        this.router.transitionTo('list.category.event', event.areaKey, event.categoryKey, event.Id);
      } else {
        this.router.transitionTo('');
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  ;
});
;define("kursausschreibung/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
});
;define("kursausschreibung/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("kursausschreibung/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("kursausschreibung/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "QVwcNY5A",
    "block": "[[[10,0],[14,0,\"uk-width-1-1\"],[12],[1,\"\\n\\n\"],[1,\"  \"],[10,\"nav\"],[14,0,\"uk-navbar-container uk-margin-top\"],[14,\"data-uk-navbar\",\"\"],[12],[1,\"\\n\"],[41,[30,0,[\"model\",\"moreOneAreaKeys\"]],[[[1,\"    \"],[10,0],[14,0,\"uk-navbar-left\"],[12],[1,\"\\n      \"],[10,\"ul\"],[14,0,\"uk-navbar-nav\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"model\",\"areaKeys\"]]],null]],null],null,[[[1,\"            \"],[10,\"li\"],[12],[1,\"\\n              \"],[8,[39,3],null,[[\"@route\",\"@model\"],[\"list\",[30,1]]],[[\"default\"],[[[[1,[28,[35,4],[[28,[37,4],[[30,0,[\"model\",\"areas\"]],[30,1]],null],\"name\"],null]],[1,\"\\n\"],[41,[30,0,[\"eventCategoryDropdown\"]],[[[1,\"                \"],[10,1],[14,\"uk-icon\",\"icon: chevron-down\"],[12],[13],[1,\"\\n\"]],[]],null],[1,\"              \"]],[]]]]],[1,\"\\n          \"],[13],[1,\"\\n\"],[41,[30,0,[\"eventCategoryDropdown\"]],[[[1,\"            \"],[10,0],[14,\"data-uk-dropdown\",\"\"],[12],[1,\"\\n              \"],[1,[28,[35,5],[[28,[37,4],[[30,0,[\"model\",\"areas\"]],[30,1]],null]],[[\"hideHeading\"],[true]]]],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],null]],[1]],null],[1,\"      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null],[1,\"    \"],[10,0],[14,0,\"uk-navbar-right\"],[12],[1,\"\\n      \"],[10,\"ul\"],[14,0,\"uk-navbar-nav\"],[12],[1,\"\\n        \"],[10,\"li\"],[12],[1,\"\\n\"],[41,[51,[30,0,[\"eventCategoryDropdown\"]]],[[[1,\"            \"],[10,3],[14,6,\"#menu-modal\"],[14,0,\"uk-icon-link uk-hidden@m\"],[14,\"data-uk-icon\",\"more\"],[14,\"data-uk-toggle\",\"\"],[12],[13],[1,\"\\n\\n            \"],[10,0],[14,1,\"menu-modal\"],[14,0,\"uk-modal-full\"],[14,\"uk-modal\",\"container: false;\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"uk-modal-dialog\"],[12],[1,\"\\n                \"],[10,\"button\"],[14,0,\"uk-modal-close-full uk-close-large\"],[14,\"data-uk-close\",\"\"],[14,4,\"button\"],[12],[13],[1,\"\\n                \"],[10,0],[14,0,\"uk-padding-large\"],[14,\"data-uk-height-viewport\",\"\"],[12],[1,\"\\n                  \"],[10,\"h2\"],[12],[1,[28,[35,7],[\"navigation\"],null]],[13],[1,\"\\n\"],[42,[28,[37,8],[[30,0,[\"model\",\"areas\"]]],null],null,[[[1,\"                    \"],[10,0],[14,0,\"uk-margin\"],[12],[1,\"\\n                      \"],[1,[28,[35,5],[[30,2]],null]],[1,\"\\n                    \"],[13],[1,\"\\n\"]],[2,3]],null],[41,[30,0,[\"showLanguageButton\"]],[[[1,\"                    \"],[10,0],[14,0,\"uk-margin\"],[12],[1,\"\\n                      \"],[10,\"h2\"],[12],[1,[28,[35,7],[\"language\"],null]],[13],[1,\"\\n                      \"],[10,\"ul\"],[14,0,\"uk-nav uk-nav-default\"],[12],[1,\"\\n                        \"],[10,\"li\"],[12],[11,3],[4,[38,9],[[30,0],\"setLanguage\",\"de-CH\"],null],[12],[1,[28,[35,7],[\"german\"],null]],[13],[13],[1,\"\\n                        \"],[10,\"li\"],[12],[11,3],[4,[38,9],[[30,0],\"setLanguage\",\"fr-CH\"],null],[12],[1,[28,[35,7],[\"french\"],null]],[13],[13],[1,\"\\n                      \"],[13],[1,\"\\n                    \"],[13],[1,\"\\n\"]],[]],null],[1,\"                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[30,0,[\"showLanguageButton\"]],[[[1,\"            \"],[10,0],[15,0,[29,[\"uk-margin-right \",[52,[51,[30,0,[\"eventCategoryDropdown\"]]],\"uk-visible@m\"]]]],[12],[1,\"\\n              \"],[10,3],[14,6,\"#\"],[14,0,\"uk-icon-link\"],[14,\"data-uk-icon\",\"world\"],[12],[1,[28,[35,7],[\"language\"],null]],[1,\" \"],[13],[1,\"\\n              \"],[10,0],[14,\"data-uk-dropdown\",\"mode: click\"],[12],[1,\"\\n                \"],[10,\"ul\"],[14,0,\"uk-list uk-link-text uk-margin-remove\"],[12],[1,\"\\n                  \"],[10,\"li\"],[12],[11,3],[24,6,\"#\"],[4,[38,9],[[30,0],\"setLanguage\",\"de-CH\"],null],[12],[1,[28,[35,7],[\"german\"],null]],[13],[13],[1,\"\\n                  \"],[10,\"li\"],[12],[11,3],[24,6,\"#\"],[4,[38,9],[[30,0],\"setLanguage\",\"fr-CH\"],null],[12],[1,[28,[35,7],[\"french\"],null]],[13],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],null],[1,\"        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"uk-grid uk-margin\"],[14,\"data-uk-grid\",\"\"],[12],[1,\"\\n\"],[1,\"    \"],[46,[28,[37,11],null,null],null,null,null],[1,\"\\n\\n\"],[1,\"    \"],[10,0],[15,0,[30,0,[\"rightWidth\"]]],[12],[1,\"\\n\\n\"],[41,[30,0,[\"logoImage\"]],[[[41,[33,12],[[[1,\"          \"],[10,3],[14,\"target\",\"_blank\"],[15,6,[36,12]],[12],[1,\"\\n            \"],[10,\"img\"],[14,0,\"uk-margin\"],[15,\"src\",[36,13]],[12],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[]],[[[1,\"          \"],[10,\"img\"],[14,0,\"uk-margin\"],[15,\"src\",[36,13]],[12],[13],[1,\"\\n\"]],[]]]],[]],null],[1,\"\\n\"],[1,\"      \"],[10,0],[14,0,\"uk-margin uk-card uk-card-small uk-card-body\"],[12],[1,\"\\n        \"],[10,\"h2\"],[14,1,\"header-legend\"],[14,0,\"uk-h3 uk-card-title\"],[12],[1,[28,[35,7],[\"legend\"],null]],[13],[1,\"\\n\\n        \"],[10,\"ul\"],[14,0,\"uk-list\"],[12],[1,\"\\n          \"],[10,\"li\"],[14,0,\"uk-flex\"],[12],[1,\"\\n            \"],[10,1],[12],[8,[39,14],null,[[\"@status\"],[\"green\"]],null],[13],[10,1],[12],[1,[28,[35,7],[\"greenLamp\"],null]],[13],[13],[1,\"\\n          \"],[10,\"li\"],[14,0,\"uk-flex\"],[12],[1,\"\\n            \"],[10,1],[12],[8,[39,14],null,[[\"@status\"],[\"chartreuse\"]],null],[13],[10,1],[12],[1,[28,[35,7],[\"chartreuseLamp\"],null]],[13],[13],[1,\"\\n          \"],[10,\"li\"],[14,0,\"uk-flex\"],[12],[1,\"\\n            \"],[10,1],[12],[8,[39,14],null,[[\"@status\"],[\"yellow\"]],null],[13],[10,1],[12],[1,[28,[35,7],[\"yellowLamp\"],null]],[13],[13],[1,\"\\n          \"],[10,\"li\"],[14,0,\"uk-flex\"],[12],[1,\"\\n            \"],[10,1],[12],[8,[39,14],null,[[\"@status\"],[\"red\"]],null],[13],[10,1],[12],[1,[28,[35,7],[\"redLamp\"],null]],[13],[13],[1,\"\\n          \"],[10,\"li\"],[14,0,\"uk-flex\"],[12],[1,\"\\n            \"],[10,1],[12],[8,[39,14],null,[[\"@status\"],[\"orange\"]],null],[13],[10,1],[12],[1,[28,[35,7],[\"orangeLamp\"],null]],[13],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"showContact\"]],[[[1,\"        \"],[10,0],[14,0,\"uk-margin uk-card uk-card-small uk-card-body\"],[12],[1,\"\\n          \"],[10,\"h2\"],[14,1,\"header-contact\"],[14,0,\"uk-h3 uk-card-title\"],[12],[1,[28,[35,7],[\"contact\"],null]],[13],[1,\"\\n          \"],[10,2],[12],[1,[28,[35,7],[\"contactContent\"],null]],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[30,0,[\"twitterHandle\"]],[[[1,\"        \"],[10,0],[14,0,\"uk-margin uk-card uk-card-small uk-card-body uk-visible@l\"],[12],[1,\"\\n          \"],[1,[28,[35,15],[[33,16]],null]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"areaKey\",\"data\",\"area\"],false,[\"if\",\"each\",\"-track-array\",\"link-to\",\"get\",\"area-navigation\",\"unless\",\"translate\",\"-each-in\",\"action\",\"component\",\"-outlet\",\"logoLink\",\"logoImage\",\"status-lamp\",\"twitter-feed\",\"twitterHandle\"]]",
    "moduleName": "kursausschreibung/templates/application.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/area-navigation", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "0JvUBGEH",
    "block": "[[[41,[51,[30,0,[\"hideHeading\"]]],[[[1,\"  \"],[10,\"h3\"],[14,1,\"header-naviagtion-area\"],[14,0,\"uk-margin-small\"],[12],[1,[28,[35,1],[\"kursCategoryHeader\"],null]],[13],[1,\"\\n\"]],[]],null],[10,\"ul\"],[14,0,\"uk-nav uk-nav-default\"],[12],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"\\n    \"],[8,[39,2],null,[[\"@route\"],[\"list.index\"]],[[\"default\"],[[[[1,[28,[35,1],[\"overview\"],null]]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,0,[\"area\",\"categoryKeys\"]]],null]],null],null,[[[1,\"    \"],[10,\"li\"],[12],[1,\"\\n      \"],[8,[39,2],null,[[\"@route\",\"@model\"],[\"list.category\",[30,1]]],[[\"default\"],[[[[1,[28,[35,5],[[28,[37,5],[[30,0,[\"area\",\"categories\"]],[30,1]],null],\"name\"],null]]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n\"]],[1]],null],[13],[1,\"\\n\"]],[\"categoryKey\"],false,[\"unless\",\"translate\",\"link-to\",\"each\",\"-track-array\",\"get\"]]",
    "moduleName": "kursausschreibung/templates/components/area-navigation.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/event-details-table", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "vBvRWA4F",
    "block": "[[[10,\"table\"],[14,0,\"uk-table uk-table-striped details-table table-collapse\"],[12],[1,\"\\n  \"],[10,\"tbody\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,0,[\"fields\"]]],null]],null],null,[[[41,[28,[37,3],[[30,0,[\"event\",\"displayData\"]],[30,1,[\"key\"]]],null],[[[1,\"        \"],[10,\"tr\"],[12],[1,\"\\n          \"],[10,\"td\"],[12],[2,[30,1,[\"name\"]]],[13],[1,\"\\n          \"],[10,\"td\"],[12],[2,[28,[37,3],[[30,0,[\"event\",\"displayData\"]],[30,1,[\"key\"]]],null]],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null]],[1]],null],[41,[30,0,[\"showEventText\"]],[[[42,[28,[37,1],[[28,[37,1],[[30,0,[\"event\",\"texts\"]]],null]],null],null,[[[1,\"        \"],[10,\"tr\"],[12],[1,\"\\n          \"],[10,\"td\"],[12],[2,[30,2,[\"label\"]]],[13],[1,\"\\n          \"],[10,\"td\"],[12],[2,[30,2,[\"memo\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[2]],null]],[]],null],[41,[30,0,[\"event\",\"displayData\",\"lessons\"]],[[[1,\"      \"],[10,\"tr\"],[12],[1,\"\\n        \"],[11,3],[16,\"uk-tooltip\",[29,[\"title:\",[28,[37,4],[\"lessonExportToIcs\"],null]]]],[4,[38,5],[[30,0],\"getIcsFileFromEvent\"],[[\"on\"],[\"click\"]]],[12],[10,\"td\"],[12],[1,[28,[35,4],[\"lessons\"],null]],[10,1],[14,\"uk-icon\",\"icon: calendar; ratio: 1.4\"],[12],[13],[13],[13],[1,\"\\n        \\n\"],[41,[30,0,[\"event\",\"lessonsCollaps\"]],[[[1,\"        \"],[10,\"td\"],[12],[10,3],[14,\"uk-toggle\",\"target: #lesson-display\"],[12],[1,\"Alle Lektionen anzeigen\"],[13],[10,0],[14,1,\"lesson-display\"],[14,\"hidden\",\"\"],[12],[42,[28,[37,1],[[28,[37,1],[[30,0,[\"event\",\"displayData\",\"lessons\"]]],null]],null],null,[[[1,[30,3,[\"DateFrom\"]]],[1,\" - \"],[1,[30,3,[\"TimeTo\"]]],[41,[30,3,[\"Designation\"]],[[[1,\": \"],[2,[30,3,[\"Designation\"]]]],[]],null],[10,\"br\"],[12],[13]],[3]],null],[13],[13],[1,\"\\n\"]],[]],[[[1,\"        \"],[10,\"td\"],[12],[42,[28,[37,1],[[28,[37,1],[[30,0,[\"event\",\"displayData\",\"lessons\"]]],null]],null],null,[[[1,[30,4,[\"DateFrom\"]]],[1,\" - \"],[1,[30,4,[\"TimeTo\"]]],[41,[30,4,[\"Designation\"]],[[[1,\": \"],[2,[30,4,[\"Designation\"]]]],[]],null],[10,\"br\"],[12],[13]],[4]],null],[13],[1,\"\\n\"]],[]]],[1,\"      \"],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[13],[1,\"\\n\"],[13]],[\"field\",\"text\",\"lesson\",\"lesson\"],false,[\"each\",\"-track-array\",\"if\",\"get\",\"translate\",\"action\"]]",
    "moduleName": "kursausschreibung/templates/components/event-details-table.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/event-list-item", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "9p7u8jzz",
    "block": "[[[10,0],[15,0,[29,[\"filter-tags \",[30,0,[\"event\",\"filter\"]]]]],[12],[1,\"\\n\"],[8,[39,0],[[24,0,\"event-list-item uk-link-reset\"]],[[\"@route\",\"@model\"],[\"permalink\",[30,0,[\"event\",\"Id\"]]]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"h3\"],[14,0,\"uk-margin-small\"],[12],[1,\"\\n    \"],[10,1],[14,0,\"uk-flex\"],[12],[1,\"\\n      \"],[10,1],[12],[8,[39,1],null,[[\"@status\"],[[30,0,[\"event\",\"status\"]]]],null],[13],[1,\"\\n      \"],[10,1],[12],[1,[28,[35,2],[[30,0,[\"event\",\"displayData\"]],[30,0,[\"title\"]]],null]],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[41,[30,0,[\"event\",\"subtitle\"]],[[[1,\"  \"],[10,1],[14,0,\"uk-label uk-label-warning uk-margin-small\"],[12],[1,[30,0,[\"event\",\"subtitle\"]]],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[10,\"table\"],[14,0,\"details-table\"],[12],[1,\"\\n    \"],[10,\"tbody\"],[12],[1,\"\\n\"],[42,[28,[37,5],[[28,[37,5],[[30,0,[\"fields\"]]],null]],null],null,[[[41,[28,[37,2],[[30,0,[\"event\",\"displayData\"]],[30,1,[\"key\"]]],null],[[[1,\"          \"],[10,\"tr\"],[12],[1,\"\\n            \"],[10,\"td\"],[12],[2,[30,1,[\"name\"]]],[13],[1,\"\\n            \"],[10,\"td\"],[12],[2,[28,[37,2],[[30,0,[\"event\",\"displayData\"]],[30,1,[\"key\"]]],null]],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[]],null]],[1]],null],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\"],[13],[1,\"\\n\"],[10,\"script\"],[12],[1,\"\\n  // add classes to wrapper emberjs element\\n  var filter = document.querySelector('.jsfilter');\\n  var filterChild = filter.children;\\n  var filterClass = filterChild[0].className;\\n  filter.className = filterClass;\\n\"],[13]],[\"field\"],false,[\"link-to\",\"status-lamp\",\"get\",\"if\",\"each\",\"-track-array\"]]",
    "moduleName": "kursausschreibung/templates/components/event-list-item.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/event-list-search", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "dLdnnfte",
    "block": "[[[10,0],[14,0,\"uk-grid uk-margin\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"uk-search uk-search-default uk-width-2-3@s\"],[12],[1,\"\\n    \"],[10,1],[14,\"data-uk-search-icon\",\"\"],[12],[13],[1,\"\\n    \"],[10,\"input\"],[14,1,\"searchEvents\"],[14,0,\"uk-search-input\"],[15,\"placeholder\",[28,[37,0],[\"search\"],null]],[15,2,[30,0,[\"query\"]]],[14,4,\"search\"],[12],[13],[1,\"  \\n\"],[41,[30,0,[\"query\"]],[[[1,\"      \"],[11,\"button\"],[24,0,\"search-clear\"],[24,\"uk-close\",\"\"],[24,4,\"button\"],[4,[38,2],[[30,0],\"clearSearch\"],null],[12],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"uk-width-1-3@s\"],[12],[1,\"\\n      \"],[10,\"select\"],[14,1,\"sortList\"],[15,\"onchange\",[28,[37,2],[[30,0],\"sortBy\"],[[\"value\"],[\"target.value\"]]]],[14,0,\"uk-select\"],[14,\"aria-label\",\"Select\"],[12],[1,\"\\n        \"],[1,[30,0,[\"sortOptions\"]]],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[41,[30,0,[\"filteredEvents\",\"length\"]],[[[1,\"  \"],[18,1,[[30,0,[\"filteredEvents\"]]]],[1,\"\\n\"]],[]],[[[1,\"  \"],[10,0],[12],[1,[28,[35,0],[\"searchNoEvents\"],null]],[13],[1,\"\\n\"]],[]]],[1,\"\\n\"]],[\"&default\"],false,[\"translate\",\"if\",\"action\",\"yield\"]]",
    "moduleName": "kursausschreibung/templates/components/event-list-search.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/event-list", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "bQunmA28",
    "block": "[[[8,[39,0],null,[[\"@queryChanged\",\"@events\"],[[28,[37,1],[[30,0],\"queryChanged\"],null],[30,0,[\"events\"]]]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,2],null,[[\"@page\",\"@items\",\"@route\"],[[30,0,[\"page\"]],[30,1],[30,0,[\"route\"]]]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,2]],null]],null],null,[[[1,\"      \"],[8,[39,5],null,[[\"@event\"],[[30,3]]],null],[1,\"\\n\"]],[3]],null],[1,\"  \"]],[2]]]]],[1,\"\\n\"]],[1]]]]],[1,\"\\n\"]],[\"filteredEvents\",\"eventsOnCurrentPage\",\"event\"],false,[\"event-list-search\",\"action\",\"list-pagination\",\"each\",\"-track-array\",\"event-list-item\"]]",
    "moduleName": "kursausschreibung/templates/components/event-list.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/input-base", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "5Of/5XGh",
    "block": "[[[41,[30,0,[\"field\",\"isLegend\"]],[[[1,\"  \"],[10,\"legend\"],[14,0,\"uk-legend uk-margin\"],[12],[2,[30,0,[\"field\",\"label\"]]],[13],[1,\"\\n\"]],[]],[[[1,\"  \"],[10,0],[15,1,[29,[\"hidden\",[30,0,[\"field\",\"id\"]]]]],[15,0,[29,[\"uk-margin uk-display-inline-block uk-width-1-1 \",[30,0,[\"field\",\"options\",\"hidden\"]]]]],[12],[1,\"\\n    \"],[10,\"label\"],[14,0,\"uk-form-label\"],[15,\"for\",[30,0,[\"field\",\"id\"]]],[15,\"data-uk-tooltip\",[30,0,[\"field\",\"options\",\"tooltip\"]]],[12],[2,[30,0,[\"field\",\"label\"]]],[13],[1,\"\\n    \"],[10,0],[14,0,\"uk-form-controls\"],[12],[1,\"\\n\"],[41,[30,0,[\"field\",\"options\",\"tooltip\"]],[[[1,\"      \"],[10,\"label\"],[14,0,\"uk-margin uk-display-inline-block uk-text-meta\"],[12],[1,[30,0,[\"field\",\"options\",\"tooltip\"]]],[13],[1,\"\\n\"]],[]],null],[1,\"      \"],[46,[30,0,[\"componentType\"]],null,[[\"field\"],[[30,0,[\"field\"]]]],null],[1,\"\\n\"],[41,[30,0,[\"field\",\"options\",\"showHint\"]],[[[1,\"        \"],[10,0],[15,0,[29,[[30,0,[\"field\",\"options\",\"hintClassNames\"]]]]],[12],[2,[30,0,[\"field\",\"hint\"]]],[13],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]],[],false,[\"if\",\"component\"]]",
    "moduleName": "kursausschreibung/templates/components/input-base.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/input/input-checkbox", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "EijBwFPu",
    "block": "[[[10,\"input\"],[15,1,[29,[\"vss\",[30,0,[\"field\",\"id\"]]]]],[14,0,\"uk-checkbox\"],[15,3,[30,0,[\"field\",\"id\"]]],[15,\"required\",[30,0,[\"field\",\"options\",\"required\"]]],[15,\"autocomplete\",[30,0,[\"field\",\"options\",\"autocomplete\"]]],[15,\"disabled\",[30,0,[\"field\",\"options\",\"disabled\"]]],[14,4,\"checkbox\"],[12],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "kursausschreibung/templates/components/input/input-checkbox.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/input/input-date", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "6JyYmWjE",
    "block": "[[[10,\"input\"],[15,1,[29,[\"vss\",[30,0,[\"field\",\"id\"]]]]],[14,0,\"uk-input\"],[14,\"data-type\",\"date\"],[15,3,[30,0,[\"field\",\"id\"]]],[14,\"pattern\",\"[0-9]{2}.[0-9]{2}.[0-9]{4}\"],[14,\"placeholder\",\"01.01.1970\"],[15,\"required\",[30,0,[\"field\",\"options\",\"required\"]]],[15,\"autocomplete\",[30,0,[\"field\",\"options\",\"autocomplete\"]]],[15,\"disabled\",[30,0,[\"field\",\"options\",\"disabled\"]]],[14,4,\"date\"],[12],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "kursausschreibung/templates/components/input/input-date.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/input/input-dropdown", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "Yjpfsszc",
    "block": "[[[41,[30,0,[\"field\",\"options\",\"showAsRadioButtons\"]],[[[1,\"  \"],[10,0],[14,0,\"uk-grid-small uk-child-width-auto uk-grid\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"field\",\"options\",\"options\"]]],null]],null],null,[[[1,\"      \"],[10,\"label\"],[12],[10,\"input\"],[15,1,[29,[\"vss\",[30,0,[\"field\",\"id\"]]]]],[14,0,\"uk-radio\"],[15,3,[30,0,[\"field\",\"id\"]]],[15,2,[30,1,[\"Key\"]]],[15,\"data-human-readable\",[30,1,[\"Value\"]]],[15,\"required\",[30,0,[\"field\",\"options\",\"required\"]]],[15,\"disabled\",[30,0,[\"field\",\"options\",\"disabled\"]]],[14,4,\"radio\"],[12],[13],[1,\"\\n        \"],[1,[30,1,[\"Value\"]]],[13],[1,\"\\n\"]],[1]],null],[1,\"  \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"field\",\"options\",\"required\"]],[[[1,\"  \"],[10,\"select\"],[15,1,[29,[\"vss\",[30,0,[\"field\",\"id\"]]]]],[14,0,\"uk-select required\"],[15,3,[30,0,[\"field\",\"id\"]]],[15,\"autocomplete\",[30,0,[\"field\",\"options\",\"autocomplete\"]]],[15,\"disabled\",[30,0,[\"field\",\"options\",\"disabled\"]]],[14,\"required\",\"\"],[12],[1,\"\\n    \"],[10,\"option\"],[14,\"disabled\",\"\"],[14,\"selected\",\"\"],[14,2,\"\"],[12],[1,[28,[35,3],[\"formOptionEmpty\"],null]],[13],[1,\"\\n    \"],[1,[30,0,[\"dropdownOptions\"]]],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],[[[1,\"      \"],[10,\"select\"],[15,1,[29,[\"vss\",[30,0,[\"field\",\"id\"]]]]],[14,0,\"uk-select\"],[15,3,[30,0,[\"field\",\"id\"]]],[15,\"autocomplete\",[30,0,[\"field\",\"options\",\"autocomplete\"]]],[15,\"disabled\",[30,0,[\"field\",\"options\",\"disabled\"]]],[12],[1,\"\\n    \"],[10,\"option\"],[14,2,\"\"],[12],[1,[28,[35,3],[\"formOptionEmpty\"],null]],[13],[1,\"\\n    \"],[1,[30,0,[\"dropdownOptions\"]]],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]],[]]]],[\"option\"],false,[\"if\",\"each\",\"-track-array\",\"translate\"]]",
    "moduleName": "kursausschreibung/templates/components/input/input-dropdown.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/input/input-email", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "TRqW8qAV",
    "block": "[[[10,\"input\"],[15,1,[29,[\"vss\",[30,0,[\"field\",\"id\"]]]]],[14,0,\"uk-input\"],[15,3,[30,0,[\"field\",\"id\"]]],[14,\"autocomplete\",\"email\"],[15,\"required\",[30,0,[\"field\",\"options\",\"required\"]]],[15,\"autocomplete\",[30,0,[\"field\",\"options\",\"autocomplete\"]]],[15,\"disabled\",[30,0,[\"field\",\"options\",\"disabled\"]]],[14,4,\"email\"],[12],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "kursausschreibung/templates/components/input/input-email.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/input/input-file", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "bLML0AdJ",
    "block": "[[[10,0],[14,0,\"js-upload uk-form-custom\"],[12],[1,\"\\n    \"],[10,\"input\"],[15,1,[29,[\"file\",[30,0,[\"field\",\"id\"]]]]],[14,0,\"uk-input\"],[15,\"accept\",[30,0,[\"field\",\"acceptFileType\"]]],[15,3,[30,0,[\"field\",\"id\"]]],[15,\"required\",[30,0,[\"field\",\"options\",\"required\"]]],[15,\"disabled\",[30,0,[\"field\",\"options\",\"disabled\"]]],[14,4,\"file\"],[12],[13],[1,\"\\n\"],[41,[30,0,[\"field\",\"options\",\"required\"]],[[[1,\"    \"],[10,\"button\"],[15,1,[29,[\"fileBt\",[30,0,[\"field\",\"id\"]]]]],[14,0,\"uk-button uk-button-default required\"],[14,\"tabindex\",\"-1\"],[15,\"required\",[30,0,[\"field\",\"options\",\"required\"]]],[14,4,\"button\"],[12],[1,[30,0,[\"field\",\"fileTypeLabel\"]]],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[10,\"button\"],[15,1,[29,[\"fileBt\",[30,0,[\"field\",\"id\"]]]]],[14,0,\"uk-button uk-button-default\"],[14,\"tabindex\",\"-1\"],[15,\"required\",[30,0,[\"field\",\"options\",\"required\"]]],[14,4,\"button\"],[12],[1,[30,0,[\"field\",\"fileTypeLabel\"]]],[13],[1,\"\\n\"]],[]]],[13],[1,\"\\n\"],[10,0],[15,1,[29,[\"img\",[30,0,[\"field\",\"id\"]]]]],[14,0,\"uk-margin uk-hidden\"],[14,5,\"height: auto;\"],[12],[1,\"\\n    \"],[10,2],[12],[1,[28,[35,1],[\"fileTypePFInfo\"],null]],[1,\" \"],[10,1],[14,\"uk-icon\",\"icon: upload; ratio: 1\"],[12],[13],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,\"img\"],[15,1,[29,[\"imgDev\",[30,0,[\"field\",\"id\"]]]]],[14,0,\"uk-margin uk-hidden\"],[14,\"width\",\"300\"],[12],[13],[1,\"\\n\"],[11,\"button\"],[16,1,[29,[\"fileBtDel\",[30,0,[\"field\",\"id\"]]]]],[24,0,\"uk-button-danger uk-hidden\"],[4,[38,2],[[30,0],\"deleteFile\"],null],[12],[10,1],[14,\"uk-icon\",\"icon: close; ratio: 1\"],[12],[13],[13],[1,\"\\n\"],[11,\"button\"],[16,1,[29,[\"fileBtUpload\",[30,0,[\"field\",\"id\"]]]]],[24,0,\"uk-button-primary uk-hidden\"],[4,[38,2],[[30,0],\"uploadImage\"],null],[12],[10,1],[14,\"uk-icon\",\"icon: upload; ratio: 1\"],[12],[13],[13],[1,\"\\n\"]],[],false,[\"if\",\"translate\",\"action\"]]",
    "moduleName": "kursausschreibung/templates/components/input/input-file.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/input/input-freeform-dropdown", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "vu43f9ZF",
    "block": "[[[10,\"input\"],[15,1,[29,[\"vss\",[30,0,[\"field\",\"id\"]]]]],[14,0,\"uk-input typeahead\"],[15,3,[30,0,[\"field\",\"id\"]]],[15,\"required\",[30,0,[\"field\",\"options\",\"required\"]]],[15,\"autocomplete\",[30,0,[\"field\",\"options\",\"autocomplete\"]]],[15,\"disabled\",[30,0,[\"field\",\"options\",\"disabled\"]]],[15,\"placeholder\",[30,0,[\"field\",\"placeholder\"]]],[14,4,\"text\"],[12],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "kursausschreibung/templates/components/input/input-freeform-dropdown.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/input/input-number", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "xHL1PRC4",
    "block": "[[[10,\"input\"],[15,1,[29,[\"vss\",[30,0,[\"field\",\"id\"]]]]],[14,0,\"uk-input\"],[15,3,[30,0,[\"field\",\"id\"]]],[15,\"required\",[30,0,[\"field\",\"options\",\"required\"]]],[15,\"autocomplete\",[30,0,[\"field\",\"options\",\"autocomplete\"]]],[15,\"disabled\",[30,0,[\"field\",\"options\",\"disabled\"]]],[15,\"placeholder\",[30,0,[\"field\",\"placeholder\"]]],[14,4,\"number\"],[12],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "kursausschreibung/templates/components/input/input-number.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/input/input-postal-code", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "UIPrNJbp",
    "block": "[[[10,\"input\"],[14,0,\"uk-input typeaheadZip\"],[15,3,[30,0,[\"field\",\"id\"]]],[15,\"required\",[30,0,[\"field\",\"options\",\"required\"]]],[15,\"autocomplete\",[30,0,[\"field\",\"options\",\"autocomplete\"]]],[15,\"disabled\",[30,0,[\"field\",\"options\",\"disabled\"]]],[15,\"placeholder\",[30,0,[\"field\",\"placeholder\"]]],[14,4,\"text\"],[12],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "kursausschreibung/templates/components/input/input-postal-code.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/input/input-string", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "S+WXhab4",
    "block": "[[[10,\"input\"],[15,1,[29,[\"vss\",[30,0,[\"field\",\"id\"]]]]],[14,0,\"uk-input\"],[15,3,[30,0,[\"field\",\"id\"]]],[15,\"required\",[30,0,[\"field\",\"options\",\"required\"]]],[15,\"autocomplete\",[30,0,[\"field\",\"options\",\"autocomplete\"]]],[15,\"disabled\",[30,0,[\"field\",\"options\",\"disabled\"]]],[15,\"placeholder\",[30,0,[\"field\",\"placeholder\"]]],[14,4,\"text\"],[12],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "kursausschreibung/templates/components/input/input-string.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/input/input-telephone", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "gseXkugE",
    "block": "[[[10,\"input\"],[14,0,\"uk-input\"],[14,\"placeholder\",\"031 345 67 89\"],[15,3,[30,0,[\"field\",\"id\"]]],[15,\"required\",[30,0,[\"field\",\"options\",\"required\"]]],[15,\"autocomplete\",[30,0,[\"field\",\"options\",\"autocomplete\"]]],[15,\"disabled\",[30,0,[\"field\",\"options\",\"disabled\"]]],[14,4,\"tel\"],[12],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "kursausschreibung/templates/components/input/input-telephone.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/input/input-textarea", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "uo3eIvSM",
    "block": "[[[10,\"textarea\"],[15,1,[29,[\"vss\",[30,0,[\"field\",\"id\"]]]]],[14,0,\"uk-textarea\"],[15,3,[30,0,[\"field\",\"id\"]]],[15,\"required\",[30,0,[\"field\",\"options\",\"required\"]]],[15,\"autocomplete\",[30,0,[\"field\",\"options\",\"autocomplete\"]]],[15,\"disabled\",[30,0,[\"field\",\"options\",\"disabled\"]]],[15,\"placeholder\",[30,0,[\"field\",\"placeholder\"]]],[12],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "kursausschreibung/templates/components/input/input-textarea.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/list-pagination", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "hLNETuxk",
    "block": "[[[41,[30,0,[\"itemsOnCurrentPage\"]],[[[10,0],[14,\"uk-filter\",\"target: .js-filter\"],[12],[1,\"\\n\"],[41,[30,0,[\"filterCodes\"]],[[[1,\"  \"],[10,\"ul\"],[14,0,\"uk-subnav uk-subnav-pill\"],[12],[1,\"\\n    \"],[10,\"li\"],[14,1,\"tagAll\"],[14,0,\"uk-active filter-tag\"],[14,\"uk-filter-control\",\"\"],[12],[10,3],[14,6,\"#\"],[12],[1,[28,[35,1],[\"FilterTagAllEvents\"],null]],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"filterCodes\"]]],null]],null],null,[[[1,\"    \"],[10,\"li\"],[15,1,[29,[\"tag\",[30,1,[\"id\"]]]]],[14,0,\"filter-tag\"],[15,\"uk-filter-control\",[29,[\".tag\",[30,1,[\"id\"]]]]],[12],[10,3],[15,6,[29,[\"#\",[30,1,[\"Code\"]]]]],[12],[1,[30,1,[\"Code\"]]],[13],[13],[1,\"\\n\"]],[1]],null],[1,\"  \"],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[10,0],[14,0,\"uk-grid\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"uk-width-auto@m\"],[12],[1,\"\\n      \"],[10,\"ul\"],[14,0,\"uk-pagination\"],[14,\"data-uk-margin\",\"\"],[12],[1,\"\\n        \"],[10,\"li\"],[12],[1,\"\\n\"],[41,[30,0,[\"isFirstPage\"]],[[[1,\"          \"],[8,[39,4],[[24,0,\"uk-disabled\"]],[[\"@route\",\"@query\"],[[30,0,[\"route\"]],[28,[37,5],null,[[\"page\"],[[30,0,[\"previousPage\"]]]]]]],[[\"default\"],[[[[1,\"\\n                    \"],[10,1],[14,\"data-uk-pagination-previous\",\"\"],[12],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n\"]],[]],[[[1,\"          \"],[8,[39,4],null,[[\"@route\",\"@query\"],[[30,0,[\"route\"]],[28,[37,5],null,[[\"page\"],[[30,0,[\"previousPage\"]]]]]]],[[\"default\"],[[[[1,\"\\n                    \"],[10,1],[14,\"data-uk-pagination-previous\",\"\"],[12],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"        \"],[13],[1,\"\\n\"],[41,[30,0,[\"showFirst\"]],[[[1,\"        \"],[10,\"li\"],[15,0,[52,[33,6,[\"active\"]],\"uk-active\"]],[12],[1,\"\\n          \"],[8,[39,4],null,[[\"@route\",\"@query\"],[[30,0,[\"route\"]],[28,[37,5],null,[[\"page\"],[1]]]]],[[\"default\"],[[[],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[41,[30,0,[\"showLeftDots\"]],[[[1,\"        \"],[10,\"li\"],[14,0,\"uk-disabled\"],[12],[1,\"\\n          \"],[10,1],[12],[1,\"...\"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"pages\"]]],null]],null],null,[[[1,\"        \"],[10,\"li\"],[15,0,[52,[30,2,[\"active\"]],\"uk-active\"]],[12],[1,\"\\n          \"],[8,[39,4],null,[[\"@route\",\"@query\"],[[30,0,[\"route\"]],[28,[37,5],null,[[\"page\"],[[30,2,[\"page\"]]]]]]],[[\"default\"],[[[[1,[30,2,[\"page\"]]]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[2]],null],[41,[30,0,[\"showRightDots\"]],[[[1,\"        \"],[10,\"li\"],[14,0,\"uk-disabled\"],[12],[1,\"\\n          \"],[10,1],[12],[1,\"...\"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[41,[30,0,[\"showLast\"]],[[[1,\"        \"],[10,\"li\"],[15,0,[52,[33,6,[\"active\"]],\"uk-active\"]],[12],[1,\"\\n          \"],[8,[39,4],null,[[\"@route\",\"@query\"],[[30,0,[\"route\"]],[28,[37,5],null,[[\"page\"],[[30,0,[\"lastPage\"]]]]]]],[[\"default\"],[[[[1,[30,0,[\"lastPage\"]]]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[1,\"        \"],[10,\"li\"],[12],[1,\"\\n\"],[41,[30,0,[\"isLastPage\"]],[[[1,\"          \"],[8,[39,4],[[24,0,\"uk-disabled\"]],[[\"@route\",\"@query\"],[[30,0,[\"route\"]],[28,[37,5],null,[[\"page\"],[[30,0,[\"nextPage\"]]]]]]],[[\"default\"],[[[[1,\"\\n                    \"],[10,1],[14,\"data-uk-pagination-next\",\"\"],[12],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n\"]],[]],[[[1,\"          \"],[8,[39,4],null,[[\"@route\",\"@query\"],[[30,0,[\"route\"]],[28,[37,5],null,[[\"page\"],[[30,0,[\"nextPage\"]]]]]]],[[\"default\"],[[[[1,\"\\n                    \"],[10,1],[14,\"data-uk-pagination-next\",\"\"],[12],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"uk-text-right uk-width-expand@m\"],[12],[1,\"\\n      \"],[11,\"button\"],[24,1,\"bt-list\"],[24,\"uk-icon\",\"icon: list\"],[24,4,\"button\"],[4,[38,7],[[30,0],\"list\"],null],[12],[13],[1,\"\\n      \"],[11,\"button\"],[24,1,\"bt-grid\"],[24,\"uk-icon\",\"icon: grid\"],[24,4,\"button\"],[4,[38,7],[[30,0],\"grid\"],null],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"ul\"],[14,1,\"list-cards\"],[14,0,\"uk-list uk-list-divider js-filter\"],[12],[1,\"\\n    \"],[18,4,[[30,0,[\"itemsOnCurrentPage\"]]]],[1,\"\\n  \"],[13],[1,\"\\n        \"],[10,\"ul\"],[14,0,\"uk-pagination\"],[14,\"data-uk-margin\",\"\"],[12],[1,\"\\n        \"],[10,\"li\"],[12],[1,\"\\n\"],[41,[30,0,[\"isFirstPage\"]],[[[1,\"          \"],[8,[39,4],[[24,0,\"uk-disabled\"]],[[\"@route\",\"@query\"],[[30,0,[\"route\"]],[28,[37,5],null,[[\"page\"],[[30,0,[\"previousPage\"]]]]]]],[[\"default\"],[[[[1,\"\\n                    \"],[10,1],[14,\"data-uk-pagination-previous\",\"\"],[12],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n\"]],[]],[[[1,\"          \"],[8,[39,4],null,[[\"@route\",\"@query\"],[[30,0,[\"route\"]],[28,[37,5],null,[[\"page\"],[[30,0,[\"previousPage\"]]]]]]],[[\"default\"],[[[[1,\"\\n                    \"],[10,1],[14,\"data-uk-pagination-previous\",\"\"],[12],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"        \"],[13],[1,\"\\n\"],[41,[30,0,[\"showFirst\"]],[[[1,\"        \"],[10,\"li\"],[15,0,[52,[33,6,[\"active\"]],\"uk-active\"]],[12],[1,\"\\n          \"],[8,[39,4],null,[[\"@route\",\"@query\"],[[30,0,[\"route\"]],[28,[37,5],null,[[\"page\"],[1]]]]],[[\"default\"],[[[],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[41,[30,0,[\"showLeftDots\"]],[[[1,\"        \"],[10,\"li\"],[14,0,\"uk-disabled\"],[12],[1,\"\\n          \"],[10,1],[12],[1,\"...\"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"pages\"]]],null]],null],null,[[[1,\"        \"],[10,\"li\"],[15,0,[52,[30,3,[\"active\"]],\"uk-active\"]],[12],[1,\"\\n          \"],[8,[39,4],null,[[\"@route\",\"@query\"],[[30,0,[\"route\"]],[28,[37,5],null,[[\"page\"],[[30,3,[\"page\"]]]]]]],[[\"default\"],[[[[1,[30,3,[\"page\"]]]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[3]],null],[41,[30,0,[\"showRightDots\"]],[[[1,\"        \"],[10,\"li\"],[14,0,\"uk-disabled\"],[12],[1,\"\\n          \"],[10,1],[12],[1,\"...\"],[13],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[41,[30,0,[\"showLast\"]],[[[1,\"        \"],[10,\"li\"],[15,0,[52,[33,6,[\"active\"]],\"uk-active\"]],[12],[1,\"\\n          \"],[8,[39,4],null,[[\"@route\",\"@query\"],[[30,0,[\"route\"]],[28,[37,5],null,[[\"page\"],[[30,0,[\"lastPage\"]]]]]]],[[\"default\"],[[[[1,[30,0,[\"lastPage\"]]]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[1,\"        \"],[10,\"li\"],[12],[1,\"\\n\"],[41,[30,0,[\"isLastPage\"]],[[[1,\"          \"],[8,[39,4],[[24,0,\"uk-disabled\"]],[[\"@route\",\"@query\"],[[30,0,[\"route\"]],[28,[37,5],null,[[\"page\"],[[30,0,[\"nextPage\"]]]]]]],[[\"default\"],[[[[1,\"\\n                    \"],[10,1],[14,\"data-uk-pagination-next\",\"\"],[12],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n\"]],[]],[[[1,\"          \"],[8,[39,4],null,[[\"@route\",\"@query\"],[[30,0,[\"route\"]],[28,[37,5],null,[[\"page\"],[[30,0,[\"nextPage\"]]]]]]],[[\"default\"],[[[[1,\"\\n                    \"],[10,1],[14,\"data-uk-pagination-next\",\"\"],[12],[13],[1,\"\\n          \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[]],[[[1,[28,[35,1],[\"noResults\"],null]],[1,\"\\n\"]],[]]]],[\"code\",\"p\",\"p\",\"&default\"],false,[\"if\",\"translate\",\"each\",\"-track-array\",\"link-to\",\"hash\",\"p\",\"action\",\"yield\"]]",
    "moduleName": "kursausschreibung/templates/components/list-pagination.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/remaining-seats-badge", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "Yb8Ltxb7",
    "block": "[[[41,[51,[30,0,[\"hidden\"]]],[[[1,\"  \"],[10,1],[15,0,[29,[\"uk-label uk-label-\",[30,0,[\"labelType\"]]]]],[12],[1,[30,0,[\"event\",\"FreeSeats\"]]],[1,\"\\n    \"],[1,[28,[35,1],[[52,[30,0,[\"plural\"]],\"seatsAvailable\",\"seatAvailable\"]],null]],[13],[1,\"\\n\"]],[]],null]],[],false,[\"unless\",\"translate\",\"if\"]]",
    "moduleName": "kursausschreibung/templates/components/remaining-seats-badge.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/status-lamp", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "z8ujkrMa",
    "block": "[[],[],false,[]]",
    "moduleName": "kursausschreibung/templates/components/status-lamp.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/subscription-form", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "p+INu/Q0",
    "block": "[[[10,\"form\"],[14,1,\"subscriptionForm\"],[14,\"autocomplete\",\"on\"],[15,\"onsubmit\",[28,[37,0],[[30,0],\"submit\"],null]],[14,0,\"uk-grid-small uk-form-horizontal\"],[14,\"data-uk-grid\",\"\"],[12],[1,\"\\n  \\n\"],[41,[30,0,[\"showAddressInputs\"]],[[[1,\"    \"],[10,\"fieldset\"],[14,0,\"address-fields uk-width-1-1 uk-fieldset\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"fields\"]]],null]],null],null,[[[1,\"        \"],[8,[39,4],null,[[\"@field\"],[[30,1]]],null],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[30,0,[\"showCompanyButtonOnly\"]],[[[41,[30,0,[\"companyFields\"]],[[[1,\"        \"],[10,\"label\"],[14,0,\"uk-width-1-1\"],[12],[1,\"\\n          \"],[11,\"button\"],[24,3,\"useCompanyAddress\"],[24,0,\"uk-button uk-button-default\"],[16,\"disabled\",[30,0,[\"paymentEnforced\"]]],[24,4,\"button\"],[4,[38,0],[[30,0],\"useCompanyAddress\"],null],[12],[1,\"\\n            \"],[1,[28,[35,5],[\"companyAddress\"],null]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n      \"],[10,\"fieldset\"],[15,\"hidden\",[52,[30,0,[\"useCompanyAddress\"]],false,true]],[15,\"disabled\",[52,[30,0,[\"useCompanyAddress\"]],false,true]],[14,0,\"company-address-fields uk-width-1-1 uk-grid-margin uk-fieldset\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"companyFields\"]]],null]],null],null,[[[1,\"          \"],[8,[39,4],null,[[\"@field\"],[[30,2]]],null],[1,\"\\n\"]],[2]],null],[1,\"      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"uk-width-1-1\"],[12],[1,\"\\n        \"],[10,\"hr\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null]],[]],null],[1,\"\\n\\n\\n  \"],[10,\"fieldset\"],[14,0,\"subscription-detail-fields uk-width-1-1 uk-fieldset\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"subscriptionDetailFields\"]]],null]],null],null,[[[1,\"      \"],[8,[39,4],null,[[\"@field\"],[[30,3]]],null],[1,\"\\n\"]],[3]],null],[1,\"  \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"allowMultiplePeople\"]],[[[1,\"    \"],[10,0],[14,0,\"uk-width-1-1\"],[12],[1,\"\\n      \"],[11,\"button\"],[24,0,\"uk-button uk-button-default\"],[24,4,\"button\"],[4,[38,0],[[30,0],\"addPerson\"],null],[12],[10,1],[14,\"data-uk-icon\",\"icon: plus; ratio: 0.7\"],[12],[13],[1,\" \"],[1,[28,[35,5],[\"addPerson\"],null]],[13],[1,\"\\n\"],[41,[30,0,[\"thereAreAdditionalPeople\"]],[[[1,\"        \"],[11,\"button\"],[24,0,\"uk-button uk-button-default\"],[24,4,\"button\"],[4,[38,0],[[30,0],\"removePerson\"],null],[12],[10,1],[14,\"data-uk-icon\",\"icon: minus; ratio: 0.7\"],[12],[13],[1,\" \"],[1,[28,[35,5],[\"removePerson\"],null]],[13],[1,\"\\n\"]],[]],null],[1,\"      \"],[10,\"hr\"],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"additionalPeople\"]]],null]],null],null,[[[1,\"      \"],[10,\"fieldset\"],[14,0,\"additional-person-fields uk-width-1-1 uk-fieldset\"],[12],[1,\"\\n        \"],[10,\"h3\"],[12],[1,[28,[35,5],[\"person\"],null]],[1,\" \"],[1,[30,4]],[13],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"additionalPeopleFields\"]]],null]],null],null,[[[1,\"          \"],[8,[39,4],null,[[\"@field\"],[[30,5]]],null],[1,\"\\n\"]],[5]],null],[1,\"        \"],[10,\"hr\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[4]],null]],[]],null],[1,\"\\n  \"],[10,0],[14,0,\"uk-width-1-1\"],[12],[1,\"\\n    \"],[10,\"input\"],[14,0,\"uk-button uk-button-primary uk-float-left\"],[15,2,[28,[37,5],[\"subscribe\"],null]],[14,4,\"submit\"],[12],[13],[1,\"\\n    \"],[8,[39,6],[[24,0,\"uk-button uk-button-default uk-float-right\"]],[[\"@route\"],[\"list.category.event\"]],[[\"default\"],[[[[1,[28,[35,5],[\"back\"],null]]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"field\",\"field\",\"field\",\"index\",\"field\"],false,[\"action\",\"if\",\"each\",\"-track-array\",\"input-base\",\"translate\",\"link-to\"]]",
    "moduleName": "kursausschreibung/templates/components/subscription-form.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/components/twitter-feed", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "w1l2C3Mf",
    "block": "[[[10,3],[14,0,\"twitter-timeline\"],[15,\"data-lang\",[36,0]],[14,\"data-height\",\"500\"],[14,\"data-dnt\",\"true\"],[14,\"data-theme\",\"light\"],[15,6,[29,[\"https://twitter.com/\",[36,1]]]],[12],[1,\"Tweets by \"],[1,[34,1]],[13],[1,\"\\n\"],[10,\"script\"],[14,\"async\",\"\"],[14,\"src\",\"https://platform.twitter.com/widgets.js\"],[14,\"charset\",\"utf-8\"],[12],[13],[1,\"\\n\"]],[],false,[\"language\",\"username\"]]",
    "moduleName": "kursausschreibung/templates/components/twitter-feed.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/error", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "JD/xKfvO",
    "block": "[[[10,0],[14,0,\"uk-width-3-4@m center-container uk-margin-bottom\"],[12],[1,\"\\n  \"],[10,1],[14,0,\"uk-text-large uk-text-danger\"],[12],[1,[28,[35,0],[\"errorMessage\"],null]],[13],[1,\"\\n  \"],[10,\"pre\"],[12],[1,[30,0,[\"model\"]]],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"translate\"]]",
    "moduleName": "kursausschreibung/templates/error.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "1e1uWvpy",
    "block": "[[[10,0],[14,0,\"uk-width-3-4@m center-container uk-margin-bottom\"],[12],[1,\"\\n  \"],[10,1],[14,0,\"uk-text-muted\\tuk-text-large\"],[12],[1,[28,[35,0],[\"noEvents\"],null]],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"translate\"]]",
    "moduleName": "kursausschreibung/templates/index.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/list", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "vXdTG7Ih",
    "block": "[[[41,[51,[30,0,[\"eventCategoryDropdown\"]]],[[[1,\"  \"],[10,0],[14,0,\"uk-visible@m uk-width-1-4@m\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"uk-card uk-card-small uk-card-body\"],[12],[1,\"\\n      \"],[1,[28,[35,1],[[30,0,[\"model\"]]],null]],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[10,0],[14,1,\"eventList\"],[15,0,[29,[[30,0,[\"centerWidth\"]],\" center-container uk-margin-bottom\"]]],[12],[1,\"\\n  \"],[46,[28,[37,3],null,null],null,null,null],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"unless\",\"area-navigation\",\"component\",\"-outlet\"]]",
    "moduleName": "kursausschreibung/templates/list.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/list/category", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "tTTPighP",
    "block": "[[[46,[28,[37,1],null,null],null,null,null],[1,\"\\n\"]],[],false,[\"component\",\"-outlet\"]]",
    "moduleName": "kursausschreibung/templates/list/category.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/list/category/event", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "tc0mC20+",
    "block": "[[[46,[28,[37,1],null,null],null,null,null],[1,\"\\n\"]],[],false,[\"component\",\"-outlet\"]]",
    "moduleName": "kursausschreibung/templates/list/category/event.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/list/category/event/confirmation-error", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "y8oyU/iR",
    "block": "[[[10,\"ol\"],[14,1,\"subscriptionProcess\"],[14,0,\"steps uk-margin-bottom\"],[14,5,\"z-index: 980;\"],[14,\"uk-sticky\",\"offset: 0; bottom: #top\"],[12],[1,\"\\n  \"],[10,\"li\"],[14,0,\"step1\"],[12],[1,\"\\n    \"],[10,1],[12],[1,\"\\n      \"],[10,1],[14,0,\"stepIcon\"],[14,\"uk-icon\",\"icon: file-edit; ratio: 1.5\"],[12],[13],[1,\"\\n      \"],[10,1],[14,0,\"stepText\"],[12],[1,[28,[35,0],[\"personalData\"],null]],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"li\"],[14,0,\"stepConnector\"],[12],[1,\"\\n    \"],[10,1],[14,\"uk-icon\",\"icon: chevron-right; ratio: 1.5\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"li\"],[14,0,\"step2 current\"],[12],[1,\"\\n    \"],[10,1],[12],[1,\"\\n      \"],[10,1],[14,0,\"stepIcon\"],[14,\"uk-icon\",\"icon: file-text; ratio: 1.5\"],[12],[13],[1,\"\\n      \"],[10,1],[14,0,\"stepText\"],[12],[1,[28,[35,0],[\"confirmation\"],null]],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,1],[14,0,\"uk-display-block uk-margin-top\"],[12],[1,[28,[35,0],[\"errorMessage\"],null]],[13],[1,\"\\n\"],[10,1],[14,0,\"uk-display-block uk-margin-top uk-text-meta technical-reason\"],[12],[1,[28,[35,0],[\"subscriptionFailed\"],null]],[1,\"\\n  \"],[1,[30,0,[\"model\",\"message\"]]],[13],[1,\"\\n\"],[10,0],[14,0,\"uk-margin\"],[12],[1,\"\\n  \"],[8,[39,1],[[24,0,\"uk-button uk-button-default uk-float-right\"]],[[\"@route\"],[\"list.category.event.subscribe\"]],[[\"default\"],[[[[1,[28,[35,0],[\"backToSubscripton\"],null]]],[]]]]],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"translate\",\"link-to\"]]",
    "moduleName": "kursausschreibung/templates/list/category/event/confirmation-error.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/list/category/event/confirmation-loading", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "ojMGyQHD",
    "block": "[[[10,0],[14,0,\"uk-height-large\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"uk-position-center\"],[12],[1,\"\\n    \"],[10,1],[14,\"data-uk-spinner\",\"\"],[12],[13],[1,\" \"],[10,1],[14,0,\"uk-padding-small\"],[12],[1,[28,[35,0],[\"sendingData\"],null]],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,\"script\"],[12],[1,\"\\n     document.getElementById(\\\"kursausschreibung-root\\\").scrollIntoView({behavior:'smooth'});\\n\"],[13]],[],false,[\"translate\"]]",
    "moduleName": "kursausschreibung/templates/list/category/event/confirmation-loading.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/list/category/event/confirmation", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "5yHFrD4V",
    "block": "[[[10,\"ol\"],[14,1,\"subscriptionProcess\"],[14,0,\"steps uk-margin-bottom\"],[14,5,\"z-index: 980;\"],[14,\"data-uk-sticky\",\"offset: 0; bottom: #top\"],[12],[1,\"\\n  \"],[10,\"li\"],[14,0,\"step1\"],[12],[1,\"\\n    \"],[10,1],[12],[1,\"\\n      \"],[10,1],[14,0,\"stepIcon\"],[14,\"data-uk-icon\",\"icon: file-edit; ratio: 1.5\"],[12],[13],[1,\"\\n      \"],[10,1],[14,0,\"stepText\"],[12],[1,[28,[35,0],[\"personalData\"],null]],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"li\"],[14,0,\"stepConnector\"],[12],[1,\"\\n    \"],[10,1],[14,\"data-uk-icon\",\"icon: chevron-right; ratio: 1.5\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"li\"],[14,0,\"step2 current\"],[12],[1,\"\\n    \"],[10,1],[12],[1,\"\\n      \"],[10,1],[14,0,\"stepIcon\"],[14,\"data-uk-icon\",\"icon: file-text; ratio: 1.5\"],[12],[13],[1,\"\\n      \"],[10,1],[14,0,\"stepText\"],[12],[1,[28,[35,0],[\"confirmation\"],null]],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,\"h2\"],[12],[1,\"\\n\"],[41,[30,0,[\"model\",\"statusIsRed\"]],[[[1,\"    \"],[1,[28,[35,0],[\"thankYouWaitingList\"],null]],[1,\"\\n\"]],[]],[[[1,\"    \"],[1,[28,[35,0],[\"thankYou\"],null]],[1,\"\\n\"]],[]]],[13],[1,\"\\n\\n\"],[10,2],[12],[1,[28,[35,0],[\"youWillReceiveAConfirmationEMail\"],null]],[13],[1,\"\\n\\n\"],[10,2],[12],[1,[28,[35,0],[\"officeAddress\"],null]],[13],[1,\"\\n\\n\"],[41,[30,0,[\"model\",\"tableData\",\"fields\"]],[[[1,\"  \"],[10,\"h2\"],[12],[1,[28,[35,0],[\"yourDetails\"],null]],[13],[1,\"\\n\\n  \"],[10,\"h3\"],[14,0,\"uk-h3\"],[12],[1,[28,[35,0],[\"addressFields\"],null]],[13],[1,\"\\n  \"],[10,\"table\"],[14,0,\"uk-table uk-table-striped uk-margin confirmation-table\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"model\",\"tableData\",\"fields\"]]],null]],null],null,[[[1,\"      \"],[10,\"tr\"],[12],[1,\"\\n        \"],[10,\"td\"],[12],[2,[30,1,[\"label\"]]],[13],[1,\"\\n        \"],[10,\"td\"],[12],[1,[30,1,[\"value\"]]],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[1]],null],[1,\"  \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[30,0,[\"model\",\"tableData\",\"companyFields\"]],[[[1,\"  \"],[10,\"h3\"],[14,0,\"uk-h3\"],[12],[1,[28,[35,0],[\"companyFields\"],null]],[13],[1,\"\\n  \"],[10,\"table\"],[14,0,\"uk-table uk-table-striped uk-margin confirmation-table\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"model\",\"tableData\",\"companyFields\"]]],null]],null],null,[[[1,\"      \"],[10,\"tr\"],[12],[1,\"\\n        \"],[10,\"td\"],[12],[2,[30,2,[\"label\"]]],[13],[1,\"\\n        \"],[10,\"td\"],[12],[1,[30,2,[\"value\"]]],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[2]],null],[1,\"  \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[30,0,[\"model\",\"tableData\",\"subscriptionDetailFields\"]],[[[1,\"  \"],[10,\"h3\"],[14,0,\"uk-h3\"],[12],[1,[28,[35,0],[\"subscriptionDetailFields\"],null]],[13],[1,\"\\n  \"],[10,0],[14,1,\"subscriptionFilesUploadFailed\"],[14,0,\"uk-text-danger\"],[12],[13],[1,\"\\n  \"],[10,\"table\"],[14,0,\"uk-table uk-table-striped uk-margin confirmation-table\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"model\",\"tableData\",\"subscriptionDetailFields\"]]],null]],null],null,[[[1,\"      \"],[10,\"tr\"],[12],[1,\"\\n        \"],[10,\"td\"],[12],[2,[30,3,[\"label\"]]],[13],[1,\"\\n        \"],[10,\"td\"],[12],[1,[30,3,[\"value\"]]],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[3]],null],[1,\"  \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"model\",\"tableData\",\"additionalPeopleFields\"]]],null]],null],null,[[[1,\"  \"],[10,\"h3\"],[14,0,\"uk-h3\"],[12],[1,[28,[35,0],[\"person\"],null]],[1,\" \"],[1,[30,4,[\"index\"]]],[13],[1,\"\\n  \"],[10,\"table\"],[14,0,\"uk-table uk-table-striped uk-margin confirmation-table\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,4,[\"data\"]]],null]],null],null,[[[1,\"      \"],[10,\"tr\"],[12],[1,\"\\n        \"],[10,\"td\"],[12],[1,[30,5,[\"label\"]]],[13],[1,\"\\n        \"],[10,\"td\"],[12],[1,[30,5,[\"value\"]]],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[5]],null],[1,\"  \"],[13],[1,\"\\n\"]],[4]],null],[1,\"\\n\"],[10,0],[14,0,\"uk-margin\"],[12],[1,\"\\n \"],[8,[39,4],[[24,0,\"uk-button uk-button-default uk-float-left\"]],[[\"@route\"],[\"list.category\"]],[[\"default\"],[[[[1,[28,[35,0],[\"backToCourses\"],null]]],[]]]]],[1,\"\\n\"],[13],[1,\"\\n\"],[10,\"script\"],[12],[1,\"\\n  setInterval(function(){\\n    if(window.kursausschreibung.subscriptionFilesUploadFailed !== undefined) {\\n        document.getElementById('subscriptionFilesUploadFailed').innerHTML = window.kursausschreibung.subscriptionFilesUploadFailed;\\n        window.kursausschreibung.subscriptionFilesUploadFailed = undefined;\\n      }\\n  },1500);\\n\"],[13]],[\"field\",\"companyField\",\"subscriptionDetailField\",\"person\",\"personField\"],false,[\"translate\",\"if\",\"each\",\"-track-array\",\"link-to\"]]",
    "moduleName": "kursausschreibung/templates/list/category/event/confirmation.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/list/category/event/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "ZGyBP9AF",
    "block": "[[[41,[30,0,[\"showBreadcrumbs\"]],[[[1,\"  \"],[10,\"ul\"],[14,0,\"uk-breadcrumb\"],[12],[1,\"\\n    \"],[10,\"li\"],[12],[1,\"\\n      \"],[8,[39,1],null,[[\"@route\"],[\"list\"]],[[\"default\"],[[[[1,[30,0,[\"model\",\"AreaOfEducation\"]]]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"li\"],[12],[1,\"\\n      \"],[8,[39,1],null,[[\"@route\"],[\"list.category\"]],[[\"default\"],[[[[1,[30,0,[\"model\",\"EventCategory\"]]]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[10,\"h2\"],[12],[1,\"\\n  \"],[10,1],[14,0,\"uk-flex\"],[12],[1,\"\\n    \"],[10,1],[12],[8,[39,2],null,[[\"@status\"],[[30,0,[\"model\",\"status\"]]]],null],[13],[1,\"\\n    \"],[10,1],[12],[1,[30,0,[\"model\",\"displayData\",\"Designation\"]]],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[41,[30,0,[\"model\",\"subtitle\"]],[[[10,1],[14,0,\"uk-label uk-label-warning uk-margin-small\"],[12],[1,[33,3,[\"subtitle\"]]],[13],[1,\"\\n\"]],[]],null],[8,[39,4],null,[[\"@event\"],[[30,0,[\"model\"]]]],null],[1,\"\\n\\n\"],[41,[30,0,[\"model\",\"externalSubscriptionURL\"]],[[[1,\"  \"],[10,0],[14,0,\"uk-margin\"],[12],[1,\"\\n    \"],[10,3],[15,6,[30,0,[\"model\",\"externalSubscriptionURL\"]]],[14,0,\"uk-button uk-button-primary uk-float-left subscribe-button\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener\"],[12],[1,\"\\n      \"],[1,[28,[35,5],[\"subscribe\"],null]],[1,\"\\n    \"],[13],[1,\"\\n   \"],[8,[39,1],[[24,0,\"uk-button uk-button-default uk-float-right\"]],[[\"@route\"],[\"list.category\"]],[[\"default\"],[[[[1,[28,[35,5],[\"back\"],null]]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],[[[41,[30,0,[\"badgeFreeSeatsEnabled\"]],[[[1,\"    \"],[8,[39,6],null,[[\"@event\"],[[30,0,[\"model\"]]]],null],[1,\"\\n\"]],[]],null],[1,\"  \"],[10,0],[14,0,\"uk-margin\"],[12],[1,\"\\n\"],[41,[30,0,[\"model\",\"canDoSubscription\"]],[[[1,\"      \"],[8,[39,1],[[16,\"data-uk-tooltip\",[28,[37,5],[[28,[37,7],[[30,0,[\"model\",\"status\"]],\"Lamp\"],null]],null]],[24,0,\"uk-button uk-button-primary uk-float-left subscribe-button\"]],[[\"@route\"],[\"list.category.event.subscribe\"]],[[\"default\"],[[[[1,[28,[35,5],[\"subscribe\"],null]]],[]]]]],[1,\"   \\n\"]],[]],[[[1,\"      \"],[10,\"button\"],[15,\"data-uk-tooltip\",[28,[37,5],[[28,[37,7],[[30,0,[\"model\",\"status\"]],\"Lamp\"],null]],null]],[14,\"disabled\",\"\"],[14,0,\"uk-button uk-button-primary uk-float-left subscribe-button\"],[12],[1,[28,[35,5],[\"subscribe\"],null]],[13],[1,\" \\n\"]],[]]],[1,\"    \"],[8,[39,1],[[24,0,\"uk-button uk-button-default uk-float-right\"]],[[\"@route\"],[\"list.category\"]],[[\"default\"],[[[[1,[28,[35,5],[\"back\"],null]]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n\"],[41,[30,0,[\"model\",\"subscriptionWithLoginURL\"]],[[[41,[30,0,[\"model\",\"canDoSubscription\"]],[[[1,\"    \"],[10,0],[14,0,\"uk-margin\"],[12],[1,\"\\n      \"],[10,3],[14,1,\"subscriptionWithLoginURL\"],[15,6,[30,0,[\"model\",\"subscriptionWithLoginURL\"]]],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener\"],[14,0,\"uk-button uk-button-primary uk-float-left subscribeWithLogin-button\"],[15,\"data-uk-tooltip\",[28,[37,5],[[28,[37,7],[[30,0,[\"model\",\"status\"]],\"Lamp\"],null]],null]],[12],[1,[28,[35,5],[\"subscribeWithLogin\"],null]],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null]],[]],null]],[]]]],[],false,[\"if\",\"link-to\",\"status-lamp\",\"model\",\"event-details-table\",\"translate\",\"remaining-seats-badge\",\"concat\"]]",
    "moduleName": "kursausschreibung/templates/list/category/event/index.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/list/category/event/subscribe", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "bGY0l6LT",
    "block": "[[[10,\"h2\"],[12],[1,\"\\n  \"],[10,1],[14,0,\"uk-flex\"],[12],[1,\"\\n    \"],[10,1],[12],[8,[39,0],null,[[\"@status\"],[[30,0,[\"model\",\"status\"]]]],null],[13],[1,\"\\n    \"],[10,1],[12],[1,[30,0,[\"model\",\"displayData\",\"Designation\"]]],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@event\"],[[30,0,[\"model\"]]]],null],[1,\"\\n\"],[10,\"hr\"],[12],[13],[1,\"\\n\\n\"],[10,\"ol\"],[14,1,\"subscriptionProcess\"],[14,0,\"steps uk-margin-bottom\"],[14,5,\"z-index: 980;\"],[14,\"data-uk-sticky\",\"offset: 0; bottom: #top\"],[12],[1,\"\\n  \"],[10,\"li\"],[14,0,\"step1 current\"],[12],[1,\"\\n    \"],[10,1],[12],[1,\"\\n      \"],[10,1],[14,0,\"stepIcon\"],[14,\"data-uk-icon\",\"icon: file-edit; ratio: 1.5\"],[12],[13],[1,\"\\n      \"],[10,1],[14,0,\"stepText\"],[12],[1,[28,[35,2],[\"personalData\"],null]],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"li\"],[14,0,\"stepConnector\"],[12],[1,\"\\n    \"],[10,1],[14,\"data-uk-icon\",\"icon: chevron-right; ratio: 1.5\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,\"li\"],[14,0,\"step2\"],[12],[1,\"\\n    \"],[10,1],[12],[1,\"\\n      \"],[10,1],[14,0,\"stepIcon\"],[14,\"data-uk-icon\",\"icon: file-text; ratio: 1.5\"],[12],[13],[1,\"\\n      \"],[10,1],[14,0,\"stepText\"],[12],[1,[28,[35,2],[\"confirmation\"],null]],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[8,[39,3],null,[[\"@event\",\"@fields\",\"@companyFields\",\"@enableInvoiceAddress\",\"@subscriptionDetailFields\",\"@allowMultiplePeople\",\"@additionalPeopleFields\",\"@userSettings\",\"@showAddressInputs\",\"@showCompanyButtonOnly\",\"@subscribe\"],[[30,0,[\"model\"]],[30,0,[\"fields\"]],[30,0,[\"companyFields\"]],[30,0,[\"enableInvoiceAddress\"]],[30,0,[\"subscriptionDetailFields\"]],[30,0,[\"allowMultiplePeople\"]],[30,0,[\"additionalPeopleFields\"]],[30,0,[\"model\",\"userSettings\"]],[30,0,[\"showAddressInputs\"]],[30,0,[\"showCompanyButtonOnly\"]],[28,[37,4],[[30,0],\"subscribe\"],null]]],null],[1,\"\\n\"]],[],false,[\"status-lamp\",\"event-details-table\",\"translate\",\"subscription-form\",\"action\"]]",
    "moduleName": "kursausschreibung/templates/list/category/event/subscribe.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/list/category/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "I4uIwhPc",
    "block": "[[[10,\"h2\"],[14,1,\"headerCategory\"],[12],[1,[30,0,[\"model\",\"name\"]]],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@events\",\"@page\",\"@queryChanged\",\"@route\"],[[30,0,[\"model\",\"events\"]],[30,0,[\"page\"]],[28,[37,1],[[30,0],\"queryChanged\"],null],\"list.category\"]],null],[1,\"\\n\"]],[],false,[\"event-list\",\"action\"]]",
    "moduleName": "kursausschreibung/templates/list/category/index.hbs",
    "isStrictMode": false
  });
});
;define("kursausschreibung/templates/list/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)({
    "id": "rpyji6CZ",
    "block": "[[[10,\"h2\"],[14,1,\"headerCategory\"],[12],[1,[28,[35,0],[\"overview\"],null]],[13],[1,\"\\n\"],[8,[39,1],null,[[\"@events\",\"@page\",\"@queryChanged\",\"@route\"],[[30,0,[\"model\",\"events\"]],[30,0,[\"page\"]],[28,[37,2],[[30,0],\"queryChanged\"],null],\"list\"]],null],[1,\"\\n\"]],[],false,[\"translate\",\"event-list\",\"action\"]]",
    "moduleName": "kursausschreibung/templates/list/index.hbs",
    "isStrictMode": false
  });
});
;

;define('kursausschreibung/config/environment', [], function() {
  var prefix = 'kursausschreibung';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("kursausschreibung/app")["default"].create({"rootElement":"#kursausschreibung-root","name":"kursausschreibung","version":"3.3.4+75c930b0"});
          }
        
