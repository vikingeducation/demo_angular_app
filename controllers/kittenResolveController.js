sampleApp.controller("KittenResolveCtrl",
  ['$scope', 'kitten', 'kittens', 'storage', function($scope, kitten, kittens, storage){

    console.log("Instantiating KittenResolveCtrl");

    $scope.someObj = storage.someObj;

    $scope.kittens = kittens;
    $scope.kitten = kitten;

    // $scope.kittens = "FUBBASFAS";

  }]
);