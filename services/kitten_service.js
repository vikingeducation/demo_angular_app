sampleApp.service('kittenService', function(){
  
  var kittens = [ 
      {name: "kitten1"}, 
      {name: "kitten2"},
      {name: "kitten3"},
      {name: "kitten4"},
      {name: "kitten5"},
      {name: "kitten6"},
    ];

  var getKittens = function(){
    return kittens;
  }

  var removeKitten = function( kitten ){
    var index = kittens.indexOf( kitten );
    kittens.splice( index, 1);
  }


  // BROKEN: This overwrites `kittens` so now
  //   the digest loop has forgotten about it
  var removeOddKittensBroken = function(){
    var newKittens = []
    kittens.forEach( function( kitten ){
      var kittenNum = kitten.name[kitten.name.length - 1];
      if( kittenNum % 2 == 0 ){
        newKittens.push( kitten )
      }
    });
    return newKittens;
  }


  // FIXED: Now we destructively modify the
  //   original collection
  var removeOddKittensFixed = function(){
    kittens.forEach( function( kitten ){
      var kittenNum = kitten.name[kitten.name.length - 1];
      if( kittenNum % 2 != 0 ){
        removeKitten( kitten );
      }
    })
  }


  // Revealing Module Pattern!
  return {
    getKittens: getKittens,
    removeOddKittensBroken: removeOddKittensBroken,
    removeOddKittensFixed: removeOddKittensFixed,
    removeKitten: removeKitten,
  }

});