"use strict";

export function sharesOn( val, on ) {
    return Math.floor( val / on ) ===  val / on;
}

export function randomInt( precision = 2 ) {
    return Math.floor( Math.random() *  10 ** precision );
}

export function randomArray( elementsCount = 10, precision = 2 ) {
    elementsCount = Math.abs( elementsCount );
    const randomArray = Array( elementsCount );

    for ( let i = 0; i < elementsCount; i++ ) {
        randomArray[i] = randomInt( precision );
    }

    return randomArray;
}

export function arithmeticMean( arr ) {
    let summary = 0;
    const N = arr.length;

    for ( let i = 0; i < N; i++ ) {
        summary += arr[i];
    }

    return summary / N;
}

export function normalize( arr ) {
    return arr.filter( function ( el ) { return el !== null && el !== "" || el === 0 } );
}

export function pushUp( arr, at ) {
    const copy = arr[at];

    delete arr[at];

    normalize( arr );

    arr.push( copy );

    return copy;
}

export function pushBack( arr, at ) {
    const copy = arr[at];

    delete arr[at];

    arr.unshift(copy);

    arr = normalize(arr);

    return arr;
}

export function pushEndToBackHard( arr ) {
    const el = arr.pop();

    arr.unshift( el );

    return arr;
}

export function multiplies( arr, to ) {
    const newArr = arr.filter(
        function ( el ) {
            return sharesOn( el, to )
        }
    );

    return normalize( newArr );
}