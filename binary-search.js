const ary = [
    1,
    2,
    3,
    9,
    16,
    27,
    33,
    89,
    69,
    96,
    123,
    189,
    255,
    333
];

const binarySearch = (arr, num) => {
    let min = 0;
    let max = arr.length -1;

    while(min <= max){
        let middle = Math.floor((min + max)/2);
        if(num > ary[middle]){
            min = middle +1;
        }else if(num < ary[middle]){
            max = middle -1;
        }else{
            return middle;
        }
    };
    return -1
};

/******* Binary Search *******/
/*
    log2 概念 | 做二分法做區分
*/
/*****************************/

const num = 69
const res = binarySearch(ary, num);
console.log(num, "is on position ", res, '.');