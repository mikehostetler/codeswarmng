function logoutController($scope, $rootScope, codeswarmService){
    $scope.credentials = { "username": "", "identifier":"" };
    $scope.login = function(credentials){
        //simple yet effective
        codeswarmService.login(credentials.username, credentials.password);
    }
}