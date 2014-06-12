var codeswarm = angular.module("codeswarm", ['ngAnimate', 'ngRoute', 'ngResource', 'ngSanitize','restangular', 'LocalStorageModule', 'codeswarmService']).
    config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider.when("/", {templateUrl: '/templates/main.tpl', controller: "mainController"});
        $routeProvider.when("/user/login", {templateUrl: '/templates/user/login.tpl', controller: "loginController"});
        $routeProvider.when("/user/register", {templateUrl: '/templates/user/register.tpl', controller: "registerController"});


        $routeProvider.otherwise("/", {templateUrl: '/templates/main.tpl', controller: "mainController"});

    }]).config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://alien.forever.ninja:1337/**',
            'http://codeswarm.by-a.ninja/**']);
    }).config(function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('codeswarm');
        localStorageServiceProvider.setDefault("urlprefix", "http://alien.forever.ninja:1337");
    });