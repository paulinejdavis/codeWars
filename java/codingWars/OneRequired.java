package codingWars;

import java.util.Objects;

public class OneRequired {

        public static boolean check(Object[] a, Object x) {
            for (Object e : a) {
                if (Objects.equals(e, x)) return true;
            }

            return false;
        }

    public static void main(String[] args) {
        System.out.println(check (new Object[] {66, 101}, 66));
        System.out.println(check (new Object[] { 80, 117, 115,104, 85}, 80));
    }


}
