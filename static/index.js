"use strict";

class Student{
    id;
    name;
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

var mainApp = angular.module("mainApp", []);

mainApp.controller("studentController", function($scope){
    $scope.student = new Student("001", "Shoaib Iqbal");
    $scope.update = function(){
        $scope.student.id = "002";
        $scope.student.name = "Iqbal Ahmad";
    }
});