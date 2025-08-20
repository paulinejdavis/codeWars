package codingWars;

import java.util.*;
public class SplitFreq {
    public static Map<String, Integer> countWords(String str) {
        Map<String, Integer> wordCount = new HashMap<>();
        String[] words = str.split(",");

        for (String word : words) {
            String trimmedWord = word.trim().toLowerCase();

            wordCount.put(trimmedWord, wordCount.getOrDefault(trimmedWord, 0)+ 1);

        }
        return wordCount;
    }

    public static void main(String[] args) {
        String s = "Apple, banana, Banana, apple";
        Map<String, Integer>
                wordCount = countWords(s);

        System.out.println(wordCount);
    }
}
