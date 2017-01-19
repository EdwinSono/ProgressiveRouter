(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("progressive.router", [], factory);
	else if(typeof exports === 'object')
		exports["progressive.router"] = factory();
	else
		root["progressive.router"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Router = __webpack_require__(1);
	Router = new Router();
	
	module.exports = Router;


/***/ },
/* 1 */
/***/ function(module, exports) {

	var Router = function(){
	
	     this.routes = {};
	     this.currentPage;
	     this.routeRegExp = /\/([a-zA-Z\.\=\@\-\_]+)/g; //remember to skip 0 index in the array which is the url start
	     this.argumentsRegExp = /([a-zA-Z0-9]+)(\=)([a-zA-Z0-9\@\.\#\-\~\°\!]*)/g;
	     this._getCurrentPage();
	
	};
	
	Router.prototype.getArgumentByName = function( argName ){
	
	     var res;
	     var matches = this.currentPage.search.match( this.argumentsRegExp );
	
	     for (var i = matches.length; i--; ) {
	          res = ( matches[i].substr( 0, argName.length ) === argName )? matches[i].split('=')[1] : null;
	          if( res ) break;
	     }
	
	     return res;
	
	};
	
	Router.prototype.setRoute = function( route, somethingYouWillRoute ){
	
	     if( !route )
	          throw 'You shouldnt input empty values as a route';
	
	     if( !rootShape )
	          throw 'You should input something you will route';
	
	     this.routes[ this._repairSlashes( route ) ] = somethingYouWillRoute;
	
	};
	
	Router.prototype.getPageShape = function(){
	
	     this._getCurrentPage();
	     return this.routes[ this.currentPage.pathname ];
	
	};
	
	Router.prototype._getCurrentPage = function(){
	
	     this.currentPage = {
	
	          host: window.location.host,
	          hostname: window.location.hostname,
	          href: window.location.href,
	          origin: window.location.origin,
	          pathname:  this._repairSlashes( window.location.pathname ),
	          port: window.location.port,
	          protocol: window.location.protocol,
	          search: window.location.search
	
	     };
	
	};
	
	Router.prototype._repairSlashes = function( word ){
	
	     if( word === '' )
	          word = '/';
	
	          //add slash at end if needed
	     if( word.charAt(0) !== '/' ){
	          word = '/' + word;
	     }
	
	     //remove slash at end if needed
	     if( word.charAt( word.length - 1 ) === '/' ){
	          word = word.substr( 0, word.length - 1 );
	     }
	
	     return word;
	
	};
	
	
	module.exports = Router;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=progressive.router.js.map