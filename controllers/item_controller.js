sampleApp.controller("ItemCtrl",
  ['$scope', 'kittenService', function($scope, kittenService){

    $scope.items = [ 
      { name: "Item1" },
      { name: "Item2" },
      { name: "Item3" } 
    ]

    $scope.kittens = kittenService.getKittens();

    $scope.removeKitten = function( kitten ){
      console.log( "removing kitten " + kitten.name  )
      kittenService.removeKitten( kitten );
    }

    $scope.removeOddKittens = function(){
      $scope.kittens = kittenService.removeOddKittensBroken();
      // kittenService.removeOddKittensFixed();
    }



  }]
);