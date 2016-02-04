(function() {
  'use strict';

  angular
      .module('yoGulpAngular')
      .service('essCognosSetupService', essCognosSetupService);



      function essCognosSetupService($log,$http, $window, xssSetupEngine, usSpinnerService, FilePath,toastr){

        this.essCognosSetupInitalization = essCognosSetupInitalization;
        this.testPayrollCognosClick = testPayrollCognosClick;
        this.essCognosSavePropertiesClick = essCognosSavePropertiesClick;

        function essCognosSetupInitalization(vm){
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
            toastr.error("Backend API is broken!");
          });
        }


        function testPayrollCognosClick(vm){
          var url = "http://"+vm.CognosReportServerName + ":" + vm.CognosReportServerPort+"/ReportRunner/cognos";
          var priority  = 'priority='+vm.CognosReportPriority;
          var CAMUser = 'CAMUser=' + vm.CognosDefaultUserName;
          var CAMPwd = 'CAMPwd=' + vm.CognosDefaultUserPassword;
          var CAMType = 'CAMType=' + vm.CognosDefaultUserNamespace;
          var dsName = 'dsName=' + vm.CognosDsName;
          var dsConn = 'dsConn=' + vm.CognosDsConn;
          var dsUser = 'dsUser=' + vm.CognosDsUser;
          var dsPwd = 'dsPwd=' + vm.CognosDsPwd;
          var syuser = 'syuser=' + vm.CognosSyuser;
          //var p_rptOutbase = 'p_rptOutBase=reprots';
          var p_rptOutPath = 'p_rptOutPath=';
          var rptPath = 'rptPath='+vm.CognosReportPathCheckStub;
          var p_check_no = 'p_Check_No=071977' //'p_Check_No='+vm.p_Check_no
          var p_Year = 'p_Year=2015'  //'p_Year='+vm.p_year
          url = url + "?runMode=preview&POST&priWait=0&secWait=0&rptFormat=PDF&p_rptOutBase=reports&p_EBill=N&"+rptPath+"&"+priority+"&"+CAMUser+"&"+CAMPwd+"&"+CAMType+"&"+dsName+"&"+dsConn+"&"+dsUser+"&"+dsPwd+"&"
                + syuser + "&" + p_rptOutPath + "&" + p_check_no + "&" + p_Year
          //$window.open("http://10.10.70.253:8082/ReportRunner/cognos?runMode=preview&POST&priWait=0&secWait=0&rptFormat=PDF&p_rptOutBase=reports&p_EBill=N&rptPath=/content/folder[@name='Cayenta']/folder[@name='CAY_DATA']/folder[@name='Core']/package[@name='PA']/report[@name='CAY_Payroll_Statement']&priority=&CAMUser=cogadmin&CAMPwd=cog123&CAMType=AD_COG&dsName=CAY_DATA&dsConn=DEMO&dsUser=DEMO&dsPwd=&syuser=&p_rptOutPath=&p_Check_No=071977&p_Year=2015", '_blank');
          $window.open(url, '_blank');
        }


        function essCognosSavePropertiesClick(vm){

            usSpinnerService.spin('spinner-1');
            $log.debug(vm);

            var requestData = {
              filePath : FilePath.essApp,
              updateProperties: {
                ReportServerType : vm.ReportServerType,
                CognosReportServerName : vm.CognosReportServerName,
                CognosReportServerPort : vm.CognosReportServerPort,
                CognosAnonymousAccessAllowed : vm.CognosAnonymousAccessAllowed,
                CognosDefaultUserAllowed : vm.CognosDefaultUserAllowed,
                CognosDefaultUserName : vm.CognosDefaultUserName,
                CognosDefaultUserPassword : vm.CognosDefaultUserPassword,
                CognosDefaultUserNamespace : vm.CognosDefaultUserNamespace,
                CognosPrimaryWaitThreshold : vm.CognosPrimaryWaitThreshold,
                CognosSecondaryWaitThreshold : vm.CognosSecondaryWaitThreshold,
                CognosReportPathCheckStub : vm.CognosReportPathCheckStub,
                CognosBillDateParmName : vm.CognosBillDateParmName,
                CognosBillTimeParmName : vm.CognosBillTimeParmName,
                CognosBillFromSeqParmName : vm.CognosBillFromSeqParmName,
                CognosBillToSeqParmName : vm.CognosBillToSeqParmName,
                CognosAccountNoParmName : vm.CognosAccountNoParmName,
                CognosReportPriority : vm.CognosReportPriority,
                CognosDsName : vm.CognosDsName,
                CognosDsConn : vm.CognosDsConn,
                CognosDsUser : vm.CognosDsUser,
                CognosDsPwd : vm.CognosDsPwd,
                CognosSyuser : vm.CognosSyuser,
                CognosW2ReportPath : vm.CognosW2ReportPath,
                CognosBenefitReportPath : vm.CognosBenefitReportPath
              }
            };
            var saveRequestData = angular.toJson(requestData);
            xssSetupEngine.saveProperties().save(saveRequestData, function(data){
              $log.debug(data);
              toastr.success(data.message, data.status);
              usSpinnerService.stop('spinner-1');
            },function(error){
              $log.debug(error);
              toastr.error(error.message, error.status);
              usSpinnerService.stop('spinner-1');
            });
        }

      }
})();
