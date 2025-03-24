const isEven = (num) => {
    let flag = true;
    for(let i=0;i<num;i++){
        flag = !flag
    }
    return flag;
}

console.log(isEven(1264));