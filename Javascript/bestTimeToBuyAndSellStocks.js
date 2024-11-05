function bestTimeToBuyAndSellStocks(prices) {
    // implement this function
    let buyprice = prices[0], profit = 0;
    for(let i=1 ; i<prices.length;i++){
        if(prices[i] < buyprice){
            buyprice = prices[i];
        }
        else{
            profit += prices[i] - buyprice;
            buyprice = prices[i];
        }
    }
    return profit;
}
const prices = [3,8,5,2,4,3,6]
console.log(bestTimeToBuyAndSellStocks(prices))