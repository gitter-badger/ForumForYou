'use strict';

var ioc  = require( 'electrolyte' ),
    http = require( 'http' );

// DI setup
ioc.loader( ioc.node( './' ) );

var api      = ioc.create( 'app/api' ),
    settings = ioc.create( 'library/settings' ),
    server   = http.createServer( api.callback( ) );

server.listen( settings.webPort, settings.webHost );
console.log('ForumForYou Server is running on ' + settings.webHost + ':' + settings.webPort);
