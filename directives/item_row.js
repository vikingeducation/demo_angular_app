sampleApp.directive('itemRow', function(){
  return {
    templateUrl: "directives/item_row.html",
    restrict: "AE",
    scope: {
        item: "="
    }
  };
})
