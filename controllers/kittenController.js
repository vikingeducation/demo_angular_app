sampleApp.controller("KittenCtrl",
  ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){

    $scope.kittenId = $stateParams.kittenId;

    // Retrieve a sample Kitten from reqr.es
    // Immediately start loading this when the
    //   controller is instantiated
    if( $scope.kittenId ){
      console.log( "Retrieving Kitten!");
      $http.
        get( "http://reqr.es/api/kittens/" + $scope.kittenId ).
        then( function( response ){
            var data = response.data.data;
            console.log( data );
            $scope.kitten = { name: data.name, id: data.id }
            console.log( $scope.kitten );
          }, function( data ){
            console.log( "ERROR!" );
            $scope.kitten = undefined;
          }
        ); 

    }


    // Retrieve a sample Kitten from reqr.es
    // Immediately start loading this when the
    //   controller is instantiated
    $http.
      get( "http://reqr.es/api/kittens" ).
      then( function( response ){
          $scope.kittens = []

          // Cycle through the returned kittens
          //   and set their properties
          response.data.data.forEach( function( el ){
            var kitten = { name: el.name, id: el.id }
            $scope.kittens.push( kitten )
          })
        }, function( data ){
          console.log( "ERROR!" );
        }
      ); 


  }]
);