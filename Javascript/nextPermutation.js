function smallest(str){
    let min = Number.MAX_SAFE_INTEGER;
    let arr = str.split('');
    for(let i=0;i<arr.length;i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min.toString();
}
function reverse(arr, start){
    let end = arr.length-1;
    while(start < end){
        [arr[start],arr[end]] = [arr[end],arr[start]];
        start++; end--;
    }
    return arr;
}
 
function nextPermutation(N) {
    if(N.length <=1)
    return -1;
    for(i = N.length-1; i>=1 ; i--){
        if(N[i] > N[i-1]){
            let small = smallest(N.slice(i));
            let smallestIndex = N.indexOf(small);
            N = N.split('');
            [N[i-1],N[smallestIndex]] = [N[smallestIndex],N[i-1]];
            let ans = reverse(N,i);
            return ans.join('');
        }
    }
    return -1;
}
 
// Main function to test the nextPermutation function
function main() {
    // Sample Input
    let N = "534976";//536479
    // Function Call
    console.log(nextPermutation(N));
}
// Execute the main function
main();