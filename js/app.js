angular.module('Blog',['ui.router','ui.bootstrap'])
.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
      $stateProvider
      .state('home',{
         url: '/',
         templateUrl:'views/home.html'
      })
      .state('articles',{
         url: '/articles',
         templateUrl:'views/articles.html'
      })
      .state('signup',{
         url:'/signup',
         templateUrl:'views/signup.html'
      })
      .state('login',{
         url:'/login',
         templateUrl:'views/login.html'
      })
       $urlRouterProvider.otherwise("/");
   }]);
