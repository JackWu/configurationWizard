(function() {
  'use strict';

  angular
      .module('yoGulpAngular')
      .service('xssSetupEngine', xSSSetupEngine);

  /** @ngInject */
  function xSSSetupEngine($resource, ApiEndPoint) {


    this.testRequest = testRequest;
    this.testPortalStat = testPortalStat;
    this.getProperties = getProperties;
    this.testHRConnection = testHRConnection;
    this.testCUConnection = testCUConnection;
    this.saveProperties = saveProperties;

    function testRequest() {
      return $resource(ApiEndPoint.url+'/test/request');
    }
    function testCUConnection() {
      return $resource(ApiEndPoint.url+'/test/cu/connection');
    }
    function testHRConnection() {
      return $resource(ApiEndPoint.url+'/test/hr/connection');
    }

    function testPortalStat(){
      return $resource(ApiEndPoint.url+'/test/portalstat/views',{
        username:'sfg',
        password:'sfg123',
        url:'10.10.70.253:901/cayentaAPI',
        to_row:'10',
        emp_num:'0000000617'
      })
    }

    function getProperties(){


      return $resource(ApiEndPoint.url+'/get/properties');
    }

    function saveProperties(){


      return $resource(ApiEndPoint.url+'/save/properties');
    }


  }

})();
