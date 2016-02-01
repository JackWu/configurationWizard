(function() {
  'use strict';

  angular
    .module('yoGulpAngular')
    .controller('EssSetupStarterController',  EssSetupStarterController)
    .controller('EssHRConnectionSetupController', EssHRConnectionSetupController)
    .controller('EssCUConnectionSetupController', EssCUConnectionSetupController)
    .controller('EssCognosSetupController', EssCognosSetupController)
    .controller('EssSetupSummaryController', EssSetupSummaryController)
    .controller('EssMiscSetupController', EssMiscSetupController)
    .controller('EssPortalStatSetupController', EssPortalStatSetupController)
    .controller('EssTimeEntrySetupController', EssTimeEntrySetupController);


  /** @ngInject */
  function EssSetupStarterController(xssSetupEngine,$log, $rootScope) {
    var vm = this;

    //vm.simpleMessage = "This is ESS Setup Starter Page!";
    vm.simpleMessage = $rootScope.simpleMessage;
    $rootScope.simpleMessage='Now I changed the global message';
    xssSetupEngine.testRequest().get(function(data){
      $log.debug(data);
    });
    //$log.info(xssSetupEngine.getPayCheck());

  }

  function EssHRConnectionSetupController($rootScope, essHRConnectionService){
    var vm = this;

    //vm.simpleMessage = "This is ESS HR Connection Setup Page!";
    vm.simpleMessage = $rootScope.simpleMessage;

    essHRConnectionService.essHRConnectionInitalization(vm);
    vm.testHRConnectionClick = function(){
      essHRConnectionService.essHRConnectionTestClick(vm);
    }

    vm.saveHRPropertiesClick = function(){
      essHRConnectionSetup.essHRSavePropertiesClick(vm);
    }




  }

  function EssCUConnectionSetupController(essCUConnectionService){

    // xssSetupEngine.getProperties().post(function(data){
    //   $log.info(data);
    // });
     var vm = this;



    //vm.simpleMessage = "This is ESS CU Connection Setup Page!";
    essCUConnectionService.essCUConnectionInitalization(vm);

    vm.testCUConnectionClick = function(){
      essCUConnectionService.essCUConnectionTestClick(vm);
    }

    vm.saveCUPropertiesClick = function(){
      essCUConnectionService.essCUSavePropertiesClick(vm);
    }

  }

  function EssCognosSetupController(essCognosSetupService){
    var vm = this;

    vm.simpleMessage = "This is ESS Cognos Setup Page!";

    essCognosSetupService.essCognosSetupInitalization(vm);

    vm.testCognosReportClick = function(){
      essCognosSetupService.testPayrollCognosClick(vm);
    }

    vm.essCognosSavePropertiesClick = function(){
      essCognosSetupService.essCognosSavePropertiesClick(vm);
    }


  }

  function EssSetupSummaryController(){
    var vm = this;

    vm.simpleMessage = "This is ESS Summary Page!";
  }

  function EssMiscSetupController(){
    var vm = this;

    vm.simpleMessage = "This is ESS Misc  Setup Page!";
  }

  function EssPortalStatSetupController(essPortalStatSetupService){


    var vm = this;

    vm.simpleMessage = "This is ESS PortalStat Setup Page!";

    vm.testPortalStatClick = function(){

        essPortalStatSetupService.essTestPortalStatClick(vm);
    }

  }

  function EssTimeEntrySetupController(){
    var vm = this;
    vm.simpleMessage='This is Time Entry Setup Page!';
  }


})();
