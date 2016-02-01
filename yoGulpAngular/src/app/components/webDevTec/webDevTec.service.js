(function() {
  'use strict';

  angular
      .module('yoGulpAngular')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'Customer Self Service',
        'url': '',
        'description': 'Configuring Customer Self Service',
        'logo': 'angular.png'
      },
      {
        'title': 'Employee Self Service',
        'url': '#/essSetupStarter',
        'description': 'Configuring Employee Self Service',
        'logo': 'browsersync.png'
      },
      {
        'title': 'Vendor Self Service',
        'url': '',
        'description': 'Configuring Vendor Self Service',
        'logo': 'gulp.png'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
