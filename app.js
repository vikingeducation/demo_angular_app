var sampleApp = angular.module('sampleApp', ['ui.router']);

sampleApp.config(function($stateProvider, $urlRouterProvider){
  
  // Set our root / default path
  $urlRouterProvider.otherwise("/default");

  $stateProvider

    // A default state
    .state('default', {
      url: '/default',
      controller:  'KittenCtrl',
      views: {
        '': {
          templateUrl: 'templates/default.html',
        },
        'filters@default': {
          templateUrl: 'templates/reportFilters.html'
        }
      }
    })

    .state('dashboard',{
      url: '/dashboard',
      // templateUrl: 'templates/dashboard.html',
      controller: function($scope){ console.log(" /dashboard")},
      // templateUrl: 'templates/dashboard.html',
      views: {
        '': {
          templateUrl: 'templates/dashboard.html',
          controller: function(){ console.log( "unnamed view")}
        },
        // 'filters': {
        //   templateUrl: 'templates/reportFilters.html',
        //   controller: function($scope){ console.log("FILTERS") }
        // },
        // 'tabledata': {
        //   templateUrl: 'templates/reportTable.html',
        //   controller: function($scope){ console.log("TABLE DATA") }
        // },
        // 'graph': {
        //   templateUrl: 'templates/reportGraph.html',
        //   controller: function($scope){ console.log("GRAPH") }
        // }
      }
    })

    .state('dashboard.reports', {
      url: '/reports',
      views: {
        '': {
          templateUrl: 'templates/reports.html'
        },
        'filters': {
          templateUrl: 'templates/reportFilters.html',
          controller: function($scope){ console.log("FILTERS") }
        },
        'tabledata': {
          templateUrl: 'templates/reportTable.html',
          controller: function($scope){ console.log("TABLE DATA") }
        },
        'graph@dashboard.reports': {
          templateUrl: 'templates/reportGraph.html',
          controller: function($scope){ console.log("GRAPH") }
        }
      }
    })


    // ************* RESOLVED *************** 
    // Our kittens index
    .state('kittens', {
      url: '/kittens',
      // templateUrl: 'templates/kittens.html',
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
      },
      views: {
        '': {
          controller:  'KittenResolveCtrl',
          templateUrl: "templates/kittens.html",
        },
        'sidebar': {
          controller:  'KittenResolveCtrl',
          templateUrl: "templates/sidebar.html"
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



    // ************* UNRESOLVED *************** 
    // Our kittens index
    // .state('kittens', {
    //   url: '/kittens',
    //   templateUrl: 'templates/kittens.html',
    //   controller:  'KittenCtrl',
    // })


    // // Our specific kitten
    // .state('kittens.show', {
    //   url: '/:kittenId',
    //   templateUrl: 'templates/kitten.html',
    //   controller:  'KittenCtrl',
    // })

});