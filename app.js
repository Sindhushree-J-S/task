
var app = angular.module("myApp",[]);
app.controller("ctr",function($scope , $http){
 
$scope.removePlayer=function(player){
    var removedPlayer=$scope.players.indexOf(player);
    $scope.players.splice(removedPlayer,1);
}

$scope.addPlayer=function(){
    $scope.players.push({
        name:$scope.newName,
        id:$scope.newId,
        runs:$scope.newRuns


    })
};
$http.get("data.json").then(function(item){
    $scope.players = item.data;
});
})