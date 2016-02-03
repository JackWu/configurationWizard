(function() {
  'use strict';

  angular
      .module('yoGulpAngular')
      .service('essMessagePropertiesService', essMessagePropertiesService);



      function essMessagePropertiesService(xssSetupEngine,$log, usSpinnerService,toastr, globalVariable){


        this.essMessagePropertiesInitalization = essMessagePropertiesInitalization;
        this.essMessageSavePropertiesClick = essMessageSavePropertiesClick;

        function essMessagePropertiesInitalization(vm){

          var requestData = {
            filePath : globalVariable.getESSPath(),
            keys : [
              'message.login.passwordIncorrect','message.login.passwordExpired','message.login.empTerminated','message.passwordMaintenance.oldPasswordMisMatch',
              'message.forgotPassword.validationInformationError', 'message.forgotPassword.userInformationError', 'message.forgotPassword.nonempty', 'message.forgotPassword.employee.no.match',
              'message.general.error'
            ],
            propertiesType: 'app',
            refresh: true
          }
          var wantedKeys = angular.toJson(requestData);
          xssSetupEngine.getProperties().save(wantedKeys, function(data){
            $log.debug(data);
            vm.LoginPasswordIncorrect = data['message.login.passwordIncorrect'];
            vm.LoginPasswordExpired = data['message.login.passwordExpired'];
            vm.LoginEmpTerminated = data['message.login.empTerminated'];
            vm.PasswordMaintenanceOldPasswordMisMatch = data['message.passwordMaintenance.oldPasswordMisMatch'],
            vm.ForgotPasswordValidationInformationError = data['message.forgotPassword.validationInformationError'],
            vm.ForgotPasswordUserInformationError = data['message.forgotPassword.userInformationError'],
            vm.ForgotPasswordNonEmpty = data['message.forgotPassword.nonempty'];
            vm.ForgotPasswordEmployeNoMatch = data['message.forgotPassword.employee.no.match'];
            vm.GeneralErrorMessage = data['message.general.error'];
          },function(error){
            $log.debug(error);
            toastr.info("Backend API is broken!");
          });
        }


        function essMessageSavePropertiesClick(vm){

            usSpinnerService.spin('spinner-1');
            $log.debug(vm);

            var requestData = {
              filePath : globalVariable.getESSPath(),
              updateProperties: {
                'message.login.passwordIncorrect' : vm.LoginPasswordIncorrect,
                'message.login.passwordExpired' : vm.LoginPasswordExpired,
                'message.login.empTerminated' : vm.LoginEmpTerminated,
                'message.passwordMaintenance.oldPasswordMisMatch' : vm.PasswordMaintenanceOldPasswordMisMatch,
                'message.forgotPassword.validationInformationError' : vm.ForgotPasswordValidationInformationError,
                'message.forgotPassword.userInformationError': vm.ForgotPasswordUserInformationError,
                'message.forgotPassword.nonempty' : vm.ForgotPasswordNonEmpty,
                'message.forgotPassword.employee.no.match' : vm.ForgotPasswordEmployeNoMatch,
                'message.general.error' : vm.GeneralErrorMessage
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
