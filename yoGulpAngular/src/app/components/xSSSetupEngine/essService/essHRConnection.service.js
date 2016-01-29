(function() {
  'use strict';

  angular
      .module('yoGulpAngular')
      .service('essHRConnectionService', essHRConnectionService);

      function essHRConnectionService($log,FilePath, xssSetupEngine, usSpinnerService, toastr){

        this.essHRConnectionInitalization = essHRConnectionInitalization;
        this.essHRConnectionTestClick = essHRConnectionTestClick;

        function essHRConnectionInitalization(vm){
          var requestData = {
            filePath : FilePath.essApp,
            keys : ['APIuserName','APIpassword','APIurl'],
            propertiesType: 'app'
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


      }

})();
