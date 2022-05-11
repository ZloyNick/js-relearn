const getSate = function( age ) {
    if ( age < 18 ) {
        return "Child";
    } else if ( age < 31 ) {
        return "Young";
    } else if ( age < 56 ) {
        return "Mature";
    } else {
        return "Old";
    }
}

export default getSate;