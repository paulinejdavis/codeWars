public class Solution {
  public static int sumOfDigits(int n) {
    int sum = 0;
    String digits = n + "";
    for (int i = 0; i < digits.length(); i++) {
      sum += Character.getNumericValue(digits.charAt(i));
    }
    return sum;
  }
}