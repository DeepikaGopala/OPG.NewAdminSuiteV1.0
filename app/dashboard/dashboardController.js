require("../styles/dashboard/dashboard.less");
  angular
        .module('adminsuite')
        .controller('dashboardController', ['AuthenticationService','$scope','$rootScope', '$state', function(AuthenticationService, $scope,$rootScope, $state) {

        	 if($state.current.name != 'login'){
                      $rootScope.bgGround = 'bgBlank';
                      $rootScope.footerbgGround = 'bgFooter';
             }
		        $scope.logout = function(){
		            //$scope.dataLoading = true;
		            AuthenticationService.ClearCredentials();
		            console.log($cookieStore.get('globals'));
		            //$state.go('login');
		        };
 		}
 ]);

// angular
//         .module('adminsuite').controller('defaultController', ['$scope', '$state', function($state,$scope){
//  if($state.current.name !== 'login'){
//                      $scope.backGround = 'bgBlank';
//                     }
// }]);