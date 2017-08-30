"use strict";
console.log('flavors');

app.controller("FlavorCtrl", function ($scope, FlavorFactory) {

    FlavorFactory.getFlavors()
        .then(function (itemCollection) {
            $scope.flavors = itemCollection;
            console.log('flavors from ctrl', $scope.flavors);
        });
    
});

