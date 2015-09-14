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


    // Our kittens index
    .state('kittens', {
      url: '/kittens',
      templateUrl: 'templates/kittens.html',
      controller:  'KittenCtrl',
    })


    // Our specific kitten
    .state('kittens.show', {
      url: '/:kittenId',
      templateUrl: 'templates/kitten.html',
      controller:  'KittenCtrl',
      // parent: 'kittens'
    })
});