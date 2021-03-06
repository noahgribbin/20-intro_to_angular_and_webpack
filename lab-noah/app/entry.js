'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope) {
  $log.debug('CowsayController');

  let cowsayCtrl = $scope.cowsayCtrl = {};
  // whats goin on on this line?
  // is cowsayCtrl bneing attached onto the $scope object?

  cowsayCtrl.title = 'Welcome to Cowville!';
  cowsayCtrl.speak = function(input) {
    $log.debug('cowsayCtrl.speak');

    return cowsay.say({ text: input || 'moo' });
  };
  cowsayCtrl.input = function(input) {
    $log.debug('cowsayCtrl.input');
    $log.log(input);
  };
}
