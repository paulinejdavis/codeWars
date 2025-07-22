package codingWars;

public class Average {
    public static double findAverage(int[] array) {
        //initailise sum of nums
        int sum = 0;
        //loop through array and add the numbers divide by count of numbers
        for ( int arr : array) {
            sum += arr;

        }
        // store count and return
        return (double) sum / array.length;
    }

    public static void main(String[] args) {
        System.out.println(findAverage(new int[]{1, 2, 3, 4, 5, 6}));
    }
}

