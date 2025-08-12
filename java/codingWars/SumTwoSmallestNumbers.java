package codingWars;

public class SumTwoSmallestNumbers {

    public static long getIt(long[] numbers) {
        long lowOne = Long.MAX_VALUE;
        long lowTwo = Long.MAX_VALUE;

        for (long num : numbers) {
            System.out.println("Checking number: " + num);
            if (num < lowOne) {
                lowTwo = lowOne;
                lowOne = num;
                System.out.println("  New second smallest found! lowOne = : " + lowOne + ", lowTwo = " + lowTwo);
            } else if (num < lowTwo) {
                lowTwo = num;
                System.out.println(" New second smallest found ! lowTwo = " + lowTwo);
            }

        }
        return lowOne + lowTwo;
    }

    public static void main(String[] args) {
        System.out.println(getIt(new long []{ 5,  8, 12, 19, 22}));
    }
}
