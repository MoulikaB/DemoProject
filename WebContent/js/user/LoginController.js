
var URI = getURI();
var app = angular.module("MainCtrl", []);


app.controller("MainCtrl",function($scope,$http,$window){
	
	$scope.checkLogin=function(result){
		alert("into checkin");
	if($scope.user_name=="admin" && $scope.password=="Admin"){
		alert("1");
	window.location="WEB-INF/successpage.html";
		//alert("both are correct");
	}	
	else{
		window.location="errorpage.html";
	}
	}
});