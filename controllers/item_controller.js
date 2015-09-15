sampleApp.controller("ItemCtrl",
  ['$scope', 'oldKittenService', function($scope, oldKittenService){

    $scope.items = [ 
      { name: "Item1" },
      { name: "Item2" },
      { name: "Item3" } 
    ]

    $scope.kittens = oldKittenService.getKittens();

    $scope.removeKitten = function( kitten ){
      console.log( "removing kitten " + kitten.name  )
      oldKittenService.removeKitten( kitten );
    }

    $scope.removeOddKittens = function(){
      $scope.kittens = oldKittenService.removeOddKittensBroken();
      // oldKittenService.removeOddKittensFixed();
    }



  }]
);