function longestPalindromicSubsequence(str) {
    const n = str.length;
    // create a 2D array to store the lengths of palindromic subsequences
    const dp = Array(n)
      .fill(null)
      .map(() => Array(n).fill(0));
  
    // every single character is a palindrome of length 1
    for (let i = 0; i < n; i++) {
      dp[i][i] = 1;
    }
  
    // build up the 2D array diagonally
    for (let len = 2; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
        const j = i + len - 1;
        if (str[i] === str[j] && len === 2) {
          dp[i][j] = 2;
        } else if (str[i] === str[j]) {
          dp[i][j] = dp[i + 1][j - 1] + 2;
        } else {
          dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
        }
      }
    }
  
    // the length of the longest palindromic subsequence is in the top-right cell of the 2D array
    return dp[0][n - 1];
  }
  