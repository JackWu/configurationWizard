(function() {
  'use strict';

  angular
      .module('yoGulpAngular')
      .service('essHRConnectionService', essHRConnectionService);

      function essHRConnectionService($log,FilePath, xssSetupEngine, usSpinnerService, toastr){

        this.essHRConnectionInitalization = essHRConnectionInitalization;
        this.essHRConnectionTestClick = essHRConnectionTestClick;
        this.essHRSavePropertiesClick = essHRSavePropertiesClick;

        function essHRConnectionInitalization(vm){
          var requestData = {
            filePath : FilePath.essApp,
            keys : ['APIuserName','APIpassword','APIurl'],
            propertiesType: 'app',
            refresh: true
          }
          var wantedKeys = angular.toJson(requestData);
          xssSetupEngine.getProperties().save(wantedKeys, function(data){
            $log.debug(data);
            vm.url = data.APIurl;
            vm.user = data.APIuserName;
            vm.password = data.APIpassword;
          });

          // Initalize default result value
          vm.result = {
            status : "Unknown",
            message : "Unknown"
          };


        }

        function essHRConnectionTestClick(vm ){
          //Function for test HR Connection
            usSpinnerService.spin('spinner-1');
            $log.debug(vm);
            var requestData = {
              username : vm.user,
              password : vm.password,
              url: vm.url
            };
            xssSetupEngine.testHRConnection().get(requestData,function(data){
              vm.result=data;
              usSpinnerService.stop('spinner-1');
            }, function(error){

              toastr.info("Backend API is broken!");
              $log.debug(error);
              usSpinnerService.stop('spinner-1');
            });
        }

        function essHRSavePropertiesClick(vm){

            usSpinnerService.spin('spinner-1');
            $log.debug(vm);

            var requestData = {
              filePath : FilePath.essApp,
              updateProperties: {
                APIurl: vm.url,
                APIuserName: vm.user,
                APIpassword: vm.password
              }
            };
            var saveRequestData = angular.toJson(requestData);
            xssSetupEngine.saveProperties().save(saveRequestData, function(data){
              $log.debug(data);
              toastr.info(data.message, data.status);
              usSpinnerService.stop('spinner-1');
            },function(error){
              $log.debug(error);
              toastr.info(error.message, error.status);
              usSpinnerService.stop('spinner-1');
            });
        }


      }

})();
