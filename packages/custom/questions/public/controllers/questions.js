'use strict';

angular.module('mean.questions').controller('QuestionsController', ['$scope', '$stateParams', '$location', 'Global', 'Questions',
  function($scope, $stateParams, $location, Global, Questions) {
    $scope.global = Global;
    $scope.find = function() {
      Questions.query(function(questions) {
        $scope.questions = questions;
      });
    };

    $scope.findRandom = function() {
      Questions.random(function(questions) {
        $scope.questions = questions;
      });
    };

    $scope.evaluateQuiz = function() {
    	$scope.result = 0;
    	angular.forEach($scope.questions, function(q, key) {
		  if(q.answer === q.selected){
    			$scope.result += 1;
    		}
		});
	    $scope.evaluated = true;
    };

  }
]);
