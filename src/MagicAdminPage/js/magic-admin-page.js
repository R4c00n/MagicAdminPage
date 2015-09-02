(function() {
  'use strict';
  var MagicAdminPage = (function() {
    var self = void 0,
      _initEvents;

    function MagicAdminPage() {
      self = this;
      self.languageToggleEls = document.getElementsByClassName( 'magic-admin-page-language-toggle');
      _initEvents();
    }

    _initEvents = function() {
      if ( self.languageToggleEls.length ) {
        var i,
          languageToggleEl;
        for (i = 0; i < self.languageToggleEls.length; i++) {
          languageToggleEl = self.languageToggleEls[i];
          languageToggleEl.addEventListener('click', self.onLanguageToggleClick);
        }
      }
    };

    MagicAdminPage.prototype.onLanguageToggleClick = function(e) {
      e.preventDefault();
      var fieldWrapper = this.parentElement.parentElement,
        language,
        fields;
      language = this.getAttribute('data-language');
      fields = fieldWrapper.getElementsByClassName('magic-admin-page-field');
      if (fields.length) {
        var i,
          field;
        for (i = 0; i < fields.length; i++) {
          field = fields[i];
          if (field.classList.contains('magic-admin-page-field-' + language)) {
            field.classList.remove('hidden');
          } else {
            field.classList.add('hidden');
          }
        }
      }
    }

    return MagicAdminPage;
  })();

  document.addEventListener('DOMContentLoaded', function() {
    new MagicAdminPage();
  });
}).call(this);