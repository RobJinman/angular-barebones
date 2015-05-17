angular.module("Controllers")

.controller("MainCtrl", [function() {
  this.square = function(i) {
    return i * i;
  };
}]);
