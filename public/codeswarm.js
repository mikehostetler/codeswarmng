var codeswarm = angular.module("codeswarm", ['ngAnimate', 'ngRoute', 'ngResource', 'ngSanitize', 'restangular', 'LocalStorageModule', 'codeswarmService', 'angularSpinner']).
    config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {

            $routeProvider.when("/", {templateUrl: '/templates/main.tpl', controller: "mainController"});
            $routeProvider.when("/home/", {templateUrl: '/templates/home/index.tpl', controller: "indexController"});
            $routeProvider.when("/home/about", {templateUrl: '/templates/home/about.tpl', controller: "aboutController"});
            $routeProvider.when("/home/search", {templateUrl: '/templates/home/search.tpl', controller: "searchController"});
            $routeProvider.when("/home/support", {templateUrl: '/templates/home/support.tpl', controller: "supportController"});
            $routeProvider.when("/projects/", {templateUrl: '/templates/newproject/index.tpl', controller: "newprojectindexController"});
            $routeProvider.when("/projects/chooserepo", {templateUrl: '/templates/newproject/chooserepo.tpl', controller: "chooserepoController"});
            $routeProvider.when("/projects/choosesource", {templateUrl: '/templates/newproject/choosesource.tpl', controller: "choosesourceController"});
            $routeProvider.when("/projects/choosetype", {templateUrl: '/templates/newproject/choosetype.tpl', controller: "choosetypeController"});
            $routeProvider.when("/org/build", {templateUrl: '/templates/org/build.tpl', controller: "buildController"});
            $routeProvider.when("/org/config", {templateUrl: '/templates/org/config.tpl', controller: "configController"});
            $routeProvider.when("/org/project", {templateUrl: '/templates/org/project.tpl', controller: "projectController"});
            $routeProvider.when("/org/", {templateUrl: '/templates/org/index.tpl', controller: "orgindexController"});
            $routeProvider.when("/user/login", {templateUrl: '/templates/user/login.tpl', controller: "loginController"});
            $routeProvider.when("/user/register", {templateUrl: '/templates/user/register.tpl', controller: "registerController"});
            $routeProvider.when("/user/logout", {templateUrl: '/templates/user/logout.tpl', controller: "logoutController"});
            $routeProvider.when("/user/forgotpassword", {templateUrl: '/templates/user/forgotpassword.tpl', controller: "forgotpasswordController"});
            $routeProvider.when("/user/account", {templateUrl: '/templates/user/account.tpl', controller: "accountController"});
            $routeProvider.when("/user/", {templateUrl: '/templates/user/index.tpl', controller: "orgindexController"});


            $routeProvider.otherwise("/", {templateUrl: '/templates/main.tpl', controller: "mainController"});


            //SCE - security stuff, enable these urls without complaining!
        }]).config(function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://localhost:1337/**',
            'http://codeswarm.by-a.ninja/**']);

        //LOCALSTORAGE - setting up defaults and prefixes
    }).config(function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('codeswarm');
        localStorageServiceProvider.setDefault("urlprefix", "http://localhost:1337");

        //RESTANGULAR - Configuration setting cors
    }).config(function (RestangularProvider) {
        //nothing here yet
    }).config(['$httpProvider', function ($httpProvider) {
        //this enables authentication against the /user endpoint after a user has logged in, verify with this.
        $httpProvider.defaults.withCredentials = true;
    }]);