class Combinatorics {
    constructor(num,r){
          this.num = num;
          this.r = r;
    }
    factorial = (n) => {
          if(n <= 1) return 1;
          return n * this.factorial(n-1);
    }
    findCombinations = () => {
          if(this.r > this.num) return 0;
          return (this.factorial(this.num)/this.factorial(this.num - this.r) * this.factorial(this.r));
          
    }
    findPermutations = () => {
        if(this.r > this.num) return 0;
        return (this.num.factorial()/(this.num - this.r).factorial());
    }
}
const comb = new Combinatorics(5,3);
console.log(comb.factorial());
console.log(comb.findCombinations());
console.log(comb.findPermutations());