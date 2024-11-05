function singleNumber(arr){
    let sortedArr= arr.sort();
    let i= 0;//0
    while(i<sortedArr.length){
        if(sortedArr[i]!==sortedArr[i+1] && sortedArr[i+1]!==sortedArr[i+2])
        return sortedArr[i+1];
        else i++;
    }
}
let arr=[4,2,3,2,5,3,5]//[2,2,3,3,4,5,5]
let ans = singleNumber(arr);
console.log(ans);