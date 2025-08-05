package codingWars;

import java.util.Arrays;

public class PrintArray {


    public static String printArray(Object array[]) {


        String[] str = new String[array.length];

        for(int i=0; i<array.length; i++) {

            str[i]=String.valueOf(array[i]) ;

        }

        return String.join(",", str);
    }

    public static void main(String[] args) {
        Integer[] array = new Integer[] { 2, 4, 5, 2 };
        String result = printArray(array);

        System.out.println("Result: " + result);

    }
}

