"use strict";

import { randomArray, arithmeticMean } from "./../arr_module/index.js";

console.log( Math.floor( arithmeticMean( randomArray() ) * 100 ) / 100 );