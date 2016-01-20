angular.module('Blog',['ui.router','ui.bootstrap'])
.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
      $stateProvider
      .state('home',{
          url: '/',
          templateUrl:'views/home.html',
          controller: 'homeCtrl'
      })
      .state('articles',{
          url: '/articles',
          templateUrl:'views/articles.html'
      })
      .state('viewArticle', {
          url: '/articles/:id',
          templateUrl: 'views/view-article.html'
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
