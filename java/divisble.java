public class DivisibleNb {
  public static boolean isDivisible(long n, long x, long y) {
      return n % x == 0 && n % y == 0;
  }
}

// public class DivisibleNb {
// 	public static boolean isDivisible(long n, long x, long y) {
// 		// your code
//     if (n % x== 0 && n % y == 0) {
//       return true;
//     } else {
//       return false;
//       }
//   }
// }
