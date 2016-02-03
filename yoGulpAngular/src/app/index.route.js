(function() {
  'use strict';

  angular
    .module('yoGulpAngular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('essSetupStarter', {
        url:'/essSetupStarter',
        templateUrl: 'app/xssSetup/essSetup/EssSetupStarter.html',
        controller: 'EssSetupStarterController',
        controllerAs: 'EssSetupStarter'
      })
      .state('essSetupSummary', {
        url:'/essSetupSummary',
        templateUrl: 'app/xssSetup/essSetup/EssSummary.html',
        controller: 'EssSetupSummaryController',
        controllerAs: 'EssSetupSummary'
      })
      .state('essCUConnectionSetup', {
        url:'/essCUConnectionSetup',
        templateUrl: 'app/xssSetup/essSetup/CUConnectionSetup.html',
        controller: 'EssCUConnectionSetupController',
        controllerAs: 'EssCUConnectionSetup'
      })
      .state('essHRConnectionSetup', {
        url:'/essHRConnectionSetup',
        templateUrl: 'app/xssSetup/essSetup/HRConnectionSetup.html',
        controller: 'EssHRConnectionSetupController',
        controllerAs: 'EssHRConnectionSetup'
      })
      .state('essCognosSetup', {
        url:'/essCognosSetup',
        templateUrl: 'app/xssSetup/essSetup/CognosSetup.html',
        controller: 'EssCognosSetupController',
        controllerAs: 'EssCognosSetup'
      })
      .state('essMiscSetup', {
        url:'/essMiscSetup',
        templateUrl: 'app/xssSetup/essSetup/MiscSetup.html',
        controller: 'EssMiscSetupController',
        controllerAs: 'EssMiscSetup'
      })
      .state('essPortalStatSetup',{
        url:'/essPortalStatSetup',
        templateUrl: 'app/xssSetup/essSetup/PortalStatSetup.html',
        controller: 'EssPortalStatSetupController',
        controllerAs: 'EssPortalStatSetup'
      })
      .state('essTimeEntrySetup',{
        url:'/essTimeEntrySetup',
        templateUrl: 'app/xssSetup/essSetup/TimeEntrySetup.html',
        controller: 'EssTimeEntrySetupController',
        controllerAs: 'EssTimeEntrySetup'
      })
      .state('essMessageProperties',{
        url:'/essMessageProperties',
        templateUrl:'app/xssSetup/essSetup/MessageProperties.html',
        controller:'EssMessagePropertiesController',
        controllerAs:'EssMessageProperties'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
