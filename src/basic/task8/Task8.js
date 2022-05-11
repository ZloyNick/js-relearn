import getSate from "./../people_state/index.js"

function sayHelloTo( name, age ) {
    if ( typeof name !== "string") {
        console.log( "Argument #0 must be instance of string!" );
        return;
    }

    if ( !isFinite( +age ) ) {
        console.log( "Argument #1 must be instance of number!" );
        return;
    }

    console.log( `${ name } is ${ age } y.o. and he's ${ getSate(age) }.` )
}

sayHelloTo( "Ivan", 22 );