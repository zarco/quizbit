'use strict';

angular.module('mean.questions').factory('Questions', ['$resource',
  function($resource) {
    return $resource('questions/:questionId', {
      todoId: '@_id'
    },
    {
    	random: {
		    url: '/questions/random',
		    method: 'GET',
		    isArray: true
		}
    });
  }
]);

