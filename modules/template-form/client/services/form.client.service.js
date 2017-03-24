(function () {
  'use strict';

  angular
    .module('templateform')
    .factory('FormService', FormService);

  FormService.$inject = ['$resource'];

  function FormService($resource) {
    // Public API
    var formResource = $resource('templateform/reports/form', {}, {
      query: {
        method: 'POST'
      }
    });
    return formResource;
  }
})();
