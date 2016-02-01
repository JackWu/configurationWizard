/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('yoGulpAngular')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('ApiEndPoint', {url:'http://localhost:8080'})
    .value('FilePath',{
      app:"C:\\prj\\webInquiry771\\coreRelease\\src\\main\\resources\\spring\\application.properties",
      dataaccess:'C:\\prj\\webInquiry771\\coreRelease\\src\\main\\resources\\spring\\dataAccess.properties',
      essApp:"C:\\prj\\ESSReskin\\src\\main\\webapp\\conf\\application.properties"});

})();
