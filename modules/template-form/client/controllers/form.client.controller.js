(function() {
  'use strict';

  angular
    .module('templateform')
    .controller('FormController', FormController);

  FormController.$inject = ['$scope', 'FormService', 'FileSaver', 'Blob'];

  function FormController($scope, FormService, FileSaver, Blob) {
    var vm = this;

    init();

    function init() {
      $scope.querying = false;
      $scope.query = function(formQuery) {
        $scope.querying = true;
        delete formQuery.data;
        formQuery.$query(function (response) {
          $scope.querying = false;
          var blob = new Blob([response.data], { type: 'text/plain;charset=utf-8' });
          var fileNameParts = [
            formQuery.select,
            formQuery.date,
            formQuery.text,
          ].filter(function(part) { return part !== undefined && part !== ''; });
          FileSaver.saveAs(blob, fileNameParts.join('-') + '.csv');
        }, function (errorResponse) {
          $scope.querying = false;
          console.log(errorResponse);
        });
      };

      var oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

      $scope.form = new FormService({
        select: 'Option 1',
        date: new Date(),
        text: '',
      });
    }
  }
})();
