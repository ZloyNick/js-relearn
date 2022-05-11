"use strict";

import { pushEndToBackHard, randomArray, pushBack } from "./../arr_module/index.js";

const ARR = randomArray();

console.log(ARR);
console.log( pushEndToBackHard( ARR ) );
console.log( pushBack( ARR, ARR.length - 1 ) );