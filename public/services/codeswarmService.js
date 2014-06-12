var css = angular.module('codeswarmService', ['restangular', 'LocalStorageModule']);

css.service('codeswarmService', ['Restangular', 'localStorageService', function (Restangular,localStorageService) {
    //set the prefix for the urls to refrence the craptacular sails server
    console.log("SERVICE RUNNING");
    console.log("localstorage: ", localStorageService.get('urlprefix'));
    var url_prefix = localStorageService.get('urlprefix')


    this.login = function(user,pass){
        var userlogin = Restangular.allUrl(url_prefix+'/auth/local');

        userlogin.post({identifier: user, password: pass});

    }

}]);