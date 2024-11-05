function minimumWindowSubstring(s, t) {
    //implement this function
    const map = new Map();
    for(let i=0;i<t.length;i++){
        map.set(t[i], map.get(t[i])+1 || 1)
    }
    // t.forEach(ele => map.set(ele,map.get(ele)+1 || 1));
    let left = 0, right = 0;
    let count = map.size;
    // let minWindowStartIndex = 0;
    let minWindowSize = Number.MAX_SAFE_INTEGER;
    let minWindow = "";

    while(right < s.length){
        let rLetter = s[right];
        if(map.has(rLetter)){
            map.set(rLetter,map.get(rLetter)-1);
            if(map.get(rLetter)===0)
                count--;
        }
        right++;

        while(count === 0){
            if(minWindowSize > right-left){
                minWindowSize = right - left;
                minWindow = s.slice(left,right);
            }
            let lLetter = s[left];
            if(map.has(lLetter)){
                map.set(lLetter,map.get(lLetter)+1)
                if(map.get(lLetter)>0) count++;
            }
            left++;
        }
    }
    return minWindow
}
console.log(minimumWindowSubstring("ADOBECODEBANC","ABC"))