"use strict";

sayHello( "Ooo Aaa Yyy", 22 );

function sayHello( target, age ) {
    if ( typeof target !== "string") {
        console.log( "Argument #0 must be instance of string!" );
        return;
    }

    if ( !isFinite( +age ) ) {
        console.log( "Argument #1 must be instance of number!" );
        return;
    }

    let fullNameParts = target.split( " " );

    if( fullNameParts.length !== 3 ) {
        console.log( "Invalid full name format" );
        return;
    }

    console.log( `Hello, ${ target }! Yor age is: ${ age } y.o.` );
}