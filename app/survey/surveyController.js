angular.module("adminsuite").controller("surveyController",['getAllSurveyService', '$scope', function(getAllSurveyService, $scope){
  $scope.header = "Header";
  getAllSurveyService.surveyList().then(
    function( data ) {
        $scope.allSurveys = data;
        console.log($scope.allSurveys);
    }
);
  //console.log($scope.allSurveys);
  //console.log($scope.getSession);
}]);