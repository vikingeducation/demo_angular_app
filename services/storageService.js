sampleApp.service('storage', function(){

  var _someObj = {
    someVar: "foo"
  };





  // var _foo = "bar";

  // var getFoo = function(){
  //   return _foo;
  // }
  // var setFoo = function( newFoo ){
  //   console.log( "SETTING FOO" );
  //   return _foo = newFoo;
  // }


  // Revealing Module Pattern!
  return {
    // getFoo: getFoo,
    // setFoo: setFoo,
    someObj: _someObj,
  }

});