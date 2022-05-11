import getSate from "./../people_state/index.js"

let i = 1;

while ( i < 101 ) {
    console.log( i++ + "\t" + getSate( i ) );
}