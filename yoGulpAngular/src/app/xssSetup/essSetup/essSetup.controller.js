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

  function EssCognosSetupController($log,$http,xssSetupEngine, FilePath,toastr){
    var vm = this;

    vm.simpleMessage = "This is ESS Cognos Setup Page!";

    var requestData = {
      filePath : FilePath.essApp,
      keys : [
        'ReportServerType','CognosReportServerName','CognosReportServerPort','CognosAnonymousAccessAllowed',
        'CognosDefaultUserAllowed', 'CognosDefaultUserName', 'CognosDefaultUserPassword', 'CognosDefaultUserNamespace',
        'CognosPrimaryWaitThreshold', 'CognosSecondaryWaitThreshold', 'CognosReportPathCheckStub', 'CognosBillDateParmName',
        'CognosBillTimeParmName', 'CognosBillFromSeqParmName', 'CognosBillToSeqParmName', 'CognosAccountNoParmName',
        'CognosReportPriority', 'CognosDsName', 'CognosDsConn', 'CognosDsUser', 'CognosDsPwd', 'CognosSyuser',
        'CognosW2ReportPath', 'CognosBenefitReportPath'
      ],
      propertiesType: 'app',
      refresh: true
    }
    var wantedKeys = angular.toJson(requestData);
    xssSetupEngine.getProperties().save(wantedKeys, function(data){
      $log.debug(data);
      vm.ReportServerType = data.ReportServerType;
      vm.CognosReportServerName = data.CognosReportServerName;
      vm.CognosReportServerPort = data.CognosReportServerPort;
      vm.CognosAnonymousAccessAllowed = data.CognosAnonymousAccessAllowed;
      vm.CognosDefaultUserAllowed = data.CognosDefaultUserAllowed;
      vm.CognosDefaultUserName = data.CognosDefaultUserName;
      vm.CognosDefaultUserPassword = data.CognosDefaultUserPassword;
      vm.CognosDefaultUserNamespace = data.CognosDefaultUserNamespace;
      vm.CognosPrimaryWaitThreshold = data.CognosPrimaryWaitThreshold;
      vm.CognosSecondaryWaitThreshold = data.CognosSecondaryWaitThreshold;
      vm.CognosReportPathCheckStub = data.CognosReportPathCheckStub;
      vm.CognosBillDateParmName = data.CognosBillDateParmName;
      vm.CognosBillTimeParmName = data.CognosBillTimeParmName
      vm.CognosBillFromSeqParmName = data.CognosBillFromSeqParmName;
      vm.CognosBillToSeqParmName = data.CognosBillToSeqParmName;
      vm.CognosAccountNoParmName = data.CognosAccountNoParmName;
      vm.CognosReportPriority = data.CognosReportPriority;
      vm.CognosDsName = data.CognosDsName;
      vm.CognosDsConn = data.CognosDsConn;
      vm.CognosDsUser = data.CognosDsUser;
      vm.CognosDsPwd = data.CognosDsPwd;
      vm.CognosSyuser = data.CognosSyuser;
      vm.CognosW2ReportPath = data.CognosW2ReportPath;
      vm.CognosBenefitReportPath = data.CognosBenefitReportPath;
    },function(error){
      $log.debug(error);
      toastr.info("Backend API is broken!");
    });
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
