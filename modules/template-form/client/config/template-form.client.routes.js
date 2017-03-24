(function () {
  'use strict';

  //Setting up route
  angular
    .module('templateform')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    // Adjust state routing
    $stateProvider
      .state('templateform', {
        abstract: true,
        url: '/template-form',
        template: '<ui-view/>'
      })
      .state('templateform.form', {
        url: '/default',
        templateUrl: 'modules/template-form/client/views/form.client.view.html',
        controller: 'FormController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
})();
