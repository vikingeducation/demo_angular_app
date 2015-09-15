sampleApp.service('kittenService', ['$http', function( $http ){


  // This returns a promise with `then` callbacks
  //   already specified
  var getKitten = function( id ){
    return $http.get( "http://reqr.es/api/kittens/" + id ).
      then( function( response ){
        var data = response.data.data;
        return { name: data.name, id: data.id }
      }, function(){
        console.log("FAIL");
        return undefined
      })
  }


  // This returns a promise with `then` callbacks
  //   already specified
  var allKittens = function(){
    return $http.get( "http://reqr.es/api/kittens" ).
      then( function( response ){
        var kittens = []

        // Cycle through the returned kittens
        //   and set their properties
        response.data.data.forEach( function( el ){
          kittens.push( { name: el.name, id: el.id } )
        })

        return kittens;

      }, function(){
        console.log("FAIL");
        return undefined
      })
  }


  // Revealing Module Pattern!
  return {
    getKitten: getKitten,
    allKittens: allKittens,
  }

}]);