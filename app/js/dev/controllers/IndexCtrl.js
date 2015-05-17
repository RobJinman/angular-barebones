angular.module("Controllers")

.controller("IndexCtrl", [function() {
  this.foo = function() {
    return "Hello World, from IndexCtrl!";
  };
}]);
