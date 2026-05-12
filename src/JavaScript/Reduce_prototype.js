
Array.prototype.myReduce = function(callback, value){

    let startIndex = 0;
    let acc = value;

    // If initial value is not provided
    if(arguments.length < 2){
        if(this.length === 0){
            throw new Error('Array is empty and no initial value provided');
        }

        // First element becomes accumulator
        startIndex = 1;
        acc = this[0];
    }

    // Loop through array
    for(let i = startIndex; i < this.length; i++){
        acc = callback(acc, this[i]);
    }

    return acc;
}

console.log([7,2,3,4,5].myReduce((acc, cur) => acc + cur, 0));


// this = [7,2,3,4,5]
//
// Initial value = 0
//
// Iteration flow:
// i = 0 -> 0 + 7  = 7
// i = 1 -> 7 + 2  = 9
// i = 2 -> 9 + 3  = 12
// i = 3 -> 12 + 4 = 16
// i = 4 -> 16 + 5 = 21
//
// Final Output:
// 21