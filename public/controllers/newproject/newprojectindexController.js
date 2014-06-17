function newprojectindexController($scope, $rootScope, codeswarmService, localStorageService){
$scope.project = {
    repo: $scope.repository,
    branch: $scope.branch,
    public: $scope.public,
    type: $scope.type,
    owners: $scope.ownersArray
};
    $scope.newproject = function(newproject){
        $scope.results = codeswarmService.newproject(newproject);
    }


}