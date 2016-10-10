(function () {
  'use strict';
  angular.module('Assigment1App',[]).
  controller('Assignment1Controller', Assignment1Controller);

  Assignment1Controller.$inject = ['$scope'];
  function Assignment1Controller($scope){
    $scope.lunch = "";

    $scope.checkIfTooMuch = function(){

      if($scope.lunch==""){
        $scope.message = "Please enter data first.";
      }else{

        var items = split($scope.lunch);
        var size = items.length;

        console.log(size);

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
