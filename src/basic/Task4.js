"use strict";

const WEEK_DAYS = Array( 7 );
WEEK_DAYS[ 0 ] = "Sunday";
WEEK_DAYS[ 1 ] = "Monday";
WEEK_DAYS[ 2 ] = "Tuesday";
WEEK_DAYS[ 3 ] = "Wednesday";
WEEK_DAYS[ 4 ] = "Thursday";
WEEK_DAYS[ 5 ] = "Friday";
WEEK_DAYS[ 6 ] = "Saturday";

parseNumToDayOfWeek(0);
parseNumToDayOfWeek(8);
parseNumToDayOfWeek(3, true);
parseNumToDayOfWeek(1, true);
parseNumToDayOfWeek(undefined);
parseNumToDayOfWeek({});

function parseNumToDayOfWeek( num, print = false ) {
    if (
        typeof num !== "number" ||
        num < 1 || num > 7
    ) {
        console.log( "Invalid number given!" );
        return;
    }

    let day = WEEK_DAYS[ num - 1 ];

    if ( print ) {
        console.log( `Day #${ num } of week is "${ day }"` );
    }

    return day;
}