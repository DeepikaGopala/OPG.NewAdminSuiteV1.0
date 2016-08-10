//require('../styles/login/login.less');
//require('../styles/login/login2.less');
require('../styles/login/login3.less');



angular.module('adminsuite')
        .controller('loginController', ['AuthenticationService', '$scope', '$rootScope','$state', function(AuthenticationService, $scope,$rootScope, $state) {
              console.log($state.current.name);
             if($state.current.name == 'login'){
                      $rootScope.bgGround = 'bgImage';
                      $rootScope.footerbgGround = '';
             }
             console.log($rootScope.bgGround);
        $scope.login = function(){
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    console.log('Login successful');
                  //  $rootScope.state = true;
                    $state.go('dashboard');
                } else {
                    console.log(response.message);
                    $scope.dataLoading = false;
                   // $rootScope.state = false;
                }
            });
        };
 
        
 
        
    }
 ]);


