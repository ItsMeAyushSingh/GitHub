const arr = [4,7,2,1,8,19,45];

function sort(){
    for(let i=0;i<arr.length;i++){
        setTimeout(() => console.log(arr[i]),arr[i]);
    }
}

sort();
setTimeout(()=>console.clear(),3000);