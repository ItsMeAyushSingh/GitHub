// function removeDeduplicate(arr){
//   const st = new Set();
//   arr.forEach((item)=>st.add(item))
//   let ansArr = Array.from(st)
//   return ansArr;
// }
// let ans = removeDeduplicate([1,2,2,3,4,4,5,5])
// console.log(ans)

function removeDeduplicate(arr){
  let ans = [arr[0]]
  for(let i=1;i<arr.length;i++){
    if(arr[i] !== arr[i-1])
      ans.push(arr[i])
  }
  return ans;
}
let ans = removeDeduplicate([1,1,1,1,1,2,2,3,4,4,4,4,4,4,5,5,5,5,5,5,6])
console.log(ans)