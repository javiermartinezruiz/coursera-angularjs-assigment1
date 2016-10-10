(function () {
  'use strict';
  angular.module('LunchCheck',[]).
  controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.lunch = "";

    $scope.checkIfTooMuch = function(){

      if($scope.lunch==""){
        $scope.message = "Please enter data first.";
      }else{

        var items = split($scope.lunch);
        var size = items.length;

        if(size <= 3){
          $scope.message = "Enjoy it!";
        }else{
          $scope.message = "Too much!";
        }
      }

    };

    function split(lunch){
      var items = lunch.split(",");
      var finalItems = [];
      for(var i=0;i<items.length;i++){
        if(items[i].trim()!=""){
          finalItems.push(items[i]);
        }
      }
      console.log(finalItems);
      return finalItems;
    }

  }

})();
