var css = angular.module('codeswarmService', ['ngResource', 'LocalStorageModule']);

css.service('codeswarmService', ['$rootScope', '$resource', 'localStorageService', function ($rootScope, $resource, localStorageService) {
    //set the prefix for the urls
    var url_prefix = localStorageService.get('urlprefix');

    //setting up the $resource object with endpoint and methods

    var user = $resource(url_prefix + "/:action", {action: "@action"});

    function connector(url) {
        return $resource(url_prefix + url,
            {action: "@action"}, {
                login: {
                    method: 'POST',
                    params: {}
                },
                logout:{
                    method: 'GET',
                    params: {}
                },
                read: {
                    method: 'GET',
                    params: {}
                },
                register: {
                    method: 'POST',
                    params: {}
                },
                user: {
                    method: 'GET',
                    params: {}
                },
                projects:{
                    method: 'GET',
                    params: {}
                },
                newproject:{
                    method: 'POST',
                    params: {}
                }
            });
    }


    this.login = function (user, pass) {
        return connector("/auth/local").login({identifier: user, password: pass}).$promise;
    };

    this.logout = function () {
        connector("/logout").logout().$promise.then(function(data){
            localStorageService.remove("userdata");
        });
    };

    this.loggedin = function (username) {
        connector("/user").user().$promise.then(function(data){
            console.log("USER DATA: ", data);
            localStorageService.set("user", data);
        });
    };

    this.userExists = function(username){
        connector("/user/:action").read({action: username}).$promise.then(function (data) {
            console.log("DATA FROM AUTH LOCAL: ", data);
            localStorageService.set("authlocal", data);
            return true;
        });
    };

    this.createUser = function (username, email, password) {
        return connector("/auth/local/register").register({
            'username': username,
            'email': email,
            'password': password
        }).$promise;
    };

    this.getCurrentUser = function(){
        return localStorageService.get("user").user.id;
    };

    this.newproject = function(newproject){
        return connector("/projects").newproject(newproject).$promise;
    };

    this.tryGetAllProjects = function(){
        return connector("/projects").projects().$promise;
    };

    return this;


}]);