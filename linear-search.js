const ary = [
    15,
    123,
    154,
    123,
    5,
    123,
    30,
    154,
    65,
    94,
    75,
    24,
    65,
    10,
    15,
    26,
    141,
    21,
    30,
];
const liearSearch = (arr,n) => {
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === n){
            console.log("Found it!");
            return i
        }
    }
    console.log("Cannot find" + n);
    return -i;
};

let res = liearSearch(ary, 26);
console.log("Linear Algorithms Coding", res);
