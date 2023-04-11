// class Kata {
//   public static String countingSheep(int num) {
//     //Add your code here
//     String count = "";
//     for (int i = 1; i <= num; i++) {
//       count += i + " sheep...";  
//     }
//     return count;
//   }
// }


class Kata {
    public static String countingSheep(int num) {
        StringBuilder sheepNum = new StringBuilder();
        for (int i = 1; i <= num; i++) {
            sheepNum.append(i).append(" sheep...");
        }
        return sheepNum.toString();
    }
}