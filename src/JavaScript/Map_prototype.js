
Array.prototype.myMap = function(callback){
    let result = [];
    for(let i = 0; i < this.length ; i++){
        result.push(callback(this[i]))
    }
    return result;
}

console.log([1,2,3,4,5].myMap( x => x * 2 ));



// this = [1,2,3,4,5]  callback fn() = x * 2
//
// Iteration flow:
// i = 0 -> callback(1) -> 2
// i = 1 -> callback(2) -> 4
// i = 2 -> callback(3) -> 6
// i = 3 -> callback(4) -> 8
// i = 4 -> callback(5) -> 10
//
// Final Output:
// [2,4,6,8,10]