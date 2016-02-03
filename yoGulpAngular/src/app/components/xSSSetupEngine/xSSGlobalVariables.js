(function() {
  'use strict';

  angular
      .module('yoGulpAngular')
      .factory('globalVariable',globalVariable);


      function globalVariable(){

          var essPath = 'C:\\prj\\ESSReskin\\src\\main\\webapp\\conf\\application.properties';

          return {
            setESSPath: function(path){
              essPath = path;
            },
            getESSPath: function(){
              return essPath;
            }
          };
      } // end $global

})();
