(function() {
  'use strict';

  angular
    .module('yoGulpAngular')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-full-width';
    toastrConfig.preventDuplicates = false;
    toastrConfig.progressBar = false;
  }

})();