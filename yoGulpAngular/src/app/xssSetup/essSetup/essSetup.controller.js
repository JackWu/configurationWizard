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
    .controller('EssTimeEntrySetupController', EssTimeEntrySetupController)
    .controller('EssMessagePropertiesController', EssMessagePropertiesController);


  /** @ngInject */
  function EssSetupStarterController(xssSetupEngine,$log, FilePath, toastr, globalVariable) {
    var vm = this;

    //vm.simpleMessage = "This is ESS Setup Starter Page!";

    vm.essApp = globalVariable.getESSPath();

    xssSetupEngine.testRequest().get(function(data){
      $log.debug(data);
    });

    vm.updateEssAppPath = function(){
      globalVariable.setESSPath(vm.essApp);
      toastr.success("Updated ESS Application Properties.");
      $log.debug(globalVariable.getESSPath());
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
      essHRConnectionService.essHRSavePropertiesClick(vm);
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

  function EssSetupSummaryController(globalVariable, $log){
    //var vm = this;

    $log.debug(globalVariable.getESSPath());

  }

  function EssMiscSetupController(){
    //var vm = this;

  }

  function EssPortalStatSetupController(essPortalStatSetupService){


    var vm = this;

    vm.testPortalStatClick = function(){

        essPortalStatSetupService.essTestPortalStatClick(vm);
    }

  }

  function EssTimeEntrySetupController(){
    //var vm = this;
  }

  function EssMessagePropertiesController(essMessagePropertiesService){
    var vm = this;
    essMessagePropertiesService.essMessagePropertiesInitalization(vm);

    vm.essMessageSavePropertiesClick = function(){
      essMessagePropertiesService.essMessageSavePropertiesClick(vm);
    }

  }

})();
