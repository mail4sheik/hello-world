var app = angular.module("mainApp",['ngRoute'])
/*
app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'index.html'
    })
    .when('/secondform',{
        templateUrl:'templates/secondform.html'
        
    });
}]);*/
app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/secondform', {
                    templateUrl: 'templates/secondform.html'
                    
                }).
                when('/route2', {
                    templateUrl: 'angular-route-template-2.jsp'
                   
                });
        }]);
app.directive("headerDirective",function(){
    return{
        template:"User Name Table"
    };
    
});