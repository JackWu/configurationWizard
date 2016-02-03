!function(){"use strict";angular.module("yoGulpAngular",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr","angularSpinner"])}(),function(){"use strict";function e(e,s,o,t){function n(n){o.spin("spinner-1"),e.testPortalStat().query(function(e){s.debug(e),n.portalStatResult=e,o.stop("spinner-1")},function(e){s.debug(e),o.stop("spinner-1"),t.info("Backend API is broken!")})}this.essTestPortalStatClick=n}e.$inject=["xssSetupEngine","$log","usSpinnerService","toastr"],angular.module("yoGulpAngular").service("essPortalStatSetupService",e)}(),function(){"use strict";function e(e,s,o,t,n){function r(o){var r={filePath:n.getESSPath(),keys:["message.login.passwordIncorrect","message.login.passwordExpired","message.login.empTerminated","message.passwordMaintenance.oldPasswordMisMatch","message.forgotPassword.validationInformationError","message.forgotPassword.userInformationError","message.forgotPassword.nonempty","message.forgotPassword.employee.no.match","message.general.error"],propertiesType:"app",refresh:!0},a=angular.toJson(r);e.getProperties().save(a,function(e){s.debug(e),o.LoginPasswordIncorrect=e["message.login.passwordIncorrect"],o.LoginPasswordExpired=e["message.login.passwordExpired"],o.LoginEmpTerminated=e["message.login.empTerminated"],o.PasswordMaintenanceOldPasswordMisMatch=e["message.passwordMaintenance.oldPasswordMisMatch"],o.ForgotPasswordValidationInformationError=e["message.forgotPassword.validationInformationError"],o.ForgotPasswordUserInformationError=e["message.forgotPassword.userInformationError"],o.ForgotPasswordNonEmpty=e["message.forgotPassword.nonempty"],o.ForgotPasswordEmployeNoMatch=e["message.forgotPassword.employee.no.match"],o.GeneralErrorMessage=e["message.general.error"]},function(e){s.debug(e),t.info("Backend API is broken!")})}function a(r){o.spin("spinner-1"),s.debug(r);var a={filePath:n.getESSPath(),updateProperties:{"message.login.passwordIncorrect":r.LoginPasswordIncorrect,"message.login.passwordExpired":r.LoginPasswordExpired,"message.login.empTerminated":r.LoginEmpTerminated,"message.passwordMaintenance.oldPasswordMisMatch":r.PasswordMaintenanceOldPasswordMisMatch,"message.forgotPassword.validationInformationError":r.ForgotPasswordValidationInformationError,"message.forgotPassword.userInformationError":r.ForgotPasswordUserInformationError,"message.forgotPassword.nonempty":r.ForgotPasswordNonEmpty,"message.forgotPassword.employee.no.match":r.ForgotPasswordEmployeNoMatch,"message.general.error":r.GeneralErrorMessage}},l=angular.toJson(a);e.saveProperties().save(l,function(e){s.debug(e),t.info(e.message,e.status),o.stop("spinner-1")},function(e){s.debug(e),t.info(e.message,e.status),o.stop("spinner-1")})}this.essMessagePropertiesInitalization=r,this.essMessageSavePropertiesClick=a}e.$inject=["xssSetupEngine","$log","usSpinnerService","toastr","globalVariable"],angular.module("yoGulpAngular").service("essMessagePropertiesService",e)}(),function(){"use strict";function e(e,s,o,t,n){function r(t){var n={filePath:s.essApp,keys:["APIuserName","APIpassword","APIurl"],propertiesType:"app",refresh:!0},r=angular.toJson(n);o.getProperties().save(r,function(s){e.debug(s),t.url=s.APIurl,t.user=s.APIuserName,t.password=s.APIpassword}),t.result={status:"Unknown",message:"Unknown"}}function a(s){t.spin("spinner-1"),e.debug(s);var r={username:s.user,password:s.password,url:s.url};o.testHRConnection().get(r,function(e){s.result=e,t.stop("spinner-1")},function(s){n.info("Backend API is broken!"),e.debug(s),t.stop("spinner-1")})}function l(r){t.spin("spinner-1"),e.debug(r);var a={filePath:s.essApp,updateProperties:{APIurl:r.url,APIuserName:r.user,APIpassword:r.password}},l=angular.toJson(a);o.saveProperties().save(l,function(s){e.debug(s),n.info(s.message,s.status),t.stop("spinner-1")},function(s){e.debug(s),n.info(s.message,s.status),t.stop("spinner-1")})}this.essHRConnectionInitalization=r,this.essHRConnectionTestClick=a,this.essHRSavePropertiesClick=l}e.$inject=["$log","FilePath","xssSetupEngine","usSpinnerService","toastr"],angular.module("yoGulpAngular").service("essHRConnectionService",e)}(),function(){"use strict";function e(e,s,o,t,n,r,a){function l(s){var o={filePath:r.essApp,keys:["ReportServerType","CognosReportServerName","CognosReportServerPort","CognosAnonymousAccessAllowed","CognosDefaultUserAllowed","CognosDefaultUserName","CognosDefaultUserPassword","CognosDefaultUserNamespace","CognosPrimaryWaitThreshold","CognosSecondaryWaitThreshold","CognosReportPathCheckStub","CognosBillDateParmName","CognosBillTimeParmName","CognosBillFromSeqParmName","CognosBillToSeqParmName","CognosAccountNoParmName","CognosReportPriority","CognosDsName","CognosDsConn","CognosDsUser","CognosDsPwd","CognosSyuser","CognosW2ReportPath","CognosBenefitReportPath"],propertiesType:"app",refresh:!0},n=angular.toJson(o);t.getProperties().save(n,function(o){e.debug(o),s.ReportServerType=o.ReportServerType,s.CognosReportServerName=o.CognosReportServerName,s.CognosReportServerPort=o.CognosReportServerPort,s.CognosAnonymousAccessAllowed=o.CognosAnonymousAccessAllowed,s.CognosDefaultUserAllowed=o.CognosDefaultUserAllowed,s.CognosDefaultUserName=o.CognosDefaultUserName,s.CognosDefaultUserPassword=o.CognosDefaultUserPassword,s.CognosDefaultUserNamespace=o.CognosDefaultUserNamespace,s.CognosPrimaryWaitThreshold=o.CognosPrimaryWaitThreshold,s.CognosSecondaryWaitThreshold=o.CognosSecondaryWaitThreshold,s.CognosReportPathCheckStub=o.CognosReportPathCheckStub,s.CognosBillDateParmName=o.CognosBillDateParmName,s.CognosBillTimeParmName=o.CognosBillTimeParmName,s.CognosBillFromSeqParmName=o.CognosBillFromSeqParmName,s.CognosBillToSeqParmName=o.CognosBillToSeqParmName,s.CognosAccountNoParmName=o.CognosAccountNoParmName,s.CognosReportPriority=o.CognosReportPriority,s.CognosDsName=o.CognosDsName,s.CognosDsConn=o.CognosDsConn,s.CognosDsUser=o.CognosDsUser,s.CognosDsPwd=o.CognosDsPwd,s.CognosSyuser=o.CognosSyuser,s.CognosW2ReportPath=o.CognosW2ReportPath,s.CognosBenefitReportPath=o.CognosBenefitReportPath},function(s){e.debug(s),a.info("Backend API is broken!")})}function i(e){var s="http://"+e.CognosReportServerName+":"+e.CognosReportServerPort+"/ReportRunner/cognos",t="priority="+e.CognosReportPriority,n="CAMUser="+e.CognosDefaultUserName,r="CAMPwd="+e.CognosDefaultUserPassword,a="CAMType="+e.CognosDefaultUserNamespace,l="dsName="+e.CognosDsName,i="dsConn="+e.CognosDsConn,u="dsUser="+e.CognosDsUser,p="dsPwd="+e.CognosDsPwd,c="syuser="+e.CognosSyuser,g="p_rptOutPath=",d="rptPath="+e.CognosReportPathCheckStub,m="p_Check_No=071977",v="p_Year=2015";s=s+"?runMode=preview&POST&priWait=0&secWait=0&rptFormat=PDF&p_rptOutBase=reports&p_EBill=N&"+d+"&"+t+"&"+n+"&"+r+"&"+a+"&"+l+"&"+i+"&"+u+"&"+p+"&"+c+"&"+g+"&"+m+"&"+v,o.open(s,"_blank")}function u(s){n.spin("spinner-1"),e.debug(s);var o={filePath:r.essApp,updateProperties:{ReportServerType:s.ReportServerType,CognosReportServerName:s.CognosReportServerName,CognosReportServerPort:s.CognosReportServerPort,CognosAnonymousAccessAllowed:s.CognosAnonymousAccessAllowed,CognosDefaultUserAllowed:s.CognosDefaultUserAllowed,CognosDefaultUserName:s.CognosDefaultUserName,CognosDefaultUserPassword:s.CognosDefaultUserPassword,CognosDefaultUserNamespace:s.CognosDefaultUserNamespace,CognosPrimaryWaitThreshold:s.CognosPrimaryWaitThreshold,CognosSecondaryWaitThreshold:s.CognosSecondaryWaitThreshold,CognosReportPathCheckStub:s.CognosReportPathCheckStub,CognosBillDateParmName:s.CognosBillDateParmName,CognosBillTimeParmName:s.CognosBillTimeParmName,CognosBillFromSeqParmName:s.CognosBillFromSeqParmName,CognosBillToSeqParmName:s.CognosBillToSeqParmName,CognosAccountNoParmName:s.CognosAccountNoParmName,CognosReportPriority:s.CognosReportPriority,CognosDsName:s.CognosDsName,CognosDsConn:s.CognosDsConn,CognosDsUser:s.CognosDsUser,CognosDsPwd:s.CognosDsPwd,CognosSyuser:s.CognosSyuser,CognosW2ReportPath:s.CognosW2ReportPath,CognosBenefitReportPath:s.CognosBenefitReportPath}},l=angular.toJson(o);t.saveProperties().save(l,function(s){e.debug(s),a.info(s.message,s.status),n.stop("spinner-1")},function(s){e.debug(s),a.info(s.message,s.status),n.stop("spinner-1")})}this.essCognosSetupInitalization=l,this.testPayrollCognosClick=i,this.essCognosSavePropertiesClick=u}e.$inject=["$log","$http","$window","xssSetupEngine","usSpinnerService","FilePath","toastr"],angular.module("yoGulpAngular").service("essCognosSetupService",e)}(),function(){"use strict";function e(e,s,o,t,n,r){function a(s){var n={filePath:t.essApp,keys:["PortalStatAPIUserName","PortalStatAPIPassword","PortalStatAPIUrl"],propertiesType:"app",refresh:!0},r=angular.toJson(n);o.getProperties().save(r,function(o){e.debug(o),s.url=o.PortalStatAPIUrl,s.user=o.PortalStatAPIUserName,s.password=o.PortalStatAPIPassword}),s.result={status:"Unknown",message:"Unknown"}}function l(s){n.spin("spinner-1"),e.debug(s);var t={username:s.user,password:s.password,url:s.url};o.testCUConnection().get(t,function(e){s.result=e,n.stop("spinner-1")},function(s){r.info("Backend API is broken!"),e.debug(s),n.stop("spinner-1")})}function i(s){n.spin("spinner-1"),e.debug(s);var a={filePath:t.essApp,updateProperties:{PortalStatAPIUrl:s.url,PortalStatAPIUserName:s.user,PortalStatAPIPassword:s.password}},l=angular.toJson(a);o.saveProperties().save(l,function(s){e.debug(s),r.info(s.message,s.status),n.stop("spinner-1")},function(s){e.debug(s),r.info(s.message,s.status),n.stop("spinner-1")})}this.essCUConnectionInitalization=a,this.essCUConnectionTestClick=l,this.essCUSavePropertiesClick=i}e.$inject=["$log","$http","xssSetupEngine","FilePath","usSpinnerService","toastr"],angular.module("yoGulpAngular").service("essCUConnectionService",e)}(),function(){"use strict";function e(e,s,o,t,n){var r=this;r.essApp=n.getESSPath(),e.testRequest().get(function(e){s.debug(e)}),r.updateEssAppPath=function(){n.setESSPath(r.essApp),t.success("Updated ESS Application Properties."),s.debug(n.getESSPath())}}function s(e){var s=this;e.essHRConnectionInitalization(s),s.testHRConnectionClick=function(){e.essHRConnectionTestClick(s)},s.saveHRPropertiesClick=function(){e.essHRSavePropertiesClick(s)}}function o(e){var s=this;e.essCUConnectionInitalization(s),s.testCUConnectionClick=function(){e.essCUConnectionTestClick(s)},s.saveCUPropertiesClick=function(){e.essCUSavePropertiesClick(s)}}function t(e){var s=this;e.essCognosSetupInitalization(s),s.testCognosReportClick=function(){e.testPayrollCognosClick(s)},s.essCognosSavePropertiesClick=function(){e.essCognosSavePropertiesClick(s)}}function n(e,s){s.debug(e.getESSPath())}function r(){}function a(e){var s=this;s.testPortalStatClick=function(){e.essTestPortalStatClick(s)}}function l(){}function i(e){var s=this;e.essMessagePropertiesInitalization(s),s.essMessageSavePropertiesClick=function(){e.essMessageSavePropertiesClick(s)}}e.$inject=["xssSetupEngine","$log","FilePath","toastr","globalVariable"],s.$inject=["essHRConnectionService"],o.$inject=["essCUConnectionService"],t.$inject=["essCognosSetupService"],n.$inject=["globalVariable","$log"],a.$inject=["essPortalStatSetupService"],i.$inject=["essMessagePropertiesService"],angular.module("yoGulpAngular").controller("EssSetupStarterController",e).controller("EssHRConnectionSetupController",s).controller("EssCUConnectionSetupController",o).controller("EssCognosSetupController",t).controller("EssSetupSummaryController",n).controller("EssMiscSetupController",r).controller("EssPortalStatSetupController",a).controller("EssTimeEntrySetupController",l).controller("EssMessagePropertiesController",i)}(),function(){"use strict";function e(e,s){function o(){return e(s.url+"/test/request")}function t(){return e(s.url+"/test/cu/connection")}function n(){return e(s.url+"/test/hr/connection")}function r(){return e(s.url+"/test/portalstat/views",{username:"sfg",password:"sfg123",url:"10.10.70.253:901/cayentaAPI",to_row:"10",emp_num:"0000000617"})}function a(){return e(s.url+"/get/properties")}function l(){return e(s.url+"/save/properties")}this.testRequest=o,this.testPortalStat=r,this.getProperties=a,this.testHRConnection=n,this.testCUConnection=t,this.saveProperties=l}e.$inject=["$resource","ApiEndPoint"],angular.module("yoGulpAngular").service("xssSetupEngine",e)}(),function(){"use strict";function e(){var e="C:\\prj\\ESSReskin\\src\\main\\webapp\\conf\\application.properties";return{setESSPath:function(s){e=s},getESSPath:function(){return e}}}angular.module("yoGulpAngular").factory("globalVariable",e)}(),function(){"use strict";function e(){function e(){return s}var s=[{title:"Customer Self Service",url:"",description:"Configuring Customer Self Service",logo:"angular.png"},{title:"Employee Self Service",url:"#/essSetupStarter",description:"Configuring Employee Self Service",logo:"browsersync.png"},{title:"Vendor Self Service",url:"",description:"Configuring Vendor Self Service",logo:"gulp.png"},{title:"Online Application",url:"",description:"Configuring Online Application. Online Application is used for job searching and application.",logo:"karma.png"}];this.getTec=e}angular.module("yoGulpAngular").service("webDevTec",e)}(),function(){"use strict";function e(){function e(e){var s=this;s.relativeDate=e(s.creationDate).fromNow()}e.$inject=["moment"];var s={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return s}angular.module("yoGulpAngular").directive("acmeNavbar",e)}(),function(){"use strict";function e(e){function s(s,o,t,n){var r,a=e(o[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});o.addClass("acme-malarkey"),angular.forEach(s.extraValues,function(e){a.type(e).pause()["delete"]()}),r=s.$watch("vm.contributors",function(){angular.forEach(n.contributors,function(e){a.type(e.login).pause()["delete"]()})}),s.$on("$destroy",function(){r()})}function o(e,s){function o(){return t().then(function(){e.info("Activated Contributors View")})}function t(){return s.getContributors(10).then(function(e){return n.contributors=e,n.contributors})}var n=this;n.contributors=[],o()}o.$inject=["$log","githubContributor"];var t={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:s,controller:o,controllerAs:"vm"};return t}e.$inject=["malarkey"],angular.module("yoGulpAngular").directive("acmeMalarkey",e)}(),function(){"use strict";function e(e,s){function o(o){function n(e){return e.data}function r(s){e.error("XHR Failed for getContributors.\n"+angular.toJson(s.data,!0))}return o||(o=30),s.get(t+"/contributors?per_page="+o).then(n)["catch"](r)}var t="https://api.github.com/repos/Swiip/generator-gulp-angular",n={apiHost:t,getContributors:o};return n}e.$inject=["$log","$http"],angular.module("yoGulpAngular").factory("githubContributor",e)}(),function(){"use strict";function e(e,s,o){function t(){r(),e(function(){a.classAnimation="rubberBand"},4e3)}function n(){o.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),a.classAnimation=""}function r(){a.awesomeThings=s.getTec(),angular.forEach(a.awesomeThings,function(e){e.rank=Math.random()})}var a=this;a.awesomeThings=[],a.classAnimation="",a.creationDate=1452646030975,a.showToastr=n,t()}e.$inject=["$timeout","webDevTec","toastr"],angular.module("yoGulpAngular").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("yoGulpAngular").run(e)}(),function(){"use strict";function e(e,s){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("essSetupStarter",{url:"/essSetupStarter",templateUrl:"app/xssSetup/essSetup/EssSetupStarter.html",controller:"EssSetupStarterController",controllerAs:"EssSetupStarter"}).state("essSetupSummary",{url:"/essSetupSummary",templateUrl:"app/xssSetup/essSetup/EssSummary.html",controller:"EssSetupSummaryController",controllerAs:"EssSetupSummary"}).state("essCUConnectionSetup",{url:"/essCUConnectionSetup",templateUrl:"app/xssSetup/essSetup/CUConnectionSetup.html",controller:"EssCUConnectionSetupController",controllerAs:"EssCUConnectionSetup"}).state("essHRConnectionSetup",{url:"/essHRConnectionSetup",templateUrl:"app/xssSetup/essSetup/HRConnectionSetup.html",controller:"EssHRConnectionSetupController",controllerAs:"EssHRConnectionSetup"}).state("essCognosSetup",{url:"/essCognosSetup",templateUrl:"app/xssSetup/essSetup/CognosSetup.html",controller:"EssCognosSetupController",controllerAs:"EssCognosSetup"}).state("essMiscSetup",{url:"/essMiscSetup",templateUrl:"app/xssSetup/essSetup/MiscSetup.html",controller:"EssMiscSetupController",controllerAs:"EssMiscSetup"}).state("essPortalStatSetup",{url:"/essPortalStatSetup",templateUrl:"app/xssSetup/essSetup/PortalStatSetup.html",controller:"EssPortalStatSetupController",controllerAs:"EssPortalStatSetup"}).state("essTimeEntrySetup",{url:"/essTimeEntrySetup",templateUrl:"app/xssSetup/essSetup/TimeEntrySetup.html",controller:"EssTimeEntrySetupController",controllerAs:"EssTimeEntrySetup"}).state("essMessageProperties",{url:"/essMessageProperties",templateUrl:"app/xssSetup/essSetup/MessageProperties.html",controller:"EssMessagePropertiesController",controllerAs:"EssMessageProperties"}),s.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("yoGulpAngular").config(e)}(),function(){"use strict";angular.module("yoGulpAngular").constant("malarkey",malarkey).constant("moment",moment).constant("ApiEndPoint",{url:"http://localhost:8080"}).value("FilePath",{app:"C:\\prj\\webInquiry771\\coreRelease\\src\\main\\resources\\spring\\application.properties",dataaccess:"C:\\prj\\webInquiry771\\coreRelease\\src\\main\\resources\\spring\\dataAccess.properties",essApp:"C:\\prj\\ESSReskin\\src\\main\\webapp\\conf\\application.properties"})}(),function(){"use strict";function e(e,s){e.debugEnabled(!0),s.allowHtml=!0,s.timeOut=3e3,s.positionClass="toast-top-full-width",s.preventDuplicates=!1,s.progressBar=!1}e.$inject=["$logProvider","toastrConfig"],angular.module("yoGulpAngular").config(e)}(),angular.module("yoGulpAngular").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure configuring your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href=""><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>'),e.put("app/xssSetup/essSetup/CUConnectionSetup.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="jumbotron"><h1>CU Connection Setup</h1><div class="form-group"><label class="pull-left">URL:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCUConnectionSetup.url"></div><div class="form-group"><label class="pull-left">Username:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCUConnectionSetup.user"></div><div class="form-group"><label class="pull-left">Password:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCUConnectionSetup.password"></div><div class="form-group"><button class="btn btn-default" ng-click="EssCUConnectionSetup.testCUConnectionClick()">Test Connection</button> <button class="btn btn-default" ng-click="EssCUConnectionSetup.saveCUPropertiesClick()">Save</button></div><div class="form-group"><div class="col3-md">Result: {{EssCUConnectionSetup.result.status}}</div><div class="col3-md">Message: {{EssCUConnectionSetup.result.message}}</div></div></div></div><span us-spinner="" spinner-key="spinner-1"></span>'),e.put("app/xssSetup/essSetup/CognosSetup.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="jumbotron"><h1>Cognos Connection Setup</h1><div class="form-group"><label class="pull-left">Report Server Type:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.ReportServerType"></div><div class="form-group"><label class="pull-left">Cognos Report Server Name:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosReportServerName"></div><div class="form-group"><label class="pull-left">Cognos Report Server Port:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosReportServerPort"></div><div class="form-group"><label class="pull-left">Cognos AnonymousAccessAllowed:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosAnonymousAccessAllowed"></div><div class="form-group"><label class="pull-left">Cognos Default User Allowed:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosDefaultUserAllowed"></div><div class="form-group"><label class="pull-left">Cognos Default User Name:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosDefaultUserName"></div><div class="form-group"><label class="pull-left">Cognos Default User Password:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosDefaultUserPassword"></div><div class="form-group"><label class="pull-left">Cognos Default User Namespace:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosDefaultUserNamespace"></div><div class="form-group"><label class="pull-left">Cognos Primary Wait Threshold:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosPrimaryWaitThreshold"></div><div class="form-group"><label class="pull-left">Cognos Secondary Wait Threshold:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosSecondaryWaitThreshold"></div><div class="form-group"><label class="pull-left">Cognos Report Path Check Stub:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosReportPathCheckStub"></div><div class="form-group"><label class="pull-left">Cognos Bill Date Parm Name:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosBillDateParmName"></div><div class="form-group"><label class="pull-left">Cognos Bill Time Parm Name:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosBillTimeParmName"></div><div class="form-group"><label class="pull-left">Cognos Bill From Seq Parm Name:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosBillFromSeqParmName"></div><div class="form-group"><label class="pull-left">Cognos Bill To Seq Parm Name:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosBillToSeqParmName"></div><div class="form-group"><label class="pull-left">Cognos Account No Parm Name:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosAccountNoParmName"></div><div class="form-group"><label class="pull-left">Cognos Report Priority:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosReportPriority"></div><div class="form-group"><label class="pull-left">Cognos Ds Name:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosDsName"></div><div class="form-group"><label class="pull-left">Cognos Ds Conn:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosDsConn"></div><div class="form-group"><label class="pull-left">Cognos Ds User:</label></div><div class="form-group"><label class="pull-left">Cognos Ds Pwd:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosDsPwd"></div><div class="form-group"><label class="pull-left">Cognos Syuser:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosSyuser"></div><div class="form-group"><label class="pull-left">Cognos W2 Report Path:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosW2ReportPath"></div><div class="form-group"><label class="pull-left">Cognos Benefit Report Path:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssCognosSetup.CognosBenefitReportPath"></div><div class="form-group"><button class="btn btn-default" ng-click="EssCognosSetup.testCognosReportClick()">Test Payroll Connection</button> <button class="btn btn-default" ng-click="EssCognosSetup.essCognosSavePropertiesClick()">Save</button></div></div></div><span us-spinner="" spinner-key="spinner-1"></span>'),e.put("app/xssSetup/essSetup/EssSetupStarter.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="jumbotron"><span ng-bind="EssSetupStarter.simpleMessage"></span><div class="form-group"><label class="pull-left">ESS Application Properties Path</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" id="fileUpload" ng-model="EssSetupStarter.essApp"></div><div class="form-group"><button class="btn btn-default" ng-click="EssSetupStarter.updateEssAppPath()">Update</button></div><div class="row"><div class="col-md-3 col-md-offset-4"><a ui-sref="essSetupSummary">ESS Setup Summary</a></div></div><div class="row"><div class="col-md-3 col-md-offset-4"><a ui-sref="essHRConnectionSetup">ESS HR Connection Setup</a></div></div><div class="row"><div class="col-md-3 col-md-offset-4"><a ui-sref="essCUConnectionSetup">ESS CU Connection Setup</a></div></div><div class="row"><div class="col-md-3 col-md-offset-4"><a ui-sref="essCognosSetup">ESS Cognos Setup</a></div></div><div class="row"><div class="col-md-3 col-md-offset-4"><a ui-sref="essMiscSetup">ESS Misc Setup</a></div></div><div class="row"><div class="col-md-3 col-md-offset-4"><a ui-sref="essPortalStatSetup">ESS Portal Stat Check</a></div></div><div class="row"><div class="col-md-3 col-md-offset-4"><a ui-sref="essTimeEntrySetup">ESS Time Entry Setup</a></div></div><div class="row"><div class="col-md-3 col-md-offset-4"><a ui-sref="essMessageProperties">ESS Message Properties</a></div></div></div></div>'),e.put("app/xssSetup/essSetup/EssSummary.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div><span ng-bind="EssSetupSummary.simpleMessage"></span></div></div>'),e.put("app/xssSetup/essSetup/HRConnectionSetup.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="jumbotron"><span ng-bind="EssHRConnectionSetup.simpleMessage"></span><h1>HR Connection Setup</h1><div class="form-group"><label class="pull-left">URL:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssHRConnectionSetup.url"></div><div class="form-group"><label class="pull-left">Username:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssHRConnectionSetup.user"></div><div class="form-group"><label class="pull-left">Password:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssHRConnectionSetup.password"></div><div class="form-group"><button class="btn btn-default" ng-click="EssHRConnectionSetup.testHRConnectionClick()">Test Connection</button> <button class="btn btn-default" ng-click="EssHRConnectionSetup.saveHRPropertiesClick()">Save</button></div><div class="form-group"><div class="col3-md">Result: {{EssHRConnectionSetup.result.status}}</div><div class="col3-md">Message: {{EssHRConnectionSetup.result.message}}</div></div></div></div><span us-spinner="" spinner-key="spinner-1"></span>'),e.put("app/xssSetup/essSetup/MessageProperties.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="jumbotron"><h1>Message Properties</h1><h2>Login Pages</h2><div class="form-group"><label class="pull-left">Password Incorrect Message:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssMessageProperties.LoginPasswordIncorrect"></div><div class="form-group"><label class="pull-left">Password Expired Message:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssMessageProperties.LoginPasswordExpired"></div><div class="form-group"><label class="pull-left">Employee Terminated Message:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssMessageProperties.LoginEmpTerminated"></div><h2>Password Maintenance</h2><div class="form-group"><label class="pull-left">Old Password Mismatch:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssMessageProperties.PasswordMaintenanceOldPasswordMisMatch"></div><h2>Forgot Password Page</h2><div class="form-group"><label class="pull-left">Information Validation Error Message:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssMessageProperties.ForgotPasswordValidationInformationError"></div><div class="form-group"><label class="pull-left">User Information Error:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssMessageProperties.ForgotPasswordUserInformationError"></div><div class="form-group"><label class="pull-left">Cannot be Empty Message:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssMessageProperties.ForgotPasswordNonEmpty"></div><div class="form-group"><label class="pull-left">Employee no Match Message:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssMessageProperties.ForgotPasswordEmployeNoMatch"></div><h2>Generic Error message</h2><div class="form-group"><label class="pull-left">General Error Message:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" ng-model="EssMessageProperties.GeneralErrorMessage"></div><div class="form-group"><button class="btn btn-default" ng-click="EssMessageProperties.essMessageSavePropertiesClick()">Save</button></div></div></div>'),
e.put("app/xssSetup/essSetup/MiscSetup.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div><span ng-bind="EssMiscSetup.simpleMessage"></span> Include PAOnly, passCode=ee123,logo, footer text</div></div>'),e.put("app/xssSetup/essSetup/PortalStatSetup.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="jumbotron"><h1 ng-bind="EssPortalStatSetup.simpleMessage"></h1><div class="form-group"><button class="btn btn-default" ng-click="EssPortalStatSetup.testPortalStatClick()">Check Portal Stat</button></div><div class="row" ng-repeat="single in EssPortalStatSetup.portalStatResult"><div class="col-md-3">{{single.viewName}}</div><div class="col-md-3">{{single.status}}</div><div class="col-md-3">{{single.statusDescription}}</div></div></div></div><span us-spinner="" spinner-key="spinner-1"></span>'),e.put("app/xssSetup/essSetup/TimeEntrySetup.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>CU Connection Setup</h1><div class="form-group"><label class="pull-left">URL:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" required=""></div><div class="form-group"><label class="pull-left">Username:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" required=""></div><div class="form-group"><label class="pull-left">Password:</label> <input type="text" class="form-control ng-pristine ng-valid ng-valid-required ng-touched" required=""></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-268e1693e7.js.map
