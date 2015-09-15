sampleApp.directive('itemRow', function(){
  return {
    templateUrl: "directives/itemRowTemplate.html",
    restrict: "AE",
    scope: {
        item: "="
    }
  };
})
