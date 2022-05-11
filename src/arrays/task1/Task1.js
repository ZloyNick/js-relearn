"use strict";

import { randomArray, sharesOn } from "./../arr_module/index.js";

const N = 10;

console.log( sharesOnTwo( randomArray(N) ) );

function sharesOnTwo( arr ) {
    for ( let i = 0; i < N; i++ ) {
        if ( !sharesOn( arr[i], 2 ) ) {
            return false;
        }
    }

    return true;
}