var css = angular.module('codeswarmService', ['ngResource', 'LocalStorageModule']);

css.service('codeswarmService', ['$resource', 'localStorageService', function ($resource, localStorageService) {
    //set the prefix for the urls
    var url_prefix = localStorageService.get('urlprefix');

    //setting up the $resource object with endpoint and methods
    var auth = $resource(url_prefix + "/auth/local",
        {}, {
            login: {
                method: 'POST',
                params: {}
            }
        });

    var user = $resource(url_prefix + "/:action", {action:"@action"});

    this.login = function (user, pass) {
        auth.login({identifier: user, password: pass}).$promise.then(function (logindata) {
            localStorageService.set("userdata", logindata);
        });
    };

    this.logout = function () {
        var loggedout = user.get({action: "/logout"}, function(data){
            localStorageService.remove("userdata");
        });

    }

    return this;


}]);