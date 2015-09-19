sampleApp.filter('unique', function() {

  // Take in the collection and which field
  //   should be unique
  // We assume an array of objects here
  // NOTE: We are skipping any object which
  //   contains a duplicated value for that
  //   particular key.  Make sure this is what
  //   you want!
  return function (arr, targetField) {

    var values = [],
        i, 
        unique,
        l = arr.length, 
        results = [],
        obj;

    // Iterate over all objects in the array
    // and collect all unique values
    for( i = 0; i < arr.length; i++ ) {

      obj = arr[i];

      // check for uniqueness
      unique = true;
      for( i = 0; i < values.length; i++ ){
        if( obj[targetField] == values[i] ){
          unique = false;
        }
      }

      // If this is indeed unique, add its
      //   value to our values and push
      //   it onto the returned array
      if( unique ){
        values.push( obj[targetField] );
        results.push( obj );
      }
     
    }
    return results;
  };
})


  // // ARRAY ONLY VERSION
  // // Problem: You can't even use an `ng-repeat`
  // //   with a duplicate element in the first place.
  // return function (arr) {

  //   var uniques = [],
  //       unique;

  //   for( var i = 0; i < arr.length; i++ ){

  //     // Check for uniqueness of the element
  //     //   in the uniques array
  //     unique = true;
  //     for( el in uniques ){
  //       if( el == arr[i] ){
  //         unique = false;
  //       }
  //     }

  //     // If it's unique, add to uniques
  //     uniques.push( arr[i] );
  //   }
  //   return uniques;