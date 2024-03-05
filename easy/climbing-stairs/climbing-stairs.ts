function climbStairs(n: number): number {
   if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else if (n === 2) {
      return 2;
    } else {
      let prev1 = 1;
      let prev2 = 2;
      for (let index = 3; index <= n; index++) {
        let current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
      }
      return prev2;
    }
  };
  
  // Runtime 56 ms / Memory 50.20 mb
  
  console.log(climbStairs(6));
  console.log(climbStairs(18));