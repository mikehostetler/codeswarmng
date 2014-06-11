function mainController($scope, $rootScope){
    $scope.url_prefix = $rootScope.url_prefix;

    console.log("ROOTSCOPE: ", $rootScope);
}