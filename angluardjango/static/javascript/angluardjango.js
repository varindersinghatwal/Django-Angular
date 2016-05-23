(function () {
    'use strict';

    angular.module('angluardjango', ['angluardjango.routes', 'angluardjango.authentication', 'angluardjango.config']);

    angular.module('angluardjango.routes', ['ngRoute']);
    
    angular.module('thinkster.config', []);

    angular
	.module('thinkster')
	.run(run);

    run.$inject = ['$http'];

    /**
     * @name run
     * @desc Update xsrf $http headers to align with Django's defaults
     */
    function run($http) {
	$http.defaults.xsrfHeaderName = 'X-CSRFToken';
	$http.defaults.xsrfCookieName = 'csrftoken';
    }

})();