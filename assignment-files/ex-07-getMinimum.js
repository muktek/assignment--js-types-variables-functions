/**
 * getMinimum()
 * ------------------------------------------------------
 * Write a function called `getMinimum()` that takes 4 numbers as arguments
 * and returns the one with the lowest value.
 *
 **/











// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


/*-------------------TEST-1-------------------------*/
// function receives 4 number inputs
//    and returns the minimum value
/*--------------------------------------------------*/
console.log("==== ex-07-getMinimum : TEST 1 ====");


console.assert( getMinimum(1,2,4,0) === 0 )
console.assert( getMinimum(1,2,4,0) !== 1 )

console.assert( getMinimum(4,8,4,20) === 4 )

console.assert( getMinimum(300,-2,-99,0) === -99 )

console.assert( getMinimum(-5,-11,4,-5) === -11 )
