function loginController($scope, $rootScope, codeswarmService){


    codeswarmService.login($scope.username, $scope.password);


}