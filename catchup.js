/*

Catchup.js
A js library for data storing and getting to any owner or element by js. 
MIT License
Copyright (c) 2023 digital-Swaraj
View on https://github.com

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
