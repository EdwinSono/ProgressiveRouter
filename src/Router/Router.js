var Router = function(){

     this.routes = {};
     this.currentPage;
     this.routeRegExp = /\/([a-zA-Z\.\=\@\-\_]+)/g; //remember to skip 0 index in the array which is the url start
     this.argumentsRegExp = /([a-zA-Z0-9]+)(\=)([a-zA-Z0-9\@\.\#\-\~\°\!]*)/g;
     this.singletons = {};
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

  if( !somethingYouWillRoute )
    throw 'You should input something you will route which is a page >:)';

  var page = somethingYouWillRoute;
  page = new page( this );
  //page.build();//??? yet

  this.routes[ this._repairSlashes( route ) ] = page;


};

Router.prototype.chooseRoute = function( route ){

  if( !route )
    throw 'You shouldnt input empty values as a route';

  if( !this.routes[ this._repairSlashes( route ) ] )
    route = '/';

  this.routes[ this._repairSlashes( route ) ].build();


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

     if( word === '' || word === '/' )
          word = '/';

          //add slash at end if needed
     if( word.charAt(0) !== '/' ){
          word = '/' + word;
     }

     //remove slash at end if needed
     if( word.charAt( word.length - 1 ) === '/' && word.length > 1 ){
          word = word.substr( 0, word.length - 1 );
     }

     return word;

};

Router.prototype.addLib = function( name, singleton ){

  if( name !== '' && typeof name === 'string' && singleton !== undefined )
    this.singletons[ name ] = singleton;
  else {
    throw 'arguments are name of lib and lib singleton instance';
  }

};

Router.prototype.getLib = function( name ){

  if( typeof name === 'string' && name !== undefined )
    return this.singletons[ name ];
  else {
    throw 'argument should be the name of the lib';
  }

};


module.exports = Router;
