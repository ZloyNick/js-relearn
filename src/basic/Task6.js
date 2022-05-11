"use strict";

sayHi();
sayHi( 16 );
sayHi( 11 );
sayHi( 18 );
sayHi( 23 );
sayHi( {} );
sayHi( 24 );
sayHi( -1 );

function sayHi( hours = null ) {
    if ( hours === null ) {
        hours = (new Date()).getHours();
    }

    if (
        typeof hours !== "number" ||
        hours < 0 ||
        hours > 23
    ) {
        console.log( "Invalid time hours given!" );
        return;
    }

    let dayState;

    if ( hours > 22 || hours < 5 ) {
        dayState = "night";
    } else if ( hours < 23 && hours > 16 ) {
        dayState = "evening";
    } else if ( hours < 17 && hours > 11 ) {
        dayState = "day"
    } else {
        dayState = "morning";
    }

    console.log(`Good ${ dayState }!`);
}