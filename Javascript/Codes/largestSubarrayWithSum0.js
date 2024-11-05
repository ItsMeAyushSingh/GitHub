function largestSubarray(n,arr){
    const map = new Map();
    map.set(0,-1);
    let sum = 0;
    let answerleft = -1,answeright = -2 ;
    for(let r=0; r<n; r++){
        sum += arr[r];
        if(map.has(sum)){
            let l = map.get(sum)+1;
            if((r-l+1) > (answeright - answerleft +1)){
                answeright = r;
                answerleft = l;
            }  
        }
        else{
            map.set(sum,r);
        }
    }
    if(answerleft != -1){
        const ans = arr.slice(answerleft,answeright+1);
        return ans;
    }
    return [-1];
}

console.log(largestSubarray(6,[2, 3, 1, -4, 0, 6]))