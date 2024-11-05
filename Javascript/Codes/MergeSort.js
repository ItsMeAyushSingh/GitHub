function merge(A,B){
    const n= A.length;
    const m= B.length;
    const C = [];
    let l=0,r=0;
    while(l<n && r<m){
        if(A[l] <= B[r])
            C.push(A[l++]);
        else
            C.push(B[r++]);
    }
    while(l<n)
        C.push(A[l++]);
    while(r<m)
        C.push(B[r++]);
    return C;
}   

function mergeSort(arr, n){
    if(n<=1)
        return arr;
    const mid= Math.floor(n/2);
    const left= mergeSort(arr.slice(0,mid),mid);
    const right= mergeSort(arr.slice(mid),n-mid);
    return merge(left,right);
}
const A= [12, 8, 3, 0, 7];
const n= 5;
console.log(mergeSort(A,n))