/**
 * Register controller
 * @namespace angluardjango.authentication.controllers
 */
(function () {
    'use strict';

  angular
      .module('angluardjango.authentication.controllers')
      .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', '$scope', 'Authentication'];

  /**
   * @namespace RegisterController
   */
  function RegisterController($location, $scope, Authentication) {
      var vm = this;

      vm.register = register;

      /**
       * @name register
       * @desc Register a new user
       * @memberOf angluardjango.authentication.controllers.RegisterController
       */
      function register() {
	  Authentication.register(vm.email, vm.password, vm.username);
      }
  }
})();