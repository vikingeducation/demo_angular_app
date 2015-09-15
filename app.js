var sampleApp = angular.module('sampleApp', ['ui.router']);

sampleApp.config(function($stateProvider, $urlRouterProvider){
  
  // Set our root / default path
  $urlRouterProvider.otherwise("/default");

  $stateProvider

    // A default state
    .state('default', {
      url: '/default',
      templateUrl: 'templates/default.html',
      controller:  'KittenCtrl',
    })


    // ************* UNRESOLVED *************** 
    // Our kittens index
    // .state('kittens', {
    //   url: '/kittens',
    //   templateUrl: 'templates/kittens.html',
    //   controller:  'KittenCtrl',
    // })


    // // Our specific kitten (nested)
    // .state('kittens.show', {
    //   url: '/:kittenId',
    //   templateUrl: 'templates/kitten.html',
    //   controller:  'KittenCtrl',
    // })


    // ************* RESOLVED *************** 
    // Our kittens index
    .state('kittens', {
      url: '/kittens',
      templateUrl: 'templates/kittens.html',
      controller:  'KittenResolveCtrl',
      resolve: {
        kittens: function( kittenService ){
          // The `kittenService.allKittens` method
          //   returns a promise, like all `$http`
          //   methods
          return kittenService.allKittens();
        },

        // Make sure we've set our Kitten, even though
        //    we don't need it for this view, because
        //    the controller will otherwise get very mad.
        kitten: function(){
          return undefined;
        }
      }
    })


    // Our specific kitten
    .state('kittens.show', {
      url: '/:kittenId',
      templateUrl: 'templates/kitten.html',
      controller:  'KittenResolveCtrl',
      resolve: {
        // We do NOT need `kittens` because it is inherited
        //    from the parent 'kittens' route.
        // We DO need to override our individual kitten
        kitten: function( $stateParams, kittenService ){

          // `kittenService.find` also returns a promise
          return kittenService.getKitten( $stateParams.kittenId );
        },
      }
    })


});