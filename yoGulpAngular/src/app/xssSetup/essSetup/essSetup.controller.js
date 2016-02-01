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
  function EssSetupStarterController(xssSetupEngine,$log, FilePath, toastr) {
    var vm = this;

    //vm.simpleMessage = "This is ESS Setup Starter Page!";

    vm.app = FilePath.app;
    vm.dataaccess = FilePath.dataaccess;
    vm.essApp = FilePath.essApp;

    xssSetupEngine.testRequest().get(function(data){
      $log.debug(data);
    });

    vm.updateEssAppPath = function(){
      FilePath.essApp = vm.essApp;
      toastr.success("Updated ESS Application Properties.");
    }

  }

  function EssHRConnectionSetupController(essHRConnectionService){
    var vm = this;

    //vm.simpleMessage = "This is ESS HR Connection Setup Page!";


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

  }

  function EssMiscSetupController(){
    var vm = this;

  }

  function EssPortalStatSetupController(essPortalStatSetupService){


    var vm = this;

    vm.testPortalStatClick = function(){

        essPortalStatSetupService.essTestPortalStatClick(vm);
    }

  }

  function EssTimeEntrySetupController(){
    var vm = this;
  }


})();
