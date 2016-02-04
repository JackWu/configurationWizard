(function() {
  'use strict';

  angular
      .module('yoGulpAngular')
      .service('essPortalStatSetupService', essPortalStatSetupService);



      function essPortalStatSetupService(xssSetupEngine,$log, usSpinnerService,toastr){


        this.essTestPortalStatClick = essTestPortalStatClick;

        function essTestPortalStatClick(vm){

              usSpinnerService.spin('spinner-1');
              xssSetupEngine.testPortalStat().query(function(data){
                $log.debug(data);
                vm.portalStatResult=data;
                usSpinnerService.stop('spinner-1');
              }, function(error){
                $log.debug(error);
                usSpinnerService.stop('spinner-1');
                toastr.error("Backend API is broken!");
              });
            }
        }










})();
