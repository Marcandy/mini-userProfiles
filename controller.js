angular.module('userProfiles').controller('MainController', function($scope, mainServ){



    $scope.getUsers = function () {
      $scope.users = mainServ.getUsers();
      return $scope.users;
    }

    $scope.getUsers();
    $scope.toggleFavorite = mainServ.toggleFavorite;
})
