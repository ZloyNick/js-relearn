"use strict";

console.log( sum(1, 2 ) ); // 3
console.log( sum( "1", 2 ) );// 3
console.log( sum( "", 2 ) );// 2
console.log( sum( "", {} ) );// error

/**
 * Returns summary of two numbers.
 *
 * @param {Number} a
 * @param {Number} b
 *
 * @return Number|void
 */
function sum( a, b ) {
    if ( !isFinite( +a ) ) {
        console.log( "Argument #0 is not number!" );
        return;
    }

    if ( !isFinite( +b ) ) {
        console.log( "Argument #1 is not number!" );
        return;
    }

    return +a + +b;
}