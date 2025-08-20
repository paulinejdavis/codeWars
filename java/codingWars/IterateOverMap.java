package codingWars;

import java.util.HashMap;
import java.util.Map;

public class IterateOverMap {
    public static void main(String[] args) {
        Map<String, Integer>  map = new HashMap<>();
        map.put("banana", 2);
        map.put("apple", 3);

        for (Map.Entry<String, Integer> entry : map.entrySet()) {

            System.out.println("word=" + entry.getKey() + ", count=" + entry.getValue());

        }

    }

}
