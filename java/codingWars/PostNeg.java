package codingWars;

public class PostNeg {
        public static int[] countPositivesSumNegatives(int[] input) {
            if (input == null || input.length == 0)
                return new int [0];

            int positiveCount = 0;
            int negCount = 0;

            for (int num : input) {
                if (num > 0) {
                    positiveCount++;
                } else if (num < 0) {
                    negCount += num;
                }
            }
            return new int[] {positiveCount, negCount};



        }

    public static void main(String[] args) {
            int[] input = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15};
            int[] result = countPositivesSumNegatives(input);
        System.out.println("Positive count: " + result [0]);
        System.out.println("Sum of Negs: " + result[1]);
    }

}