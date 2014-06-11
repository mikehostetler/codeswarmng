var codeswarm = angular.module("codeswarm", ['ngAnimate', 'ngRoute', 'ngResource']).
    config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider.when("/", {templateUrl: '/templates/main.tpl', controller: "mainController"});
        $routeProvider.when("/login", {templateUrl: '/templates/login.tpl', controller: "loginController"});
        $routeProvider.otherwise("/", {templateUrl: '/templates/main.tpl', controller: "mainController"});

    }]);