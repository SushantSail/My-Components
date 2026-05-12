
Array.prototype.myFilter = function(callback){

    let result = [];

    for(let i = 0; i < this.length; i++){

        if(callback(this[i])){
            result.push(this[i]);
        }
    }

    return result;
}

// Get even numbers
console.log([1,2,3,4,5].myFilter(x => x % 2 === 0));


// this = [1,2,3,4,5]
//
// Iteration flow:
// i = 0 -> callback(1) -> false -> skip
// i = 1 -> callback(2) -> true  -> push 2
// i = 2 -> callback(3) -> false -> skip
// i = 3 -> callback(4) -> true  -> push 4
// i = 4 -> callback(5) -> false -> skip
//
// Final Output:
// [2,4]