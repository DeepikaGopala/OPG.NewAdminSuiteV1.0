window.onpopstate = function (e) { window.history.forward(1); }
require('jquery/dist/jquery.js');

require('bootstrap/dist/css/bootstrap.css');
require('./content/common.css');
require('angular');

require('angular-ui-router/release/angular-ui-router.js');
require('angular-route/angular-route.js');
require('angular-cookies/angular-cookies.js');
//require('normalize.css/normalize.css');
angular.module('adminsuite',['ui.router','ngCookies']).config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('login', {
            url: '/',
            views:{
                pageContent:{
                    templateUrl: 'Login/login3.html',
                    controller: 'loginController'
                },
                footer:{
                    templateUrl: 'common/footer3.html',
                    controller: 'footerController'
                }
            }


          
        })
        .state('login2', {
            url: '/login2',
            views:{
                pageContent:{
                    templateUrl: 'Login/login2.html',
                    controller: 'loginController'
                },
                footer:{
                    templateUrl: 'common/footer3.html',
                    controller: 'footerController'
                }
            }


          
        })
        .state('login3', {
            url: '/login3',
            views:{
                pageContent:{
                    templateUrl: 'Login/login3.html',
                    controller: 'loginController'
                },
                footer:{
                    templateUrl: 'common/footer3.html',
                    controller: 'footerController'
                }
            }


          
        })
        // HOME STATES AND NESTED VIEWS ========================================
        .state('dashboard', {
            url: '/dashboard',
            views:{
                header:{
                    templateUrl: 'common/header.html',
                    controller: 'headerController'
                },
                pageContent:{
                    templateUrl: 'dashboard/dashboard.html',
                      controller: 'dashboardController'
                },
                footer:{
                    templateUrl: 'common/footer.html',
                    controller: 'footerController'
                }
            }
        })
        //SURVEY STATES
        .state('survey', {
            url: '/survey',
            views:{
                header:{
                    templateUrl: 'common/headerTool.html',
                    controller: 'headerController'
                },
                pageContent:{
                    templateUrl: 'survey/survey.html',
                      controller: 'surveyController'
                },
                footer:{
                    templateUrl: 'common/footer.html',
                    controller: 'footerController'
                }
            }
        });
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        
 });
require('./Login/loginController.js');
require('./dashboard/dashboardController.js');
require('./survey/surveyController.js');
require('./common/headerController.js');
require('./common/footerController.js');
require('./services/loginAuthenticationService.js');
require('./services/UserServices.js');
require('./services/getSurveyService.js');


