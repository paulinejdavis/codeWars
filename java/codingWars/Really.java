package codingWars;

public class Really {
        public static boolean betterThanAverage(int[] classPoints, int yourPoints) {
            //initialise a variable
            int sum = 0;

            for (int point : classPoints) {
                sum += point;
            }
            double average = (double)(sum) / classPoints.length;
            return yourPoints > average;

        }

    public static void main(String[] args) {
        System.out.println(betterThanAverage(new int[] {100, 40, 34, 57, 29, 72, 57, 88}, 75));
    }

}
