function intersectionOfTwoArrays(n, nums1, m, nums2){
    //implement this function
    let map = new Map();
    for(let i=0;i<n;i++){
        if(!map.has(nums1[i])){
            map.set(nums1[i],1);
        }
        else{
            map.set(nums1[i],map.get(nums1[i])+1);
        }
    }
    for(let [key, val] of map){
        console.log(`key= ${key} val= ${val}`);
    }
    let ans = [];
    for(let i=0;i<m;i++){
        let curr_val = map.get(nums2[i]);
        if(curr_val !== undefined && curr_val >0){
            ans.push(nums2[i])
            map.set(nums2[i],curr_val-1);
        }
    }
    ans.sort((a,b)=>a-b);
    return ans;
}
// let nums1= [-98, 79 ,59, 48 ,-64 ,46, 65 ,-71, 95, 21 ,72 ,-89 ,75 ,-49, -80];//15
// let nums2= [72, 59,95,-71 ,-68, -89, 48, -49, 65, -80, 75, 22, 46 ,-98 ,-64, -52 ,-64 ,79,21];//19
let nums1= [-64];
let nums2= [-64,-64]
let ans= intersectionOfTwoArrays(1,nums1,2,nums2);
console.log(ans);