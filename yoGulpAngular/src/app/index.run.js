(function() {
  'use strict';

  angular
    .module('yoGulpAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$rootScope) {
    $rootScope.simpleMessage="This is a global Message";
    $log.debug('runBlock end');
  }

})();
