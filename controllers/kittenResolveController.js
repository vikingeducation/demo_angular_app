sampleApp.controller("KittenResolveCtrl",
  ['$scope', 'kitten', 'kittens', function($scope, kitten, kittens){

    $scope.kittens = kittens;
    $scope.kitten = kitten;

  }]
);