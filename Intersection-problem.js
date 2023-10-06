function intersection(arr1, arr2) {
    let result = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                result.push(arr1[i]);
            };
        };
    };
    console.log(result);
    return result;
};

function intersection2(arr1, arr2){
    let result = [];
    let arr3 = arr1.concat(arr2);
    let counter = {};

    for(let i = 0; i< arr3.length; i++){
        if(!counter[arr3[i]]){
            counter[arr3[i]] = 1;
        }else{
            counter[arr3[i]]++;
        }
    }

    // loop over the counter
    for(let property in counter){
        if(counter[property] >= 2){
            result.push(property);
        }
    }
    console.log(result);
    return result
}
// intersection([1, 2, 3], [5, 16, 10, 3, 1]);
intersection2([1, 2, 3], [5, 16, 10, 3, 1]);