var Shared;
(function (Shared) {
  var FileImportOverlayComponent = (function () {
    function FileImportOverlayComponent() {
        this.template = "<select kendo-combo-box k-options=\"comboBoxOptions\"></select>";
        this.bindings = {
        };
        this.controller = FileImportOverlayController;
      }
      return FileImportOverlayComponent;
    }());

    var FileImportOverlayController = (function () {
      function FileImportOverlayController($scope) {
          var _this = this;
          this.$scope = $scope;

          _this.$scope.comboBoxOptions = {
            dataSource: [
              'val1',
              'val2'
            ]
          };
      }
      return FileImportOverlayController;
  }());
  FileImportOverlayController.$inject = ['$scope'];
  var module = angular.module('PreShared', ['kendo.directives']);
  module.component('preFileImportOverlay', new FileImportOverlayComponent ());
})(Shared || (Shared = {}));
