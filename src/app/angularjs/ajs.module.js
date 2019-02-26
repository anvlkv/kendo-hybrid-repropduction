var Shared;
(function (Shared) {
  var FileImportOverlayComponent = (function () {
    function FileImportOverlayComponent() {
        this.template = "<h2>directly</h2><select kendo-combo-box k-options=\"comboBoxOptions\"></select><br><h2>wrapper</h2><app-combo-wrapper [options]=\"comboBoxOptions\" [id]=\"some_id\"></app-combo-wrapper>";
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
            ],
            filter: 'contains',
            filtering: function(e) {
              alert(e.filter.value);
            }
          };
      }
      return FileImportOverlayController;
  }());
  FileImportOverlayController.$inject = ['$scope'];
  var module = angular.module('PreShared', ['kendo.directives']);
  module.component('preFileImportOverlay', new FileImportOverlayComponent ());
})(Shared || (Shared = {}));
