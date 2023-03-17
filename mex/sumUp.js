//naive solution

function sumUp(arr, sum) {
    var len = arr.length;
    for(var i = 0; i < len; i++) {
        for(var j = i + 1; j < len; j++) {
            if(arr[i] + arr[j] === sum) {
                return true;
            }
        }
    }
    return false;
}

//better solution
function sumUpTwo(arr, sum) {
    const mySet = new Set();
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        if(mySet.has(arr[i])) {
            return true;
        }
        mySet.add(sum - arr[i]);
    }
    return false;
}

console.log(sumUpTwo([1, 2, 3, 4, 5], 9));