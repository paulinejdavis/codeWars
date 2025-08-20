package codingWars;

public class Palindrome {

    public static boolean isPali(String str) {

        return str.equals(new StringBuilder(str).reverse().toString());

//        int n = str.length();
//
//        for (int i = 0; i < n / 2; i++) {
//            if (str.charAt(i) != str.charAt(n - 1 - i)) {
//                return false;
//            }
//
//        }
//        return true;

    }


    public static void main(String[] args) {

        System.out.println(isPali("madam"));

    }

}
