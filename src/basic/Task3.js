"use strict";

printSex( "f" );
printSex( "m" );
printSex( "a" );
printSex( undefined );
printSex( "" );
printSex( {} );

function printSex( value ) {
    if (
        typeof value !== "string" ||
        ["m", "f"].indexOf(value.toLowerCase()) === -1
    ) {
        console.log('Yor sex is undefined');
        return;
    }

    console.log( `Your sex is: ${ value.toLowerCase() === "m" ? "male" : "female" }` );
}