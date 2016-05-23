(function () {
    'use strict';

  angular
      .module('angluardjango.authentication', ['angluardjango.authentication.controllers','angluardjango.authentication.services']);

  angular
      .module('angluardjango.authentication.controllers', []);

  angular
      .module('angluardjango.authentication.services', ['ngCookies']);
})();