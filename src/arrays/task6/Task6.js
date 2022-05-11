"use strict";

const PERSON_OBJ = {
    name: null,
    age: null,
    toString () {
        return `Name: ${ this.name }, age: ${ this.age }.`;
    },
    push( name, age ) {
        this.name = name;
        this.age = age;

        return this;
    },
}

const ARR = [
    Object.assign( {}, PERSON_OBJ ).push( 'Ravil', 22 ),
    Object.assign( {}, PERSON_OBJ ).push( 'Anastasiya', 21 ),
    Object.assign( {}, PERSON_OBJ ).push( 'Ivan', 12 ),
    Object.assign( {}, PERSON_OBJ ).push( 'Albina', 44 ),
    Object.assign( {}, PERSON_OBJ ).push( 'Zhenya', 35 ),
]

ARR.forEach( function (el) {
   console.log(String(el));
});