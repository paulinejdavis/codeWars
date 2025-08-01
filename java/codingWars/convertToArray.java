package codingWars;

import java.util.Arrays;

public class convertToArray {
    public static int[] digitize(long n) {
        String num = Long.toString(n);
        int[] result = new int[num.length()];

        for (int i = 0; i < num.length(); i++) {
            result[i] = (num.charAt(num.length() - 1 - i) - '0');
        }
        return result;

    }
    public static void main(String[] args) {
        System.out.println(Arrays.toString(digitize(12348L)));
    }

}
