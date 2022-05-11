"use strict";

console.log( getFirstWordsOfOffer(
    "Some offer. Offertwo.TestOffer. 213 123321    . 2131."
) )

function getFirstWordsOfOffer( text ) {
    if ( typeof text !== "string") {
        return [];
    }

    text = text.replace( ". ", "." ).trim();
    let offers = text.split( "." );
    let words = [];

    offers.forEach(
        (offer) => words.push(
            offer.trim().split( " " ).shift()
        )
    );

    return words.filter( ( value ) => value !== "" );
}