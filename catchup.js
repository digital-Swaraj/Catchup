/*

Catchup.js
A js library for data storing, getting to any owner or element and managing cookies. 
MIT License
Copyright (c) 2023 digital-Swaraj
View on https://github.com/digital-Swaraj/Catchup

*/

"use strict";

function Catchup (){
	
	return this;
}

Catchup.prototype.constructor = Catchup;

Catchup.prototype.cache = new Array();
Catchup.prototype.owners = new Array();

Catchup.prototype.data = function( obj ){
	var index = this.owners.indexOf( obj );
	return this.cache[ index ] || this.addowner( obj );
};

Catchup.prototype.addowner = function( obj ){
	var cache = new Object();
	this.owners.push( obj );
	this.cache.push( cache );
	return cache;
};


Catchup.prototype.hasData = function( owner, key ){
	if( key == null ){
		return this.owners.indexOf( owner ) >= 0;
	}
	return this.data( owner )[ key ] != null;
};

Catchup.prototype.removeData = function( owner, key ){
	return this.set( owner, key, undefined );
};

Catchup.prototype.get = function( owner, key ){
	var data = this.data( owner );
	if( this.hasData( owner, key ) ){
		return data[ key ];
	}
	return false;
};

Catchup.prototype.set = function( owner, key, value ){
	var data = this.data( owner ), index = this.owners.indexOf( owner );
	data[ key ] = value;
	this.cache[ index ] = data;
	return this;
}

Catchup.prototype.vData = function( owner ){
	var vData = {}, attrs = owner.attributes || {}, len = attrs.length, name, value;
	for( var i = 0; i < len; i++ ){
		name = attrs[ i ]["name"], value = owner.getAttribute( name ) || "";
		if( name.indexOf( "data-" ) == 0 ){
			vData[ name.replace( "data-", "" ) ] = value;
		}
	}
	return vData;
};

Catchup.prototype.vHasData = function( owner, key ){
	if( key == null ){
		for( var a in this.vData( owner ) ){
			return true;
		}
		return false;
	}
	return this.vData( owner )[ key ] != null;
};

Catchup.prototype.vRemoveData = function( owner, key ){
	owner.removeAttribute( "data-" + key );
	return this;
};

Catchup.prototype.vGet = function( owner, key ){
	var data = this.vData( owner );
	if( this.vHasData( owner, key ) ){
		return data[ key ];
	}
	return false;
};

Catchup.prototype.vSet = function( owner, key, value ){
	owner.setAttribute( "data-" + key, value );
	return this;
};


Catchup.rawCookie = function( obj ){
	var raw = "";
	for( const [ key, value ] of Object.entries( obj ) ){
		raw += key + "=" + value + "; ";
	}
	return raw;
};

Catchup.uRawCookie = function( raw ){
	var data = {},
	rawData = raw.split(";");
	for( var i = 0; i < rawData.length; i++ ){
		data[ rawData[ i ].split("=")[ 0 ] ] = rawData[ i ].split("=")[ 1 ] || "";
	}
	return data;
};

Catchup.prototype.cData = function( doc ){
	doc = doc || document;
	return Catchup.uRawCookie( doc.cookie || "" );
};

Catchup.prototype.cHasProperData = function( data, key ){
	if( data[ key ] == "" ){
		return false;
	}
	if( data[ key ] == null ){
		return false;
	}
	return true;
}

Catchup.prototype.cHasData = function( key, doc ){
	var data = this.cData( doc );
	return this.cHasProperData( data, key );
};

Catchup.prototype.cRemoveData = function( key, doc ){
	return this.cSet( key, "", doc );
};

Catchup.prototype.cGet = function( key, doc ){
	var data = this.cData( doc );
	if( this.cHasData( key, doc ) ){
		return data[ key ];
	}
	return false;
};

Catchup.prototype.cSet = function( key, value, doc ){
	var data = this.cData( doc );
	data[ key ] = value;
	( doc || document ).cookie = Catchup.rawCookie( data );
	return this;
};
