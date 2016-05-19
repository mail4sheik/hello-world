var firstmodule;
(function (firstmodule) {
    // (function state1controller(){
    // scopeVal.items = ["A","List","Of","items"];
    var app = angular.module("mainApp", ['ngRoute', 'ui.router']);
    app.config(['$routeProvider', '$stateProvider', '$urlRouterProvider',
        function ($routeProvider, $stateProvider, $urlRouterProvider) {
            $routeProvider.
                when('/secondform', {
                templateUrl: 'templates/secondform/secondform.html'
            }).
                when('/thirdform', {
                templateUrl: 'templates/thirdform/thirdform.html'
            })
                .otherwise({
                templateUrl: 'templates/fourthform/fourthform.html'
            });
            $stateProvider
                .state('state1', {
                url: "/state1",
                templateUrl: "states/state1.html"
            })
                .state('state2', {
                url: "/state2",
                templateUrl: "states/state2.html"
            })
                .state('state1.list', {
                url: "/list",
                templateUrl: "states/state1.list.html",
                controller: function ($scope) { $scope.items = ["A", "List", "Of", "items"]; }
            });
        }]);
})(firstmodule || (firstmodule = {}));
//# sourceMappingURL=mainmodule.js.map