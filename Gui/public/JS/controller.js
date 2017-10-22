var app = angular.module('CardsAgainst', ['ngRoute']);
// var socket = io();


app.config(["$routeProvider", function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "TEMPLATES/home.html"
    })
    .when('/cardsAgainstHummanity', {
      templateUrl: "TEMPLATES/cardsAgainstHummanity.html"
    })
    .otherwise({
      templateUrl: "/poop"
    })
}]);

app.controller('homeViewController', ($scope) => {
  console.log("homeView")
})


//===============================================================
//=== White Card Controller =====================================
//===============================================================

app.controller('CardsAgainstHummanityController', ($scope) => {

  socket.emit("startGame")
  socket.on("gameCode",(msg)=>{
    // send code to gui
    console.log(msg)
    $scope.gameCode = msg;
    $scope.$apply(()=>{console.log('applied')});
    $scope.gameCode = "XXXX";
  })
});


//===============================================================
//=== Bottom Nav Controller =====================================
//===============================================================
