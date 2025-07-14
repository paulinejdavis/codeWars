package codingWars;

import java.util.function.IntPredicate;

public class EnumerableMagic {


    public static class Solution{
        public static boolean all(int[] list, IntPredicate predicate){
            for (int item : list)
                if (!predicate.test(item)) {
                    return false;
                }
            return true;
        }

    public static void main(String[] args) {
        int[] numbers = {2, 4, 6, 8};
        IntPredicate isEven = num -> num % 2 == 0;
        boolean result = Solution.all(numbers, isEven);
        System.out.println("All even > " + result);
    }
    }
}
