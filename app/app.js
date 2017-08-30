'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('IceCreamApp', ['ngRoute']
)
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/greetings.html'
            })
            .when('/showall', {
                templateUrl: 'partials/flavor-list.html',
                controller: 'FlavorCtrl'
            })
            .when('/cream', {
                templateUrl: 'partials/cream.html',
                controller: 'FlavorCtrl'
            })
            .when('/sherbet', {
                templateUrl: 'partials/sherbet.html',
                controller: 'FlavorCtrl'
            })
            .otherwise('/');
    });
