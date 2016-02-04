(function() {
  'use strict';

  angular
      .module('yoGulpAngular')
      .service('essCUConnectionService', essCUConnectionService);



      function essCUConnectionService($log,$http,xssSetupEngine, FilePath, usSpinnerService, toastr){

          this.essCUConnectionInitalization = essCUConnectionInitalization;
          this.essCUConnectionTestClick = essCUConnectionTestClick;
          this.essCUSavePropertiesClick = essCUSavePropertiesClick;

          function essCUConnectionInitalization(vm){
            var requestData = {
              filePath : FilePath.essApp,
              keys : ['PortalStatAPIUserName','PortalStatAPIPassword','PortalStatAPIUrl'],
              propertiesType: 'app',
              refresh: true
            }
            var wantedData = angular.toJson(requestData);
            xssSetupEngine.getProperties().save(wantedData, function(data){

              $log.debug(data);
              vm.url = data.PortalStatAPIUrl;
              vm.user = data.PortalStatAPIUserName;
              vm.password = data.PortalStatAPIPassword;
            });

            // Initalize default value
            vm.result = {
              status : "Unknown",
              message : "Unknown"
            };
          }

          function essCUConnectionTestClick(vm){
            //Function for test HR Connection

              usSpinnerService.spin('spinner-1');
              $log.debug(vm);
              var requestData = {
                username : vm.user,
                password : vm.password,
                url: vm.url
              }

              xssSetupEngine.testCUConnection().get(requestData,function(data){
                vm.result = data;
                usSpinnerService.stop('spinner-1');
              }, function(error){
                toastr.error("Backend API is broken!");
                $log.debug(error);
                usSpinnerService.stop('spinner-1');
              })
          }

          function essCUSavePropertiesClick(vm){

              usSpinnerService.spin('spinner-1');
              $log.debug(vm);

              var requestData = {
                filePath : FilePath.essApp,
                updateProperties: {
                  PortalStatAPIUrl: vm.url,
                  PortalStatAPIUserName: vm.user,
                  PortalStatAPIPassword: vm.password
                }
              };
              var saveRequestData = angular.toJson(requestData);
              xssSetupEngine.saveProperties().save(saveRequestData, function(data){
                $log.debug(data);
                toastr.info(data.message, data.status);
                usSpinnerService.stop('spinner-1');
              },function(error){
                $log.debug(error);
                toastr.error(error.message, error.status);
                usSpinnerService.stop('spinner-1');
              });
          }
      }






})();
