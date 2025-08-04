
package codingWars;

import java.util.Arrays;
public class SortAndStar {

        public static String twoSort(String[] s) {
            Arrays.sort(s);
            return String.join("***", s[0].split(""));
        }

    public static void main(String[] args) {
        System.out.println(twoSort(new String[]{"love","you","the", "film"}));
    }
}
