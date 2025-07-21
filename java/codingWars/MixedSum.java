package codingWars;

import java.util.Arrays;
import java.util.List;

public class MixedSum {

    public static int sum(List<?> mixed) {
        int total = 0;
        for (Object item : mixed) {
            total += Integer.parseInt(item.toString());
        }
        return total;
    }

    public static void main(String[] args) {
        System.out.println(sum(Arrays.asList(1,"2",3)));
    }
}

