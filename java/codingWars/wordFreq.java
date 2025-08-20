package codingWars;


import java.util.HashMap;
import java.util.Map;
public class wordFreq {

        public static void main(String[] args) {

            String[] words = {"apple", "banana", "apple", "orange", "banana", "banana"};
            Map<String, Integer> frequencyMap = new HashMap<>();

            for (String word : words) {
                frequencyMap.put(word, frequencyMap.getOrDefault(word, 0) + 1);

            }

            for (Map.Entry entry : frequencyMap.entrySet()) {

                System.out.println(entry.getKey() + "=" + entry.getValue()); }

        }

    }
